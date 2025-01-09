import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
    const userData = await req.json();
    let hash = await bcrypt.hash(userData.pw, 10);
    userData.pw = hash;
    let find = await prisma.user.findUnique({
        where: {
            email: userData.email,
        },
    });

    if (find) {
        return Response.json(
            { message: "이미 가입된 이메일입니다." },
            { status: 500 }
        );
    } else {
        let user = await prisma.user.create({
            data: {
                email: userData.email,
                password: userData.pw,
                name: userData.nickname,
            },
        });
        return Response.json({ message: "가입완료" }, { status: 200 });
    }
}
