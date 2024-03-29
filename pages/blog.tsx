import type { NextPage } from 'next';
import { useState, useEffect } from "react";
import Head from 'next/head';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from '../components/SearchBar';
import useViewport from "../hooks/useViewport";
import styles from "../styles/Blog.module.scss";
import PostCard from '../components/PostCard';
import dateToString from '../helpers/dateToString';
import getCategories from '../helpers/getCategories';
import getLatestPosts from '../helpers/getLatestPosts';

type Posts = {
    slug: string;
    data: {
        title: string;
        date: string;
        description: string;
        category: string;
    }
}

type BlogProps = {
    posts: Posts[];
    categories: string[];
}

const Blog = ({ posts, categories }: BlogProps) => {

    const {isMobile, isTablet, isDesktop} = useViewport();
    const [input, setInput] = useState('');

    useEffect(() => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        setInput(params.get("q") || "");
    }, [])

    const matches = posts.filter(element => {
        const keyword = input.toLowerCase();
        if (element.data.title.toLowerCase().includes(keyword) || element.data.description.toLowerCase().includes(keyword) || element.data.category.toLowerCase().includes(keyword)) {
            return true;
        }
    })

    console.log(matches);

    return (
        <div className={styles.container}>
            <Head>
                <title>Blog | Ben Asokanthan</title>
                <meta name="description" content="Personal Blog Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar isDesktop={isDesktop} />
                <div className={styles.main}>
                    <div className={styles.search}>
                        <label className={styles.label}>Blog</label>
                        <br />
                        <SearchBar input={input} setInput={setInput} />
                        {matches.map((post) => (
                            <PostCard
                                key={post.slug}
                                transparent
                                title={post.data.title}
                                link={`/blog/${post.slug}`}
                                category={post.data.category}
                                date={dateToString(new Date(post.data.date))}
                            >
                                {post.data.description}
                            </PostCard>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Blog;

export async function getStaticProps() {
  const posts = await getLatestPosts({});
  const categories = await getCategories();

  return {
    props: {
      posts,
      categories,
    },
  };
};
