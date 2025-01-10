import { PrismaClient } from "@prisma/client";

const globalThis = global as unknown as { prisma: PrismaClient };

// 전역 객체에 prisma 인스턴스 있으면 사용, 없으면 새로운 PrismaClient 인스턴스 생성
export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
