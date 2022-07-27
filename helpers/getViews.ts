import { PrismaClient } from "@prisma/client";

export default async function getViews(slug: string) {
    const prisma = new PrismaClient()

    async function main() {
        const post = await prisma.post.findUnique({
            where: {
                slug: slug,
            },
        });

        const views = post?.views;

        return views;
    }

    const views = main()
        .catch((e)=> {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })

    return views;
}