import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // const url = request.nextUrl.clone();
    //
    // let isLogin = request.cookies.get("token");
    // if (!isLogin) {
    //     if (request.nextUrl.pathname.startsWith("/lk")) {
    //         return NextResponse.redirect(new URL("/auth", request.url));
    //     }
    // }
    //
    // if (request.nextUrl.pathname.startsWith("/auth") && isLogin) {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }
}
