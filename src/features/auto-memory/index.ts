import type { FeatureHooks, PluginCtx } from "../../shared/types";

export function registerAutoMemory(_ctx: PluginCtx): FeatureHooks {
	return {
		"session.created": async ({ event: _event }: { event: unknown }) => {
			// TODO: Load memories into session context
		},
		"session.idle": async ({ event: _event }: { event: unknown }) => {
			// TODO: Analyze conversation and save new memories
		},
	};
}
