import type { Plugin } from "@opencode-ai/plugin";
import { registerAutoMemory } from "./features/auto-memory";
import { mergeFeatures } from "./shared/merge-features";
import type { FeatureHooks } from "./shared/types";

export const Helo: Plugin = async (ctx) => {
	const features: FeatureHooks[] = [registerAutoMemory(ctx)];

	// biome-ignore lint/suspicious/noExplicitAny: Plugin return type requires flexible hook signatures
	return mergeFeatures(features) as any;
};
