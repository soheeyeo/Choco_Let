import { PrismaClient } from "@prisma/client";
import chocolate from "../util/data.js";

const prisma = new PrismaClient();

async function main() {
    for (let item of chocolate) {
        const chocolate = await prisma.chocolate.create({
            data: item,
        });
        console.log(chocolate);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
