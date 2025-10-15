import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";
import Naver from "next-auth/providers/naver";

export const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
        Kakao({
            clientId: process.env.AUTH_KAKAO_ID!,
            clientSecret: process.env.AUTH_KAKAO_SECRET!,
        }),
        Naver({
            clientId: process.env.AUTH_NAVER_ID!,
            clientSecret: process.env.AUTH_NAVER_SECRET!,
        }),
    ],
    pages: {
        signIn: "/login",
    },
} satisfies NextAuthConfig;
