import getPosts from "./getPosts";
import sortByRecent from "./sortByRecent";

type Post = {
    slug: string;
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
    }
}

type getLatestPostsProps = {
    limit?: number;
}

export default async function getLatestPosts( {limit}: getLatestPostsProps ) {
    const posts = await getPosts();
    
    const recentPosts = posts.sort((post1, post2) => {
        const d1 = Date.parse(post1.data.date);
        const d2 = Date.parse(post2.data.date);
    
        if (d1 < d2) return 1;
        else if (d2 < d1) return -1;
        else return 0;
    })

    return recentPosts.slice(0, limit);
    
}