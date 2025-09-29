"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="not_found_container">
            <Image
                src="/assets/emoji.png"
                alt="not found"
                width={300}
                height={300}
            />
            <div className="not_found_content">
                <p className="not_found_message">페이지를 찾을 수 없습니다.</p>
                <p className="not_found_message">
                    경로가 정확한지 다시 확인해주세요.
                </p>
                <button
                    type="button"
                    className="not_found_btn"
                    onClick={() => router.push("/")}
                >
                    홈으로 돌아가기
                </button>
            </div>
        </div>
    );
}
