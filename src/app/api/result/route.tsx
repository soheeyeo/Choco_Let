import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const name = await req.json();

    const result = await prisma.chocolate.findUnique({
        where: { name: name },
    });
    return Response.json(result);
}
