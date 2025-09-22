import "@/app/globals.css";
import React from "react";
import localFont from "next/font/local";
import { getSession } from "@/data/authAction";
import { AuthProvider } from "./AuthProvider";
import Header from "@/components/common/Header";

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
    preload: false,
});

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = await getSession();

    return (
        <html lang="ko" className={NanumSquareRound.className}>
            <body>
                <AuthProvider session={session}>
                    <Header session={session} />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
