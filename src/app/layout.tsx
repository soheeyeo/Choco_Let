import "@/app/globals.css";
import Header from "@/components/common/Header";
import AuthSession from "./AuthSession";
import React from "react";
import localFont from "next/font/local";

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

const NanumSquareRound = localFont({
    src: [
        {
            path: "/fonts/NANUMSQUAREROUNDR.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "/fonts/NANUMSQUAREROUNDB.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "/fonts/NANUMSQUAREROUNDEB.ttf",
            weight: "800",
            style: "normal",
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko">
            <body className={NanumSquareRound.className}>
                <AuthSession>
                    <Header />
                    {children}
                </AuthSession>
            </body>
        </html>
    );
}
