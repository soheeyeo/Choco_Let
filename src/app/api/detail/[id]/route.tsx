import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
    id: string;
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<RouteParams> }
) {
    const routeParams = await params;
    const id = parseInt(routeParams.id);

    const result = await prisma.chocolate.findUnique({
        where: { id: id },
    });
    return NextResponse.json(result);
}
