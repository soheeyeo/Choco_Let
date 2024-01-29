import { prisma } from "@/lib/prisma";

export async function GET(req, { params }) {
    const name = params.type;

    const result = await prisma.chocolate.findUnique({
        where: { name: name },
    });
    return Response.json(result);
}
