import { cache } from "react";
import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

export const getItems = cache(async (where: Prisma.ChocolateWhereInput) => {
    const items = await prisma.chocolate.findMany({ where });
    return items;
});

export const getItemById = cache(async (id: number) => {
    return prisma.chocolate.findUnique({ where: { id } });
});

export const getItemByName = cache(async (name: string) => {
    return prisma.chocolate.findUnique({ where: { name } });
});
