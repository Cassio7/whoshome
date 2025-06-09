<script lang="ts">
	let { data } = $props();

	export async function updatePersona(id: number, active: boolean) {

		const response = await fetch(`/api/persons/`, {
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

		return response.json();
		
	}
</script>

<p>Home</p>
<div class="grid grid-cols-4 gap-4 p-20">
	{#each data.persons as person}
		<div>
			<h3>{person.nome} {person.cognome}</h3>
			<p>Dispositivo: {person.dispositivo}</p>
			<p>Attivo: {person.active ? 'Sì' : 'No'}</p>
		</div>
	{/each}
</div>
