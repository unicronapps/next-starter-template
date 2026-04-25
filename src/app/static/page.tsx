import type { Post } from "@/app/api/posts/route";

// Force static — built at compile time, served as a static HTML file
export const dynamic = "force-static";

async function getPosts(): Promise<Post[]> {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
	if (!res.ok) throw new Error("Failed to fetch");
	return res.json();
}

export default async function StaticPage() {
	const posts = await getPosts();
	const builtAt = new Date().toISOString();

	return (
		<main className="max-w-2xl mx-auto p-8">
			<h1 className="text-2xl font-bold mb-2">Static Page</h1>
			<p className="text-sm text-gray-500 mb-6">
				Built (statically) at: <code>{builtAt}</code>
			</p>
			<ul className="space-y-4">
				{posts.map((post) => (
					<li key={post.id} className="border rounded p-4">
						<h2 className="font-semibold">{post.title}</h2>
						<p className="text-sm text-gray-600 mt-1">{post.body}</p>
					</li>
				))}
			</ul>
		</main>
	);
}
