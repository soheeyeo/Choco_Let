"use client";
import { useSessionContext } from "@/app/AuthProvider";
import { fetchData } from "@/data/fetchData";
import { Like } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

// 좋아요 데이터 조회
const fetchLikes = async (): Promise<Like[]> => {
    const res = await fetchData("GET", "like");
    return res;
};

export default function useGetLike() {
    const session = useSessionContext();
    const userId = session?.user?.id;

    // 좋아요 목록 조회 React Query 훅
    // userId가 존재할 때만 API 호출 실행
    const {
        data: likedItem,
        isError,
        error,
    } = useQuery<Like[]>({
        queryKey: ["likes", userId],
        queryFn: fetchLikes,
        enabled: !!userId,
    });

    const likedItemList = likedItem?.map((chocolate) => chocolate.chocolateId);

    return {
        likedItemList,
        isError,
        error,
    };
}
