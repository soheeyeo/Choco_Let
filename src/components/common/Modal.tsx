"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
}

export default function Modal({ setIsOpen }: ModalProps) {
    const router = useRouter();
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const modalAnimationTime = 300;

    // 모달 닫기 버튼 클릭 시 애니메이션 적용
    const handleModalClose = () => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsOpen(false);
            setIsAnimating(false);
        }, modalAnimationTime);
    };

    const handleModalConfirm = () => {
        // 현재 위치 storage에 저장 후 로그인 페이지 이동
        const storage = globalThis?.sessionStorage;
        storage.setItem("prevPath", globalThis.location.pathname);
        router.push(
            `/login?next=${encodeURIComponent(window.location.pathname)}`
        );
    };

    // 모달 외부 영역 클릭 시 애니메이션 적용
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleModalClose();
        }
    };

    return (
        <div
            className={`modal ${isAnimating ? "close" : ""}`}
            onClick={handleBackdropClick}
        >
            <div className="modal_container">
                <div className="modal_content">
                    <p>로그인이 필요한 서비스입니다.</p>
                    <p>로그인하시겠습니까?</p>
                </div>
                <div className="modal_btn_container">
                    <button
                        type="button"
                        onClick={handleModalClose}
                        className="modal_cancel_btn"
                    >
                        취소
                    </button>
                    <button
                        type="button"
                        onClick={handleModalConfirm}
                        className="modal_confirm_btn"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}
