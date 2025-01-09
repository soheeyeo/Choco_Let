import "./globals.css";
import Header from "../components/common/Header";
import AuthSession from "./AuthSession";

export const metadata = {
    title: "ChocoLet",
    description: {
        default: "초콜릿 추천 서비스 초코렛",
        template: "%s | 초코렛",
    },
    icons: {
        icon: "/assets/favicon.ico",
    },
    openGraph: {
        title: "ChocoLet",
        description: {
            default: "초콜릿 추천 서비스 초코렛",
            template: "%s | 초코렛",
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthSession>
                    <Header />
                    {children}
                </AuthSession>
            </body>
        </html>
    );
}
