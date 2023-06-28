import { NextResponse, NextRequest } from "next/server";
import { headers } from 'next/headers'

export async function GET(request) {
  const headersList = headers()
  const host = request.headers.get("host");

  console.log(request)

  console.log(headersList);
  return NextResponse.json({
    response: {
      host,
    },
  });
}
