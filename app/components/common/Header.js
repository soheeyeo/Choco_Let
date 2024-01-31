"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { categories } from "@/constants/constants";
import LogoutBtn from "../button/LogoutBtn.js";
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const session = useSession();

    const menuRef = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        function handleOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setActive(false);
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, [menuRef]);

    const handleMenu = () => {
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
                    {categories.map((a, i) => {
                        return (
                            <li className="link" key={i} onClick={handleMenu}>
                                <Link href={a.link}>{a.category}</Link>
                            </li>
                        );
                    })}
                    <li className="link" onClick={handleMenu}>
                        <Link href="/test">추천 테스트</Link>
                    </li>
                </ul>
                {session ? (
                    <div className="account_li">
                        <button className="menu_btn" onClick={handleMenu}>
                            메뉴
                        </button>
                        <Link href="/like">관심 목록</Link>
                        <LogoutBtn />
                    </div>
                ) : (
                    <div className="account_li">
                        <Link href="/signup">회원가입</Link>
                        <Link href="/login">로그인</Link>
                    </div>
                )}
            </div>
        </header>
    );
}
