<script context="module" lang="ts">
	export const load = async ({ page }) => ({
		props: {
			refresh: page.path
		}
	});
</script>

<script lang="ts">
	import '../styles/tailwind.css';
	import { fly } from 'svelte/transition';
	export let refresh: string | undefined;
</script>

<svelte:head>
	<title>Wedding | Gabs and Ferg</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="border-8 border-autumn-100 min-h-screen">
	{#key refresh}
		<div in:fly={{ x: -5, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}>
			<slot />
		</div>
	{/key}
</div>
