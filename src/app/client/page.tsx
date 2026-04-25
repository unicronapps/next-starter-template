"use client";

import { useEffect, useState } from "react";
import type { Post } from "@/app/api/posts/route";

export default function ClientPage() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [name, setName] = useState("");
	const [greeting, setGreeting] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/posts")
			.then((r) => r.json() as Promise<{ posts: Post[] }>)
			.then((data) => setPosts(data.posts))
			.catch(() => setError("Failed to load posts"))
			.finally(() => setLoading(false));
	}, []);

	async function handleGreet(e: React.FormEvent) {
		e.preventDefault();
		const res = await fetch("/api/hello", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name }),
		});
		const data = await res.json() as { message: string };
		setGreeting(data.message);
	}

	return (
		<main className="max-w-2xl mx-auto p-8">
			<h1 className="text-2xl font-bold mb-6">Client Page</h1>

			<section className="mb-8 border rounded p-4">
				<h2 className="font-semibold mb-3">POST /api/hello</h2>
				<form onSubmit={handleGreet} className="flex gap-2">
					<input
						className="border rounded px-3 py-1 flex-1"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button
						type="submit"
						className="bg-black text-white rounded px-4 py-1 hover:bg-gray-800"
					>
						Greet
					</button>
				</form>
				{greeting && <p className="mt-3 text-green-600 font-medium">{greeting}</p>}
			</section>

			<section>
				<h2 className="font-semibold mb-3">GET /api/posts</h2>
				{loading && <p className="text-gray-500">Loading…</p>}
				{error && <p className="text-red-500">{error}</p>}
				<ul className="space-y-4">
					{posts.map((post) => (
						<li key={post.id} className="border rounded p-4">
							<h3 className="font-semibold">{post.title}</h3>
							<p className="text-sm text-gray-600 mt-1">{post.body}</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
