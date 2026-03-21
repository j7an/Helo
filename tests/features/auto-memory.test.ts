import { describe, expect, test } from "bun:test";
import { registerAutoMemory } from "../../src/features/auto-memory";
import { createMockCtx } from "../fixtures/context";

describe("registerAutoMemory", () => {
	const mockCtx = createMockCtx();

	test("returns an object with hook registrations", () => {
		const hooks = registerAutoMemory(mockCtx);
		expect(typeof hooks).toBe("object");
		expect(Object.keys(hooks).length).toBeGreaterThan(0);
	});

	test("registers session.created hook", () => {
		const hooks = registerAutoMemory(mockCtx);
		expect(typeof hooks["session.created"]).toBe("function");
	});
});
