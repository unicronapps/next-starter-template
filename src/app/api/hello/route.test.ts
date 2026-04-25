import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock next/server before importing the route
vi.mock("next/server", () => ({
	NextResponse: {
		json: (data: unknown, init?: ResponseInit) =>
			new Response(JSON.stringify(data), {
				...init,
				headers: { "Content-Type": "application/json" },
			}),
	},
}));

const { GET, POST } = await import("./route");

describe("GET /api/hello", () => {
	it("returns 200 with message and timestamp", async () => {
		const res = await GET();
		expect(res.status).toBe(200);
		const body = await res.json() as { message: string; timestamp: number };
		expect(body.message).toBe("Hello from the API!");
		expect(typeof body.timestamp).toBe("number");
	});
});

describe("POST /api/hello", () => {
	it("returns 201 with personalised greeting", async () => {
		const req = new Request("http://localhost/api/hello", {
			method: "POST",
			body: JSON.stringify({ name: "Tejas" }),
			headers: { "Content-Type": "application/json" },
		});
		const res = await POST(req);
		expect(res.status).toBe(201);
		const body = await res.json() as { message: string };
		expect(body.message).toBe("Hello, Tejas!");
	});

	it("defaults to World when name is missing", async () => {
		const req = new Request("http://localhost/api/hello", {
			method: "POST",
			body: JSON.stringify({}),
			headers: { "Content-Type": "application/json" },
		});
		const res = await POST(req);
		const body = await res.json() as { message: string };
		expect(body.message).toBe("Hello, World!");
	});
});
