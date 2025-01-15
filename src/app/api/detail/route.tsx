import { prisma } from "@/lib/prisma";
export async function GET(req: Request) {
    const searchParams = new URL(req.url).searchParams;
    const param = searchParams.get("id");
    const id = param ? parseInt(param) : undefined;

    const result = await prisma.chocolate.findUnique({
        where: { id: id },
    });
    return Response.json(result);
}
