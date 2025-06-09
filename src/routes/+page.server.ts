import type { Persona } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
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
};
