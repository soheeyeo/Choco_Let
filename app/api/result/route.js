import { prisma } from "@/lib/prisma";

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const name = searchParams.get("name");

    const result = await prisma.chocolate.findUnique({
        where: { name: name },
    });
    return Response.json(result);
}
