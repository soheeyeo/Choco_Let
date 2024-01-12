import Link from "next/link";

export default function Modal() {
    return (
        <div className="modal">
            <div className="modal_container">
                <div className="modal_content">
                    <p>로그인이 필요한 서비스입니다.</p>
                    <p>로그인하시겠습니까?</p>
                </div>
                <div className="modal_btn_container">
                    <button className="modal_btn_l">취소</button>
                    <button className="modal_btn_r">확인</button>
                </div>
            </div>
        </div>
    );
}
