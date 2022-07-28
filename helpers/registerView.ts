import { PrismaClient } from "@prisma/client";
import getViews from "./getViews";

export default async function registerView(slug: string) {
    const prisma = new PrismaClient()

    async function main() {
        const updatePost = await prisma.post.update({
            where: {
                slug: slug,
            },
            data: {
                views: {
                    increment: 1
                }
            }
        })
        console.log(updatePost);
    }

    main()
        .catch((e)=> {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
        
}