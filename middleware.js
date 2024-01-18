import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.SECRET;

export async function middleware(req) {
    const token = await getToken({ req, secret });
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
        if (token) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    } else if (pathname.startsWith("/like")) {
        if (!token) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
}
