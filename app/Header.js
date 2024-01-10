import Link from "next/link";
import { categories } from "@/constants/constants";

export default function Header() {
    return (
        <header>
            <div className="navbar">
                <h1 className="logo">
                    <Link href="/" className="logo_wrapper">
                        <img src="/assets/logo.png" className="logo_img" />
                    </Link>
                </h1>
                <ul className="link_li">
                    {categories.map((a) => {
                        return (
                            <li className="link">
                                <Link href={a.link}>{a.category}</Link>
                            </li>
                        );
                    })}
                    <li className="link">
                        <Link href="/test">추천 테스트</Link>
                    </li>
                </ul>
                <div className="account_li">
                    <Link href="/signup">회원가입</Link>
                    <Link href="/login">로그인</Link>
                </div>
            </div>
        </header>
    );
}
