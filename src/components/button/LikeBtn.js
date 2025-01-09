import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Modal from "../common/Modal";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiMiniHeart } from "react-icons/hi2";

export default function LikeBtn({ styles, id, liked, size }) {
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
