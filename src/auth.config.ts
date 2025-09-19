import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";
import Naver from "next-auth/providers/naver";

export default {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials, req) => {
                const { email, password } = credentials;

                try {
                    let user = await prisma.user.findUnique({
                        where: {
                            email: email as string,
                        },
                    });

                    // 유저가 없는 경우 에러 처리
                    if (!user) {
                        console.log("유저 정보 없음");
                        return null;
                    }

                    const pwCheck = await bcrypt.compare(
                        password as string,
                        user.password!
                    );

                    // 비밀번호가 일치하지 않는 경우 에러 처리
                    if (!pwCheck) {
                        console.log("비밀번호 불일치");
                        return null;
                    }

                    return {
                        id: user.id,
                        email: user.email || undefined,
                        name: user.name || null,
                    };
                } catch (err) {
                    // 예상치 못한 에러 처리
                    console.error("Authorize Error:", err);
                    return null;
                }
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Kakao({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!,
        }),
        Naver({
            clientId: process.env.NAVER_CLIENT_ID!,
            clientSecret: process.env.NAVER_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: "/login",
    },
} satisfies NextAuthConfig;
