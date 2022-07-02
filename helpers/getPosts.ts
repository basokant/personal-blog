import matter from "gray-matter";
import fs from "fs";
import path from "path";

export default async function getPosts()  {
    const list = fs.readdirSync(path.join("posts"));

    const files = list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    
    const allPostsData = files.map((fileName) => {

        const slug = fileName.replace(".mdx", "");
        const fileContents = fs.readFileSync(
            path.join(`posts/${slug}.mdx`),
            "utf8"
        );
        const { data } = matter(fileContents);
        return {
            slug,
            data,
        };
    });

    console.log(allPostsData);

    const publishedPosts = allPostsData.filter((post) => {
        if (post.data.isPublished == null) {
            return false;
        }
        
        return post.data.isPublished;
    })

    return publishedPosts;
}