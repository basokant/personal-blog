import matter from "gray-matter";
import fs from "fs";
import path from "path";
import readingTime from "reading-time";

const getPost = async (slug: string) => {
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
    // const { data, content } = matter(fileContents);
    // return {
    //     readingTime: readingTime(content),
    //     data,
    //     content,
    // };

    return fileContents;
}

export default getPost;