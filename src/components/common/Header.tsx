"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { categories } from "@/constants/constants";
import LogoutBtn from "../button/LogoutBtn.js";
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const session = useSession();
    const menuRef = useRef<HTMLUListElement | null>(null);
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        // ref 바깥 영역 클릭 시 active 상태 false로 변경
        function handleClickOutside(e: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setActive(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [menuRef]);

    // 메뉴 버튼 클릭 시 active 상태 변경
    const handleClickCategory = () => {
        setActive(!active);
    };

    return (
        <header>
            <div className="navbar">
                <h1 className="logo">
                    <Link href="/" className="logo_wrapper">
                        <img src="/assets/logo.png" className="logo_img" />
                    </Link>
                </h1>
                <ul
                    ref={menuRef}
                    className={`link_li ${active ? "active" : ""}`}
                >
                    {categories.map((category, i) => {
                        return (
                            <li
                                className="link"
                                key={i}
                                onClick={handleClickCategory}
                            >
                                <Link href={category.link}>
                                    {category.category}
                                </Link>
                            </li>
                        );
                    })}
                    <li className="link" onClick={handleClickCategory}>
                        <Link href="/test">추천 테스트</Link>
                    </li>
                </ul>
                {session.data ? (
                    <div className="account_li">
                        <button
                            className="menu_btn"
                            onClick={handleClickCategory}
                        >
                            메뉴
                        </button>
                        <Link href="/like" className="like_btn">
                            관심 목록
                        </Link>
                        <LogoutBtn />
                    </div>
                ) : (
                    <div className="account_li">
                        <Link href="/signup" className="signUp_btn">
                            회원가입
                        </Link>
                        <Link href="/login">로그인</Link>
                    </div>
                )}
            </div>
        </header>
    );
}
