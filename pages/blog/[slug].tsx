import { GetStaticProps } from "next";
import { useMemo, useEffect } from "react";
import {h} from "hastscript";
import Image from 'next/image';

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import matter from "gray-matter";
import { ReadTimeResults } from "reading-time";
import readingTime from "reading-time";

import Head from "next/head";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import emoji from "remark-emoji";
import remarkReadingTime from "remark-reading-time";
import readingMdxTime from "remark-reading-time/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeAutolinkHeadings from "remark-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkSlug from 'remark-slug';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkPrism from "remark-prism";
import rehypePrism from "rehype-prism";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import ViewCounter from "../../components/ViewCounter";
import getPost from "../../helpers/getPost";
import getPosts from "../../helpers/getPosts";
import useViewport from "../../hooks/useViewport";

import styles from "../../styles/Post.module.scss";

import Signature from "../../components/Signature";
import Logo from "../../components/Logo";
import Spicy from "../../components/spicy";
import Sparkles from "../../components/Sparkles";
import Info from "../../components/Info";
import Accordion from "../../components/Accordion";
import YouTube from "../../components/youtube";
import CodePen from "../../components/CodePen";
import Replit from "../../components/Replit";
import AudioPlayer from "react-audio-player";
import Icon from "../../components/Icon";

import initializePosts from "../../helpers/initializePosts";

type PostProps = {
  mdxSource: MDXRemoteSerializeResult,
  frontmatter: {
    title: string,
    date: string,
    description: string,
    category: string,
    isPublished: boolean,
    readingTime: ReadTimeResults,
    slug: string,
  }
};

const ResponsiveImage = (props: any) => {
  return (
    <Image src={props.src} alt={props.alt} layout="responsive" loading="lazy" width="480px" height="240px" objectFit="scale-down" {...props} />
  );
}

const Post = ({ mdxSource, frontmatter }: PostProps) => {
  const { isMobile, isTablet, isDesktop } = useViewport();

  const components = { 
    img: ResponsiveImage,
    Signature,
    Logo, 
    Spicy, 
    Sparkles, 
    Info, 
    Accordion, 
    YouTube, 
    CodePen, 
    Replit, 
    AudioPlayer,
    Icon
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{frontmatter.title} | Ben Asokanthan</title>
        <meta name="description" content={frontmatter.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/prism-nord.css"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </Head>

      <main>
        <Navbar isDesktop={isDesktop} sticky />
        <Header
          slug={frontmatter.slug}
          title={frontmatter.title}
          category={frontmatter.category}
          date={frontmatter.date}
          readingTime={frontmatter.readingTime.text}
        />
        <Layout>
          <MDXRemote {...mdxSource} components={components} />
        </Layout>
        <Footer />
      </main>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && typeof params.slug == "string") {
    const slug = params.slug;
    
    const source = await getPost(slug);
    const { content, data } = matter(source)
    const mdxSource = await serialize(
      content,
      {
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            remarkGemoji,
            emoji,
            remarkReadingTime,
            readingMdxTime,
            remarkMath,
            remarkSlug,
            [ remarkAutoLinkHeadings,
              {
                behavior: "wrap",
                linkProperties: {
                  className: "Layout_header__M_IZ8",
                }
              }
            ],
            [
              remarkPrism,
              {
                plugins: [
                  "command-line",
                  "diff-highlight",
                  "inline-color",
                  "keep-markup",
                ],
              },
            ],
          ],
          rehypePlugins: [
            rehypeKatex,
            rehypeSlug,
            // [
            //   rehypePrism,
            //   {
            //     plugins: [
            //       "command-line",
            //       "diff-highlight",
            //       "inline-color",
            //       "keep-markup",
            //       "normalize-whitespace",
            //     ]
            //   }
            // ],
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
                properties: {
                  className: ['header'],
                  tabIndex: -1
                }
              },
            ],
          ],
          format: 'mdx'
        },

        parseFrontmatter: false,
      }
    );

    return {
      props: {
        mdxSource,
        frontmatter: {
          ...data,
          readingTime: readingTime(content),
          slug,
        }
      }
    }
  }

  return {
    props: {
      mdxSource: "",
      frontmatter: {},
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => {
    return { params: { slug: post.slug } };
  });

  const slugs = posts.map((post) => post.slug)
  initializePosts(slugs);

  console.log(slugs);

  return {
    paths: paths,
    fallback: "blocking",
  };
}