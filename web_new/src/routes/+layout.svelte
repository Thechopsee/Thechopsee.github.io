<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<Navbar />

<main>
	{@render children()}
</main>

<Footer />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
