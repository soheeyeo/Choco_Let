"use client";
import React, { useEffect, useRef, useState } from "react";
import { categories } from "@/constants/constants";
import Link from "next/link";
import LogoutBtn from "../button/LogoutBtn";
import Image from "next/image";
import { useSessionContext } from "@/app/AuthProvider";

export default function Header() {
    const session = useSessionContext();
    const menuRef = useRef<HTMLUListElement | null>(null);
    const menuBtnRef = useRef<HTMLButtonElement | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        // 모바일 크기에서 ref 바깥 영역 클릭 시 메뉴 닫기
        function handleClickOutside(e: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                menuBtnRef.current &&
                !menuBtnRef.current.contains(e.target as Node) &&
                isMenuOpen
            ) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    // 모바일 크기에서 메뉴 버튼 클릭 시 isMenuOpen 상태 변경
    const handleClickMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="navbar">
                <h1 className="logo">
                    <Link href="/" className="logo_wrapper">
                        <Image
                            width={77}
                            height={32}
                            src="/assets/logo.png"
                            alt="로고"
                        />
                    </Link>
                </h1>
                <ul
                    ref={menuRef}
                    className={`link_li ${isMenuOpen ? "active" : ""}`}
                    id="menu"
                >
                    {categories.map((category, i) => {
                        return (
                            <li
                                className="link"
                                key={i}
                                onClick={handleClickMenu}
                            >
                                <Link href={category.link}>
                                    {category.category}
                                </Link>
                            </li>
                        );
                    })}
                    <li className="link" onClick={handleClickMenu}>
                        <Link href="/test">추천 테스트</Link>
                    </li>
                </ul>

                <ul className="account_li">
                    {session?.user ? (
                        <>
                            <li className="account_item">
                                <button
                                    type="button"
                                    ref={menuBtnRef}
                                    className="menu_btn"
                                    onClick={handleClickMenu}
                                    aria-controls="menu"
                                    aria-expanded={isMenuOpen}
                                >
                                    메뉴
                                </button>
                            </li>
                            <li className="account_item">
                                <Link href="/like" className="like_btn">
                                    관심 목록
                                </Link>
                            </li>
                            <li className="account_item">
                                <LogoutBtn />
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="account_item">
                                <Link href="/signup" className="signUp_btn">
                                    회원가입
                                </Link>
                            </li>
                            <li className="account_item">
                                <Link href="/login">로그인</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}
