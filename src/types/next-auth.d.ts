import NextAuth from "next-auth";
import { User as PrismaUser } from "@prisma/client";

export declare module "next-auth" {
    interface User {
        id: string;
        email?: string;
        password?: string;
    }
}
