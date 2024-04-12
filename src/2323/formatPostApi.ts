import { NextRequest, NextResponse } from "next/server";
import { parseBodyOnReq } from "@/utils/util";

export async function formatPostApi(request: any, ev: any, result: any) {
  let response: any;
  console.log(999, request.method);
  if (request.method === "POST") {
    const body = await parseBodyOnReq(request);
    console.log(99999);
    response = NextResponse.next();
    response["bodyObject"] = body;
  } else {
    response = NextResponse.next();
  }

  return response;
}

// export const config = {
//   matcher: "/api/:path*",
// };
