import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request, context: { params: any }) {
  return NextResponse.json({
    response: {

    },
  });
}
