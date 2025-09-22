import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const name = await req.json();

    const result = await prisma.chocolate.findUnique({
        where: { name: name },
    });
    return NextResponse.json(result);
}
