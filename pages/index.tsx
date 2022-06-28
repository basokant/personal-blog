import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import useViewport from '../hooks/useViewport';
import getPosts from '../helpers/getPosts';
import dateToString from '../helpers/dateToString';
import sortByRecent from '../helpers/sortByRecent';
import getCategories from '../helpers/getCategories';

const RECENT_POSTS = 8;

type Posts = {
  slug: string;
  data: {
    title: string;
    date: string;
    description: string;
    category: string;
  }
}

type HomeProps = {
  posts: Posts[];
  categories: string[];
}

const Home = ( { posts, categories }: HomeProps ) => {

  const {isMobile, isTablet, isDesktop} = useViewport();

  posts = sortByRecent(posts)

  const recentPosts = posts.slice(0,RECENT_POSTS);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ben Asokanthan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Navbar isDesktop={isDesktop} />
        <Hero isDesktop={isDesktop} />
        <div className={styles.recent}>
          <h2>RECENTLY PUBLISHED</h2>
            {recentPosts.map((post) => (
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
            {categories.map((category, index) => <a key={index} className={styles.category} href="">{category}</a>)}
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default Home

export const getStaticProps = () => {
  const posts = getPosts();
  const categories = getCategories();

  return {
    props: {
      posts,
      categories,
    },
  };
};