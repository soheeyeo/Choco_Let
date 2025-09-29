import { useSessionContext } from "@/app/AuthProvider";
import { fetchData } from "@/data/fetchData";
import { Like } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HiMiniHeart, HiOutlineHeart } from "react-icons/hi2";
import Modal from "../common/Modal";

interface LikeBtnProps {
    styles: Record<string, string>;
    id: number;
    liked: boolean;
}

// 좋아요 상태 변경
const toggleLikes = async (id: number): Promise<Like[]> => {
    const res = await fetchData("POST", "like", id);
    return res;
};

export default function LikeBtn({ styles, id, liked }: LikeBtnProps) {
    const session = useSessionContext();
    const queryClient = useQueryClient();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const userId = session?.user?.id;

    // 좋아요 상태 변경 React Query mutation
    const { mutate } = useMutation<Like[], Error, number>({
        mutationFn: (id: number) => toggleLikes(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["likes", userId] });
        },
        onError: (error) => {
            console.log("좋아요 처리 실패", error);
            alert("좋아요 처리 중 문제가 발생했습니다. 다시 시도해주세요.");
        },
    });

    // 좋아요 버튼 클릭 핸들러
    const handleOnClick = async () => {
        // 로그인 세션이 없는 경우, 로그인 안내 모달 표시
        if (!session) {
            setIsOpen(true);
            return;
        }
        mutate(id);
    };

    return (
        <>
            {/* 좋아요 버튼 */}
            <button
                type="button"
                onClick={handleOnClick}
                className={styles.like_btn}
                aria-label={liked ? "좋아요 취소" : "좋아요"}
            >
                {liked ? (
                    <HiMiniHeart
                        color="#EB7EA2"
                        className={styles.like_icon_f}
                    />
                ) : (
                    <HiOutlineHeart
                        color="#EB7EA2"
                        className={styles.like_icon}
                    />
                )}
            </button>

            {/* 로그인 안내 모달 */}
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
}
