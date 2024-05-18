import { NextRequest, NextResponse, MiddlewareConfig } from "next/server";
import { isAuthRoute } from "./_guards/auth";

export default function middleware(req: NextRequest) {
  if (
    (req.nextUrl.pathname.startsWith("/register") ||
      req.nextUrl.pathname.startsWith("/login")) &&
    isAuthRoute(req)
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
