import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placehoder: "이메일" },
                password: {
                    label: "Password",
                    type: "password",
                    placehoder: "비밀번호",
                },
            },

            async authorize(credentials, req) {
                if (!credentials.email) {
                    throw new Error("아이디를 입력해주세요.");
                } else if (!credentials.password) {
                    throw new Error("비밀번호를 입력해주세요.");
                }

                try {
                    let user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                    });

                    if (!user) {
                        throw new Error(
                            "이메일 또는 비밀번호가 일치하지 않습니다."
                        );
                    }

                    const pwCheck = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (!pwCheck) {
                        throw new Error(
                            "이메일 또는 비밀번호가 일치하지 않습니다."
                        );
                    }
                    return user;
                } catch (err) {
                    console.log(err);
                    // try 문에서 전달된 에러 처리
                    if (
                        err.message ==
                        "이메일 또는 비밀번호가 일치하지 않습니다."
                    ) {
                        throw err;
                    }

                    // 예상치 못한 에러 처리
                    throw Error(
                        "로그인 요청 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
                    );
                }
            },
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
        session: async ({ session, token }) => ({
            ...session,
            user: {
                ...session.user,
                id: token.sub,
            },
        }),
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
