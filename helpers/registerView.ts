import { PrismaClient } from "@prisma/client";
import getViews from "./getViews";

export default async function registerView(slug: string) {
    const prisma = new PrismaClient()

    async function main() {
        const post = await prisma.post.findUnique({
            where: {
                slug: slug,
            },
        });

        const views = post?.views;
        
        if (views) {
            const upsertPost = await prisma.post.upsert({
                where: {
                    slug: slug,
                },
                update: {
                    views: views + 1
                },
                create: {
                    slug: slug,
                    views: 1
                }
            })
            console.log("Views exist");
        } else {
            const initializePost = await prisma.post.upsert({
                where: {
                    slug: slug,
                },
                update: {},
                create: {
                    slug: slug,
                    views: 1,
                },
            })
            console.log("Post initialized with 1 view.");
        }
    }

    main()
        .catch((e)=> {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
        
}