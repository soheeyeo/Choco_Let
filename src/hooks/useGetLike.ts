"use client";
import { useState, useEffect } from "react";
import { fetchData } from "@/data/fetchData";
import { Like } from "@prisma/client";
import useSession from "./useSession";

export default function useGetLike() {
    const session = useSession();
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
    }, [session]);

    const likedItemList = likedItem.map((chocolate) => chocolate.chocolateId);

    return {
        likedItemList,
    };
}
