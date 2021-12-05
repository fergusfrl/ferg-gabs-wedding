<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import arrow from '../assets/arrow.svg';
	const dispatch = createEventDispatcher();

	export var formIndex;

	const pageForward = (): void => {
		dispatch('pageForward');
	};

	const pageBackward = (): void => {
		dispatch('pageBackward');
	};
</script>

<div class="flex justify-between w-72 h-2">
	{#if formIndex > 0}
		<img
			src={arrow}
			alt="Previous arrow"
			class="transform scale-125 cursor-pointer rotate-180 duration-200 hover:-translate-x-1"
			on:click={pageBackward}
		/>
	{:else}
		<div />
	{/if}
	{#if formIndex < 2}
		<img
			src={arrow}
			alt="Next arrow"
			class="transform scale-125 cursor-pointer duration-200 hover:translate-x-1"
			on:click={pageForward}
		/>
	{/if}
</div>
