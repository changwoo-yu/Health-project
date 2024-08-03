import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return NextResponse.json({ data });
}

// const { searchParams } = new URL(request.url);
// const page = searchParams.get("page");
