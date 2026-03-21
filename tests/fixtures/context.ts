// tests/fixtures/context.ts
import type { PluginCtx } from "../../src/shared/types";

interface MockCtxOptions {
	directory?: string;
	worktree?: string;
}

/**
 * Creates a mock PluginCtx for testing.
 * Only `directory` and `worktree` are meaningfully configurable —
 * the rest are stubs that satisfy the type without real SDK behavior.
 */
export function createMockCtx(options: MockCtxOptions = {}): PluginCtx {
	const { directory = "/tmp/test", worktree = directory } = options;
	return {
		project: {},
		client: {},
		// biome-ignore lint/suspicious/noExplicitAny: stub for BunShell type
		$: (() => {}) as any,
		directory,
		worktree,
		serverUrl: new URL("http://localhost:0"),
	} as unknown as PluginCtx;
}
