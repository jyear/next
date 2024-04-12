import Apis from "@/apis";
import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest } from "next";
import { parseBodyOnReq } from "@/utils/util";

export async function POST(req: any) {
  // const body = await parseBodyOnReq(req);
  // console.log(req);
  console.log(1122);
  const res1 = await Apis.User.login(req.bodyObject);
  return NextResponse.json(res1);
}
