import { NextResponse } from "next/server";

export const runtime = "edge";

export type Post = { id: number; title: string; body: string; userId: number };

export async function GET() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
		headers: { "Content-Type": "application/json" },
	});
	if (!res.ok) {
		return NextResponse.json({ error: "Failed to fetch posts" }, { status: 502 });
	}
	const posts: Post[] = await res.json();
	return NextResponse.json({ posts, count: posts.length });
}
