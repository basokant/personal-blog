import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import useViewport from '../hooks/useViewport';
import ReactTooltip from 'react-tooltip';

import dateToString from '../helpers/dateToString';
import getCategories from '../helpers/getCategories';
import Link from 'next/link';
import getLatestPosts from '../helpers/getLatestPosts';

const RECENT_POSTS = 8;

type Post = {
  slug: string;
  data: {
    title: string;
    date: string;
    description: string;
    category: string;
  }
}

type HomeProps = {
  posts: Post[];
  categories: string[];
}

const Home = ( { posts, categories }: HomeProps ) => {

  const {isMobile, isTablet, isDesktop} = useViewport();

  return (
    <div className={styles.container}>
      <Head>
        <title>Ben Asokanthan</title>
        <meta name="description" content="My Personal Website and Blog" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <main >
        <Navbar isDesktop={isDesktop} />
        <Hero isDesktop={isDesktop} />
        <div className={styles.recent}>
          <h2>RECENTLY PUBLISHED</h2>
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                transparent
                title={post.data.title}
                link={`/blog/${post.slug}`}
                date={dateToString(new Date(post.data.date))}
                category={post.data.category}
              >
                {post.data.description}
              </PostCard>
            ))}
          <h2>CATEGORIES</h2>
          <div className={styles.categories}>
            {categories.map((category, index) => <Link key={index} className={styles.category} href={`/blog?q=${category}`}>{category}</Link>)}
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = await getLatestPosts({limit: RECENT_POSTS});
  const categories = await getCategories();

  return {
    props: {
      posts,
      categories,
    },
  };
};
