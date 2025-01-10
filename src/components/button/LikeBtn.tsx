import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Modal from "../common/Modal";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiMiniHeart } from "react-icons/hi2";

interface LikeBtnProps {
    styles: Record<string, string>;
    id: number;
    liked: boolean;
}

export default function LikeBtn({ styles, id, liked }: LikeBtnProps) {
    const session = useSession();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [like, setLike] = useState<boolean>(liked);

    const handleOnClick = async () => {
        if (!session.data) {
            setIsOpen(true);
        } else {
            try {
                const res = await fetch("/api/like", {
                    method: "POST",
                    body: JSON.stringify(id),
                });
                setLike(!like);
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        setLike(liked);
    }, [liked]);

    return (
        <>
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
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
}
