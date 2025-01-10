"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface Children {
    children: React.ReactNode;
}

export default function AuthSession({ children }: Children) {
    return <SessionProvider>{children}</SessionProvider>;
}
