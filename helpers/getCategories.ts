import getPosts from "./getPosts";

export default async function getCategories()  {
    const posts = await getPosts();
    const categories: string[] = [];
    
    posts.forEach((post) => {
        let category = post.data.category;
        if (category && categories.indexOf(category) == -1) categories.push(category);
    })
    return categories;
}