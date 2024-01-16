import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req) {
    const session = await getServerSession(authOptions);

    const likedItems = await prisma.like.findMany({
        where: {
            userId: session.user.id,
        },
    });

    let id = [];
    likedItems.map((i) => {
        id.push(i.chocolateId);
    });

    const likeList = await prisma.chocolate.findMany({
        where: {
            id: { in: id },
        },
    });
    return Response.json(likeList);
}

export async function DELETE(req) {
    const chocolateId = await req.json();

    let find = await prisma.like.findFirst({
        where: {
            chocolateId: chocolateId,
        },
    });

    const deleteItem = await prisma.like.delete({
        where: {
            id: find.id,
        },
    });

    return Response.json(deleteItem);
}
