import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
        if (req.auth?.user) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    } else if (pathname.startsWith("/like")) {
        if (!req.auth?.user) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
});
