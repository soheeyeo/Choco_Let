import Link from "next/link";

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
                    <li className="link">
                        <Link href="/list/price/1">가격대별</Link>
                    </li>
                    <li className="link">
                        <Link href="/list/country/1">나라별</Link>
                    </li>
                    <li className="link">
                        <Link href="/list/type/1">종류별</Link>
                    </li>
                    <li className="link">
                        <Link href="/list/flavor/1">맛별</Link>
                    </li>
                    <li className="link">
                        <Link href="/test">추천 테스트</Link>
                    </li>
                </ul>
                <div className="login">
                    <Link href="/login">로그인</Link>
                </div>
            </div>
        </header>
    );
}
