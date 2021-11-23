<script lang="ts">
	import '../styles/tailwind.css';
	import { GOOGLE_MAPS_LINK } from '../constants';
	import image from '../assets/lake-ohau-lodge-wedding.jpeg';

	import RsvpForm from '../components/rsvp-form.svelte';

	const handleMapClick = (): void => {
		window.open(GOOGLE_MAPS_LINK, '_blank');
	};
</script>

<svelte:head>
	<title>Save the Date | Gabs and Ferg</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col pt-14 space-y-5 items-center border-8 border-autumn-100 min-h-screen">
	<!-- <div class="flex flex-col items-center space-x-4 transform -rotate-6 text-autumn-500">
		<h1 class="font-cursive text-5xl">Gabrielle</h1>
		<h1 class="font-cursive text-3xl">&</h1>
		<h1 class="font-cursive text-5xl">Fergus</h1>
	</div> -->
	<h4 class="font-serif pt-6 uppercase">Save the date</h4>
	<h3 class="font-cursive text-5xl text-autumn-500">06 May, 2023</h3>
	<img src={image} alt="Lake Ohau with Wedding Arch" class="p-5 md:p-10" />
	<h4 class="font-serif uppercase pb-14 mx-16 text-center">We can't wait to celebrate with you</h4>
	<!-- <h4 class="font-serif pt-6 uppercase">Save the date</h4>
	<h3 class="font-cursive text-5xl text-autumn-500">06 May, 2023</h3> -->
	<!-- <div class="flex flex-col items-center pt-4 pb-20 space-y-4">
		<h4 class="font-serif uppercase">Lake Ōhau Lodge</h4>
		<h4 class="font-serif uppercase pb-4">2295 Lake Ōhau Road, Canterbury</h4>
		<button class="button" on:click={handleMapClick}>View on map</button>
	</div> -->
	<!-- <RsvpForm /> -->
</div>
