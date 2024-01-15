import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    const chocolateData = await req.json();

    let find = await prisma.like.findFirst({
        where: {
            chocolateId: chocolateData,
            userId: session.user.id,
        },
    });

    if (find) {
        let like = await prisma.like.delete({
            where: {
                id: find.id,
            },
        });
        return Response.json({ message: "좋아요 취소" }, { status: 500 });
    } else {
        let like = await prisma.like.create({
            data: {
                chocolateId: chocolateData,
                userId: session.user.id,
            },
        });
        return Response.json({ message: "좋아요" }, { status: 200 });
    }
}
