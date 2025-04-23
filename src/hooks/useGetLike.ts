"use client";
import { fetchData } from "@/data/fetchData";
import { Like } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function useGetLike() {
    const { data: session, status } = useSession();
    const [likedItem, setLikedItem] = useState<Like[]>([]);

    useEffect(() => {
        if (session) {
            async () => {
                try {
                    const result = await fetchData("GET", "like");
                    setLikedItem(result);
                } catch (error) {
                    console.log(error);
                }
            };
        }
    }, [session, status]);

    const likedItemList = likedItem.map((chocolate) => chocolate.chocolateId);

    return {
        likedItemList,
    };
}
