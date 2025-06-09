import { db } from '$lib/server/db';
import { person } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function GET() {
	try {
		const persons = await db.select().from(person);
		return json(persons);
	} catch (error) {
		return json({ error: 'Failed to fetch persons' }, { status: 500 });
	}
}

export async function PUT({ request }) {
	const { id, ...updateData } = await request.json();

	if (!id) {
		return json({ error: 'ID is required' }, { status: 400 });
	}

	const result = await db.update(person).set(updateData).where(eq(person.id, id)).returning();

	if (result.length === 0) {
		return json({ error: 'Person not found' }, { status: 404 });
	}

	return json(result[0]);
}
