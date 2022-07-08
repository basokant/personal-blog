import { GetStaticProps } from "next";
import { useMemo } from "react";

import {bundleMDX} from 'mdx-bundler';
import {getMDXComponent} from 'mdx-bundler/client';

import Head from "next/head";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import emoji from "remark-emoji";
import readingTime from "reading-time";
import remarkReadingTime from "remark-reading-time";
import readingMdxTime from "remark-reading-time/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeAutolinkHeadings from "remark-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkPrism from "remark-prism";
import {sassPlugin} from 'esbuild-sass-plugin';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import getPost from "../../helpers/getPost";
import getPosts from "../../helpers/getPosts";
import useViewport from "../../hooks/useViewport";

import styles from '../../styles/Post.module.scss';

type PostProps = {
    data: {
        title: string;
        date: string;
        description: string;
        category: string;
        readingTime: {
            text: string,
            minutes: number,
            time: number,
            words: number
        }
    };
    code: string
}

const Post = ({data, code}: PostProps) => {

    const {isMobile, isTablet, isDesktop} = useViewport();

    // const components = { YouTube }
    const MDXComponent = useMemo(() => getMDXComponent(code), [code])
    console.log(data);

    return (
        <div className={styles.container}>
            <Head>
                <title>{data.title} | Ben Asokanthan</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="/prism-nord.css"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
                    integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
                    crossOrigin="anonymous"
                />
            </Head>

            <main>
                <Navbar isDesktop={isDesktop} sticky/>
                <Header title={data.title} category={data.category} date={data.date} readingTime={data.readingTime.text}/>
                <Layout>
                    <MDXComponent />
                </Layout>
                <Footer />
            </main>
        </div>
        
    )

}

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {

    if (params && typeof params.slug == "string") {

        const post = await getPost(params.slug);

        const result = await bundleMDX({
            source: post,
            cwd: '/Users/basokant/Documents/workspace/basokant/posts',
            mdxOptions(options, frontmatter) {

                options.remarkPlugins = 
                    [...(options.remarkPlugins ?? []), 
                        remarkGfm,
                        remarkGemoji, 
                        emoji, 
                        remarkReadingTime, 
                        readingMdxTime,
                        remarkMath,
                        [
                            remarkPrism,
                            {
                                plugins: [
                                    'command-line',
                                    'diff-highlight',
                                    'inline-color',
                                    'keep-markup',
                                ]
                            }
                        ]
                    ]
                                        
                options.rehypePlugins = 
                    [...(options.rehypePlugins ?? []), 
                        rehypeKatex,
                        rehypeSlug,
                        [
                            rehypeAutolinkHeadings,
                            {
                              properties: {
                                className: ["anchor"],
                              },
                            },
                        ],]

                return options
            },
            esbuildOptions(options, frontmatter) {
                options.minify = false
                options.platform = 'node'
                // options.plugins = [...options.plugins, sassPlugin()]

                return options
            },
        })

        const {code, frontmatter} = result;

        return {
            props: {
                data: {
                    readingTime: readingTime(post),
                    ...frontmatter
                },
                code: code,
            }
        }

    } else {
        return {
            props: {
                data: "",
                code: ""
            }
        }
    }
};

export async function getStaticPaths() {
    const posts = await getPosts();

    const paths = posts.map((post) => {
        return { params: {slug: post.slug} };
    });

    console.log(paths);

    return {
        paths: paths,
        fallback: "blocking"
    };
}