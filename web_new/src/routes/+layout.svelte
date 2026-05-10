<script>
	import '../app.css';
	import { assets } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={assets + '/favicon.png'} />
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
