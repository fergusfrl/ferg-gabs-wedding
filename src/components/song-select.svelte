<script lang="ts">
	import axios from 'axios';
	import { FUNCTIONS_BASE_URL } from '../constants';
	import Select from 'svelte-select';

	const searchSongs = async (searchString) => {
		const { data } = await axios.get(
			`${FUNCTIONS_BASE_URL}/spotify-search?searchString=${searchString}`
		);
		return data;
	};
</script>

<Select loadOptions={searchSongs} />
