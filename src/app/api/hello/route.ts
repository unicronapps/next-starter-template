import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET() {
  return NextResponse.json({
    message: "Hello from the API!",
    timestamp: Date.now(),
  });
}

export function POST(request: Request) {
  return request.json().then((body: unknown) => {
    console.log("Hello");
    const name = (body as Record<string, string>)?.name ?? "World";
    return NextResponse.json({ message: `Hello, ${name}!` }, { status: 201 });
  });
}
