// middleware.ts
import { NextResponse } from "next/server";
// import { formatPostApi } from "./middleware/formatPostApi";

// export const config = {
//   matcher: "/",
// };
export const config = {
  matcher: "/apis/:path*",
};

export function middleware(req: any, ev: any) {
  console.log(999, req.method);
  // const chain = [formatPostApi];
  let result = NextResponse.next();
  // console.log(1122233);
  // for (const handler of chain) {
  //   result = await handler(req, ev, result);
  //   if (!result) continue;

  //   if (result.finished) {
  //     break;
  //   }
  // }

  return result;
}
