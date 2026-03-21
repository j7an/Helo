import type { Plugin } from "@opencode-ai/plugin";

/** The context object passed to the plugin entry function. */
export type PluginCtx = Parameters<Plugin>[0];

/** A record of hook names to async handler functions, returned by feature registration functions. */
// biome-ignore lint/suspicious/noExplicitAny: plugin SDK hooks have dynamic arg shapes per hook name
export type FeatureHooks = Record<string, (...args: any[]) => Promise<void>>;
