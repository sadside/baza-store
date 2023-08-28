import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {


  if (request.nextUrl.pathname.startsWith('/lk')) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}