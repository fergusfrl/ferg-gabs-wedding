<script lang="ts">
	import '../styles/tailwind.css';
	import { GOOGLE_MAPS_LINK } from '../constants';

	const handleMapClick = (): void => {
		window.open(GOOGLE_MAPS_LINK, '_blank');
	};
</script>

<svelte:head>
	<title>Welcome</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col items-center pt-20 pb-24 space-y-5">
	<h4 class="font-serif pb-16 uppercase">With all our love and excitement</h4>
	<div class="flex flex-col items-center transform -rotate-12 text-gray-800">
		<h1 class="font-cursive text-7xl">Gabrielle</h1>
		<h1 class="font-cursive text-6xl">&</h1>
		<h1 class="font-cursive text-7xl">Fergus</h1>
	</div>
	<h4 class="font-serif pt-16 uppercase">are delighted to invite you to their wedding on</h4>
	<h3 class="font-cursive text-5xl text-gray-800">01 . 02 . 2023</h3>
	<div class="flex flex-col items-center pt-4">
		<h4 class="font-serif uppercase">82 Simeon Street, Spreydon,</h4>
		<h4 class="font-serif uppercase">Christchruch, 8024</h4>
		<button class="button mt-5" on:click={handleMapClick}>View on map</button>
	</div>
</div>
