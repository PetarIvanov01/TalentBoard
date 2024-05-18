import { NextRequest } from "next/server";

export function isAuthRoute(req: NextRequest): boolean {
  let type = req.nextUrl.searchParams.get("type") as
    | "employee"
    | "employer"
    | null;

  // @ts-ignore
  if (type === "employee" || type === "employer") {
    return false;
  }

  return true;
}
