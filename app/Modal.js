"use client";

import { useRouter } from "next/navigation";

export default function Modal({ setIsOpen }) {
    const router = useRouter();

    const handleOnClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="modal">
            <div className="modal_container">
                <div className="modal_content">
                    <p>로그인이 필요한 서비스입니다.</p>
                    <p>로그인하시겠습니까?</p>
                </div>
                <div className="modal_btn_container">
                    <button onClick={handleOnClick} className="modal_btn_l">
                        취소
                    </button>
                    <button
                        onClick={() => router.push("/login")}
                        className="modal_btn_r"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}
