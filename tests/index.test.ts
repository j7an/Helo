import { describe, expect, test } from "bun:test";
import { Helo } from "../src/index";
import { createMockCtx } from "./fixtures/context";

describe("Helo plugin entry", () => {
	test("exports a function", () => {
		expect(typeof Helo).toBe("function");
	});

	test("returns an object when called with mock context", async () => {
		const result = await Helo(createMockCtx());
		expect(typeof result).toBe("object");
		expect(result).not.toBeNull();
	});
});
