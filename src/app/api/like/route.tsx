import { getSession } from "@/data/authAction";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getSession();
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
        return NextResponse.json(like);
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
        return NextResponse.json(like);
    }
}

export async function GET(req: NextRequest) {
    const session = await getSession();

    const likedItems = await prisma.like.findMany({
        where: {
            userId: session?.user?.id,
        },
    });
    return NextResponse.json(likedItems);
}
