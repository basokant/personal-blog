import getPosts from "./getPosts";

export default function getCategories()  {
    const posts = getPosts();
    const categories: string[] = [];
    
    posts.forEach((post) => {
        let category = post.data.category;
        console.log(category);
        if (category && categories.indexOf(category) == -1) categories.push(category);
    })
    return categories;
}