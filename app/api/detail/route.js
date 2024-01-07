import { prisma } from "@/lib/prisma";

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const param = searchParams.get("id");
    const id = parseInt(param);

    const result = await prisma.chocolate.findUnique({
        where: { id: id },
    });
    return Response.json(result);
}
