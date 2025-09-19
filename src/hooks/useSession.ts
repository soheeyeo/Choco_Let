"use client";

import { useCallback, useEffect, useState } from "react";
import { getSession } from "@/data/authAction";
import type { Session } from "next-auth";
import { usePathname } from "next/navigation";

export default function useSession() {
    const [session, setSession] = useState<Session | null>(null);
    const [status, setStatus] = useState<string>("loading");
    const pathname = usePathname();

    const fetchSession = useCallback(async () => {
        try {
            const sessionData = await getSession();
            if (sessionData) {
                setSession(sessionData);
                setStatus("authenticated");
                return;
            }
            setStatus("unauthenticated");
        } catch (error) {
            setStatus("unauthenticated");
            setSession(null);
        }
    }, []);

    useEffect(() => {
        if (!session) {
            fetchSession();
        }
    }, [fetchSession, session, pathname]);

    return { session, status };
}
