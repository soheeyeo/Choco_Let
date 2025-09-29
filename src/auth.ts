import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24,
    },
    ...authConfig,
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
