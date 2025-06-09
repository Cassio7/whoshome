<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>WhosHome</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<Navbar></Navbar>
{@render children()}
