import { NextResponse } from "next/server";
export async function GET(request: Request) {
  
  const res = await fetch(`https://naver.com`);
  const data = await res.json();

  return NextResponse.json({ data });
}

// const { searchParams } = new URL(request.url); 
// const page = searchParams.get("page");
