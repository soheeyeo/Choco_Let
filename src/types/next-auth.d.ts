import NextAuth from "next-auth";
import { User as PrismaUser } from "@prisma/client";

export declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        email?: string;
        password?: string;
    }

    interface JWT {
        id: string;
        email?: string;
    }
}
