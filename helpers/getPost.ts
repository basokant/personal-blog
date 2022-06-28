import matter from "gray-matter";
import fs from "fs";
import path from "path";

const getPost = (slug: string) => {
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
    const { data, content } = matter(fileContents);
    return {
        data,
        content,
    };
}

export default getPost;