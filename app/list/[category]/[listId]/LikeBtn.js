import { useState } from "react";
import { useSession } from "next-auth/react";
import Modal from "@/app/Modal";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiMiniHeart } from "react-icons/hi2";

export default function LikeBtn({ styles, id, liked }) {
    const session = useSession();

    const [isOpen, setIsOpen] = useState(false);
    const [like, setLike] = useState(liked);

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
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <>
            <button onClick={handleOnClick} className={styles.like_btn}>
                {like ? (
                    <HiMiniHeart color="#EB7EA2" size="20px" />
                ) : (
                    <HiOutlineHeart color="#EB7EA2" size="20px" />
                )}
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
}
