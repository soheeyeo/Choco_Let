"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="not_found_container">
            <Image
                src="/assets/emoji.png"
                alt="not found"
                width={300}
                height={300}
            />
            <div className="not_found_content">
                <p className="not_found_message">오류가 발생했습니다.</p>
                <p className="not_found_message">잠시 후 다시 시도해주세요.</p>
                <button
                    type="button"
                    className="not_found_btn"
                    onClick={() => reset()}
                >
                    다시 시도하기
                </button>
            </div>
        </div>
    );
}
