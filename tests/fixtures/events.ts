// tests/fixtures/events.ts

interface MockSessionEvent {
	event: Record<string, unknown>;
}

interface SessionEventOptions {
	[key: string]: unknown;
}

/**
 * Creates a mock event object for hook handler tests.
 */
export function createMockEvent(options: SessionEventOptions = {}): MockSessionEvent {
	return {
		event: { ...options },
	};
}
