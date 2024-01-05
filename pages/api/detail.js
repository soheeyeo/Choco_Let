import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    const id = parseInt(req.query.id);

    const result = await prisma.chocolate.findUnique({
        where: { id: id },
    });
    return res.status(200).json(result);
}
