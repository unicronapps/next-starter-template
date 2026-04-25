import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("next/server", () => ({
	NextResponse: {
		json: (data: unknown, init?: ResponseInit) =>
			new Response(JSON.stringify(data), {
				...init,
				headers: { "Content-Type": "application/json" },
			}),
	},
}));

const mockPosts = [
	{ id: 1, title: "Post 1", body: "Body 1", userId: 1 },
	{ id: 2, title: "Post 2", body: "Body 2", userId: 1 },
];

describe("GET /api/posts", () => {
	beforeEach(() => {
		vi.stubGlobal("fetch", vi.fn());
	});

	it("returns posts from upstream", async () => {
		vi.mocked(fetch).mockResolvedValueOnce(
			new Response(JSON.stringify(mockPosts), { status: 200 })
		);

		const { GET } = await import("./route");
		const res = await GET();
		expect(res.status).toBe(200);
		const body = await res.json() as { posts: typeof mockPosts; count: number };
		expect(body.posts).toEqual(mockPosts);
		expect(body.count).toBe(2);
	});

	it("returns 502 when upstream fails", async () => {
		vi.mocked(fetch).mockResolvedValueOnce(
			new Response(null, { status: 500 })
		);

		// Re-import after mock reset to get fresh module
		vi.resetModules();
		vi.mock("next/server", () => ({
			NextResponse: {
				json: (data: unknown, init?: ResponseInit) =>
					new Response(JSON.stringify(data), {
						...init,
						headers: { "Content-Type": "application/json" },
					}),
			},
		}));
		const { GET } = await import("./route");
		const res = await GET();
		expect(res.status).toBe(502);
		const body = await res.json() as { error: string };
		expect(body.error).toBe("Failed to fetch posts");
	});
});
