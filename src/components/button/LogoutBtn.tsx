"use client";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
    return (
        <button
            onClick={() => {
                signOut({ callbackUrl: "/" });
            }}
        >
            로그아웃
        </button>
    );
}
