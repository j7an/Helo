import type { FeatureHooks } from "./types";

/**
 * Merges hook registrations from multiple features into a single object.
 * When multiple features register the same hook, they are chained sequentially.
 */
export function mergeFeatures(features: FeatureHooks[]): FeatureHooks {
	const merged: FeatureHooks = {};

	for (const feature of features) {
		for (const [key, handler] of Object.entries(feature)) {
			const prev = merged[key];
			if (prev) {
				merged[key] = async (...args: unknown[]) => {
					await prev(...args);
					await handler(...args);
				};
			} else {
				merged[key] = handler;
			}
		}
	}

	return merged;
}
