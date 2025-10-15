import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24,
    },
    providers: [
        ...authConfig.providers,
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
    ],
    callbacks: {
        signIn: async () => {
            return true;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (session && token) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
            }
            return session;
        },
    },
});
