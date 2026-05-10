<script>
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		// @ts-ignore
		if (typeof window !== 'undefined' && window.initFront) {
			// @ts-ignore
			window.initFront();
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="logo_block"></div>
<div id="menu_block"></div>

{@render children()}

<div class="footer" id="footer"></div>
