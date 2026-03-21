import { describe, expect, test } from "bun:test";
import { mergeFeatures } from "../../src/shared/merge-features";

describe("mergeFeatures", () => {
	test("merges non-overlapping hooks from multiple features", () => {
		const a = { "session.created": async () => {} };
		const b = { "session.idle": async () => {} };
		const merged = mergeFeatures([a, b]);
		expect(Object.keys(merged)).toEqual(["session.created", "session.idle"]);
	});

	test("chains overlapping hooks sequentially", async () => {
		const calls: string[] = [];
		const a = {
			"session.created": async () => {
				calls.push("a");
			},
		};
		const b = {
			"session.created": async () => {
				calls.push("b");
			},
		};
		const merged = mergeFeatures([a, b]);
		// biome-ignore lint/style/noNonNullAssertion: known key exists in test
		await merged["session.created"]!();
		expect(calls).toEqual(["a", "b"]);
	});

	test("returns empty object for empty input", () => {
		const merged = mergeFeatures([]);
		expect(Object.keys(merged)).toEqual([]);
	});

	test("passes arguments through to chained hooks", async () => {
		const received: number[] = [];
		const a = {
			hook: async (x: number) => {
				received.push(x);
			},
		};
		const b = {
			hook: async (x: number) => {
				received.push(x * 2);
			},
		};
		const merged = mergeFeatures([a, b]);
		// biome-ignore lint/style/noNonNullAssertion: known key exists in test
		// biome-ignore lint/complexity/useLiteralKeys: using bracket access to match test intent
		await merged["hook"]!(5);
		expect(received).toEqual([5, 10]);
	});
});
