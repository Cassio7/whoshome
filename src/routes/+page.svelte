<script lang="ts">
	let { data } = $props();
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
