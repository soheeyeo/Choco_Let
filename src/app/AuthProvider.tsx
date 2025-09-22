"use client";
import React, { createContext, useContext } from "react";
import type { Session } from "next-auth";

const SessionContext = createContext<Session | null>(null);

export function AuthProvider({
    children,
    session,
}: {
    children: React.ReactNode;
    session: Session | null;
}) {
    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSessionContext() {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error("세션 컨텍스트 에러");
    }
    return context;
}
