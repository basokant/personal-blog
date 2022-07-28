import { PrismaClient } from "@prisma/client";

export default async function initializePosts(slugs: string[]) {

    const prisma = new PrismaClient();
    
    async function main() {
        for (let slug of slugs) {
            console.log(slug);
            const upsertPost = await prisma.post.upsert({
                where: {
                  slug: slug,
                },
                update: {},
                create: {
                  slug: slug,
                  views: 1,
                },
            });
            console.log(upsertPost);
        }
    }
      
    main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
    
}