import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Modal from "../common/Modal";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiMiniHeart } from "react-icons/hi2";
import { fetchData } from "@/data/fetchData";

interface LikeBtnProps {
    styles: Record<string, string>;
    id: number;
    liked: boolean;
}

export default function LikeBtn({ styles, id, liked }: LikeBtnProps) {
    const session = useSession();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [like, setLike] = useState<boolean>(liked);

    // 좋아요 버튼 클릭 핸들러
    const handleOnClick = async () => {
        // 로그인 세션이 없는 경우, 로그인 안내 모달 표시
        if (!session.data) {
            setIsOpen(true);
            return;
        }

        try {
            // 좋아요 API 요청
            const res = await fetchData("POST", "like", id);
            console.log(res);
            setLike((prev) => !prev);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setLike(liked);
    }, [liked]);

    return (
        <>
            {/* 좋아요 버튼 */}
            <button onClick={handleOnClick} className={styles.like_btn}>
                {like ? (
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
