<script lang="ts">
	import { goto } from '$app/navigation';

	import { FUNCTIONS_BASE_URL } from '$constants';
	export let item;

	const handleSongClick = async () => {
		const result = await fetch(`${FUNCTIONS_BASE_URL}/spotify-add?id=${item.id}`);
		if (result.status !== 200) {
			alert('Something went horribly wrong');
		}
		goto('/rsvp/thank-you');
	};
</script>

<div class="flex py-1 px-2 cursor-pointer hover:text-red-400 group" on:click={handleSongClick}>
	<div class="font-bold">{item.title}</div>
	<div class="text-gray-600 text-sm ml-2 group-hover:text-red-400">{item.artist[0]}</div>
</div>
