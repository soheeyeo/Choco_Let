"use client";
import { fetchData } from "@/data/fetchData";
import { Chocolate } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSessionContext } from "../AuthProvider";
import Loading from "../loading";
import styles from "./like.module.css";
import LikeItemCard from "./LikeItemCard";

// 좋아요 목록 조회
const fetchLikeList = async (): Promise<Chocolate[]> => {
    const res = await fetchData("GET", "like/likeList");
    return res;
};

// 좋아요 아이템 삭제
const deleteLikeItem = async (id: number) => {
    const res = await fetchData("DELETE", "like/likeList", id);
    return res;
};

export default function Like() {
    const queryClient = useQueryClient();
    const session = useSessionContext();
    const userId = session?.user.id;

    // 좋아요 목록 조회 React Query 훅
    // userId가 존재할 때만 API 호출 실행
    const {
        data: likeList = [],
        isLoading,
        isFetching,
        isError,
        error,
    } = useQuery<Chocolate[]>({
        queryKey: ["likes", userId],
        queryFn: fetchLikeList,
        enabled: !!userId,
    });

    // 좋아요 아이템 삭제 React Query mutation
    const { mutate } = useMutation<Chocolate[], Error, number>({
        mutationFn: (id: number) => deleteLikeItem(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["likes", userId] });
        },
        onError: (error) => {
            console.log("좋아요 삭제 실패", error);
        },
    });

    // 삭제 버튼 클릭 핸들러
    const handleDeleteClick = async (id: number) => {
        mutate(id);
    };

    if (isError) {
        console.log("좋아요 목록 조회 실패", error?.message);
        alert("좋아요 목록 조회 중 문제가 발생했습니다. 다시 시도해주세요.");
    }

    return (
        <main>
            {!isFetching && !isLoading ? (
                <section className={styles.like_section}>
                    <div className={styles.like_tit}>
                        <h1 className="h1_tit">관심 목록</h1>
                    </div>
                    {likeList.length !== 0 ? (
                        <div className={styles.item_container}>
                            <ul className={styles.item_li}>
                                {likeList.map((chocolate) => (
                                    <li
                                        className={styles.item}
                                        key={chocolate.id}
                                    >
                                        <LikeItemCard
                                            chocolate={chocolate}
                                            styles={styles}
                                            handleOnClick={handleDeleteClick}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className={styles.txt_wrapper}>
                            <p className={styles.like_empty_msg}>
                                아직 관심 목록이 없어요.
                            </p>
                        </div>
                    )}
                </section>
            ) : (
                <Loading style={"data_f"} />
            )}
        </main>
    );
}
