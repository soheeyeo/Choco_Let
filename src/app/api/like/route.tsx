import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    const chocolateData = await req.json();

    let find = await prisma.like.findFirst({
        where: {
            chocolateId: chocolateData,
            userId: session?.user?.id,
        },
    });

    if (find) {
        let like = await prisma.like.delete({
            where: {
                id: find.id,
            },
        });
        return Response.json(like);
    } else {
        if (!session?.user?.id) {
            throw new Error("사용자 인증 정보가 없습니다.");
        }
        let like = await prisma.like.create({
            data: {
                chocolateId: chocolateData,
                userId: session.user.id,
            },
        });
        return Response.json(like);
    }
}

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);

    const likedItems = await prisma.like.findMany({
        where: {
            userId: session?.user?.id,
        },
    });
    return Response.json(likedItems);
}
