const { PrismaClient } = require("@prisma/client");
const chocolate = require("../util/data.js");

const prisma = new PrismaClient();

async function main() {
    for (let item of chocolate) {
        const chocolate = await prisma.chocolate.create({
            data: item,
        });
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
