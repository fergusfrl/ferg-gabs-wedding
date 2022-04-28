<script lang="ts">
	import { FUNCTIONS_BASE_URL } from '$constants';
	import Select from 'svelte-select';
	import Item from './song-select-item.svelte';

	const optionIdentifier = 'id';
	const getOptionLabel = (option) => option.title;
	const getSelectionLabel = (option) => option.title;

	const searchSongs = async (searchString) => {
		const result = await fetch(
			`${FUNCTIONS_BASE_URL}/spotify-search?searchString=${searchString}`,
			{
				method: 'GET',
				mode: 'cors'
			}
		);
		const data = await result.json();
		return data.songs;
	};
</script>

<div class="w-full">
	<Select
		loadOptions={searchSongs}
		{optionIdentifier}
		{getSelectionLabel}
		{getOptionLabel}
		{Item}
		placeholder="Search by Spotify songs or artists "
	/>
</div>
