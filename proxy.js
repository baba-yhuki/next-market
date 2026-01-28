import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(request) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc2OTY4ODMwOH0.g86POQHqxTmM_JGwdd6Wr9pSXqRc-9TmGUC1OeqQGAc";
  // const token = await request.headers.get("Authorization")?.split("")[1];
  if (!token) {
    return NextResponse.json({ message: "トークンがありません" });
  }
  try {
    const secretKey = new TextEncoder().encode("next-market-route-handlers");
    const decodedJwt = await jwtVerify(token, secretKey);
    console.log("decodedJwt:", decodedJwt);
    return NextResponse.next();
  } catch {
    return NextResponse.json({
      message: "トークンが正しくないので、ログインしてください",
    });
  }
}

export const config = {
  matcher: [
    "/api/item/create",
    "/api/item/update/:path*",
    "/api/item/delete/:path*",
  ],
};
