import Link from "next/link";

const pages = [
	{ href: "/ssr", label: "SSR Page", desc: "Server-side rendered on every request (force-dynamic)" },
	{ href: "/static", label: "Static Page", desc: "Pre-rendered at build time (force-static)" },
	{ href: "/client", label: "Client Page", desc: "Fetches data in the browser via API routes" },
];

const apis = [
	{ href: "/api/hello", label: "GET /api/hello", desc: "Returns a greeting JSON response" },
	{ href: "/api/posts", label: "GET /api/posts", desc: "Proxies JSONPlaceholder posts" },
];

export default function Home() {
	return (
		<main className="max-w-2xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-2">Next.js Starter</h1>
			<p className="text-gray-500 mb-8">Cloudflare Workers · App Router · Edge Runtime</p>

			<section className="mb-8">
				<h2 className="text-lg font-semibold mb-3">Pages</h2>
				<ul className="space-y-3">
					{pages.map(({ href, label, desc }) => (
						<li key={href} className="border rounded p-4 hover:bg-gray-50 transition-colors">
							<Link href={href} className="font-medium hover:underline">
								{label}
							</Link>
							<p className="text-sm text-gray-500 mt-1">{desc}</p>
						</li>
					))}
				</ul>
			</section>

			<section>
				<h2 className="text-lg font-semibold mb-3">API Routes</h2>
				<ul className="space-y-3">
					{apis.map(({ href, label, desc }) => (
						<li key={href} className="border rounded p-4 hover:bg-gray-50 transition-colors">
							<a href={href} className="font-medium font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">
								{label}
							</a>
							<p className="text-sm text-gray-500 mt-1">{desc}</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
