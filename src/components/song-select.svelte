<script lang="ts">
	import { FUNCTIONS_BASE_URL } from '../constants';
	import Select from 'svelte-select';

	const searchSongs = async (searchString) => {
		const result = await fetch(
			`${FUNCTIONS_BASE_URL}/spotify-search?searchString=${searchString}`,
			{
				method: 'GET',
				mode: 'cors'
			}
		);
		return result.json();
	};
</script>

<div class="w-full"><Select loadOptions={searchSongs} /></div>
