<script lang="ts">
	import { GOOGLE_MAPS_LINK } from '$constants';
	import image from '../assets/lake-ohau-lodge-wedding.jpeg';

	export const prerender = true;
</script>

<div class="flex flex-col py-14 space-y-5 items-center text-center">
	<div class="flex flex-col items-center space-x-4 transform -rotate-6 text-autumn-500">
		<h1 class="font-cursive text-5xl">Gabrielle</h1>
		<h1 class="font-cursive text-3xl">&</h1>
		<h1 class="font-cursive text-5xl">Fergus</h1>
	</div>
	<img src={image} alt="Lake Ohau with Wedding Arch" class="p-5 md:p-10" />
	<h4 class="font-serif uppercase">
		Are <span class="italic">delighted</span> to invite you to their wedding on
	</h4>
	<h3 class="font-cursive text-3xl md:text-5xl text-autumn-500">6 May, 2023</h3>
	<a
		href={GOOGLE_MAPS_LINK}
		target="_blank"
		class="flex flex-col items-center pt-2 md:pt-4 pb-10 space-y-4 underline hover:no-underline"
	>
		<h4 class="font-serif uppercase">Lake Ōhau Lodge</h4>
		<h4 class="font-serif uppercase pb-2">2295 Lake Ōhau Road, Canterbury</h4>
	</a>

	<div class="w-2/3 border-t border-autumn-500 pb-10" />

	<a href="/rsvp" class="button flex flex-row justify-between mt-20">RSVP & accommodation</a>
	<p class="font-serif uppercase text-sm">Please RSVP by 30th November 2022</p>

	<!-- <Timeline /> -->
</div>
