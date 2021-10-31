<script lang="ts">
	import '../styles/tailwind.css';
	import { GOOGLE_MAPS_LINK } from '../constants';
	import image from '../assets/lake-ohau-lodge-wedding.jpeg';

	// import RsvpForm from '../components/rsvp-form.svelte';

	const handleMapClick = (): void => {
		window.open(GOOGLE_MAPS_LINK, '_blank');
	};
</script>

<svelte:head>
	<title>Invitation</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col pt-14 pb-24 space-y-5 items-center border-8 border-autumn-100">
	<div class="flex flex-col items-center space-x-4 transform -rotate-6 text-autumn-500">
		<h1 class="font-cursive text-5xl">Gabrielle</h1>
		<h1 class="font-cursive text-3xl">&</h1>
		<h1 class="font-cursive text-5xl">Fergus</h1>
	</div>
	<img src={image} alt="Lake Ohau with Wedding Arch" class="pt-10 py-5" />
	<h4 class="font-serif pt-6 uppercase">are delighted to invite you to their wedding on</h4>
	<h3 class="font-cursive text-5xl text-autumn-500">01 . 05 . 2023</h3>
	<div class="flex flex-col items-center pt-4 pb-20">
		<h4 class="font-serif uppercase">82 Simeon Street, Spreydon,</h4>
		<h4 class="font-serif uppercase">Christchruch, 8024</h4>
		<button class="button mt-5" on:click={handleMapClick}>View on map</button>
	</div>
	<!-- <RsvpForm /> -->
</div>
