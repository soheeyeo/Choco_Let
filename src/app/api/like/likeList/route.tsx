import { getSession } from "@/data/authAction";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const session = await getSession();

    const likedItems = await prisma.like.findMany({
        where: {
            userId: session?.user?.id,
        },
    });

    let id: number[] = [];
    likedItems.map((i) => {
        id.push(i.chocolateId);
    });

    const likeList = await prisma.chocolate.findMany({
        where: {
            id: { in: id },
        },
    });
    return NextResponse.json(likeList);
}

export async function DELETE(req: NextRequest) {
    const chocolateId = await req.json();

    let find = await prisma.like.findFirst({
        where: {
            chocolateId: chocolateId,
        },
    });

    const deleteItem = await prisma.like.delete({
        where: {
            id: find?.id,
        },
    });

    return NextResponse.json(deleteItem);
}
