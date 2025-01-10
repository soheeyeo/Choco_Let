"use client";
import { Like } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function useGetLike() {
    const { data: session, status } = useSession();
    const [likedItem, setLikedItem] = useState<Like[]>([]);

    useEffect(() => {
        if (session) {
            fetch("/api/like")
                .then((res) => res.json())
                .then((result) => {
                    setLikedItem(result);
                });
        }
    }, [session, status]);

    const likedItemList = likedItem.map((chocolate) => chocolate.chocolateId);

    return {
        likedItemList,
    };
}
