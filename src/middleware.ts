import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "../auth";

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|public/).*)",
};

const authRoutes = ["/signin", "/signup"];
const protectedRoutes = ["/settings", "/articles"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const session = await auth();

  if (!session?.user) {
    if (protectedRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
