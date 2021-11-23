<script lang="ts">
	import { fade } from 'svelte/transition';
	import { formValues } from '../state/formValues';

	import arrow from '../assets/arrow.svg';
	import FormWrapper from './form-wrapper.svelte';
	import FormOne from './form-one.svelte';

	var formIndex = 0;

	const handleNavigation = (nav: number): void => {
		formIndex + nav;
	};

	const handleFormSubmission = (e): void => {
		console.log($formValues);
	};
</script>

<h5 class="text-xl font-serif text-autumn-500">RSVP</h5>
<p class="font-serif uppercase">Please RSVP by 30th August 2022 and fill in one per invitee.</p>
<form class="form flex-col justify-between" on:submit|preventDefault={handleFormSubmission}>
	<FormWrapper>
		{#if formIndex === 0}
			<FormOne bind:name={$formValues.name} bind:attendance={$formValues.attendance} />
		{:else if formIndex === 1}
			<p>Form Two</p>
		{:else if formIndex === 2}
			<p>Form three</p>
		{/if}
	</FormWrapper>
	<div class="flex justify-between w-72 h-2">
		<img
			src={arrow}
			alt="Previous arrow"
			class="transform scale-125 cursor-pointer hover:scale-150 duration-500 rotate-180"
			on:click={() => handleNavigation(-1)}
		/>

		<img
			src={arrow}
			alt="Next arrow"
			class="transform scale-125 duration-500 cursor-pointer hover:scale-150"
			on:click={() => handleNavigation(1)}
		/>
	</div>
</form>

<button type="submit" class="button" transition:fade on:click|preventDefault={handleFormSubmission}
	>Send RSVP</button
>
