import { loadPersons } from '$lib/server/loaders';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    return await loadPersons(fetch);
};
