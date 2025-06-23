<script lang="ts">
	import type { Persona } from '$lib';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();

	// Crea una copia reattiva dei dati
	let persons = $state(data.persons);

	async function updatePersona(id: number, active: boolean) {
		const response = await fetch(`/api/persons`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id,
				active
			})
		});

		if (!response.ok) {
			throw new Error('Failed to update person');
		}

		// Aggiorna lo stato reattivo
		const personIndex = persons.findIndex((p) => p.id === id);
		if (personIndex !== -1) {
			persons[personIndex].active = active;
		}

		return response.json();
	}

	async function togglePersonaStatus(person: Persona) {
		try {
			await updatePersona(person.id, !person.active);
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div class="m-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each persons as person}
		<div class="rounded-lg bg-slate-800 py-5 text-center">
			<h3>{person.username}</h3>
			<p>Attivo: {person.active ? 'Sì' : 'No'}</p>
			<Button variant="outline" onclick={() => togglePersonaStatus(person)}>Cambia</Button>
		</div>
	{/each}
</div>
