// src/lib/server/loaders.ts
import type { Persona } from '$lib';

export async function loadPersons(fetch: typeof globalThis.fetch) {
	try {
		const response = await fetch('/api/persons');
		const persons: Persona[] = await response.json();

		return { persons };
	} catch (error) {
		return {
			persons: [],
			error: 'Failed to load users'
		};
	}
}