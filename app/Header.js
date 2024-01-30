import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route.js";
import Link from "next/link";
import { categories } from "@/constants/constants";
import LogoutBtn from "./LogoutBtn.js";

export default async function Header() {
    const session = await getServerSession(authOptions);

    return (
        <header>
            <div className="navbar">
                <h1 className="logo">
                    <Link href="/" className="logo_wrapper">
                        <img src="/assets/logo.png" className="logo_img" />
                    </Link>
                </h1>
                <ul className="link_li">
                    {categories.map((a, i) => {
                        return (
                            <li className="link" key={i}>
                                <Link href={a.link}>{a.category}</Link>
                            </li>
                        );
                    })}
                    <li className="link">
                        <Link href="/test">추천 테스트</Link>
                    </li>
                </ul>
                {session ? (
                    <div className="account_li">
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
