type Posts = {
    slug: string;
    data: {
      title: string;
      date: string;
      description: string;
      category: string;
    }
  }

export default function sortByRecent(posts: Posts[]) {
    return posts.sort((post1, post2) => {
        const d1 = Date.parse(post1.data.date);
        const d2 = Date.parse(post2.data.date);
    
        if (d1 < d2) return 1;
        else if (d2 < d1) return -1;
        else return 0;
    })
}