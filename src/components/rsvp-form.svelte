<script lang="ts">
	import { fade } from 'svelte/transition';
	import { formValues } from '../state/formValues';

	import FormWrapper from './form-wrapper.svelte';
	import Navigation from './navigation.svelte';
	import FormOne from './form-one.svelte';
	import FormTwo from './form-two.svelte';
	import FormThree from './form-three.svelte';

	var formIndex = 0;

	$: canRSVP = formIndex === 0 && $formValues.attendance === 0;

	const handleNavigation = (nav: number): void => {
		formIndex += nav;
	};

	const handleFormSubmission = (e): void => {
		console.log($formValues);
	};
</script>

<h5 class="text-xl font-serif text-autumn-500">RSVP</h5>
<p class="font-serif uppercase">
	Please RSVP by 30th August 2022 and fill in <span class="italic">one</span> per invitee.
</p>
<form class="form flex-col justify-between" on:submit|preventDefault={handleFormSubmission}>
	<FormWrapper>
		{#if formIndex === 0}
			<FormOne bind:name={$formValues.name} bind:attendance={$formValues.attendance} />
		{:else if formIndex === 1}
			<FormTwo
				bind:dietry={$formValues.dietry}
				bind:dietryDescription={$formValues.dietryDescription}
			/>
		{:else if formIndex === 2}
			<FormThree bind:accomadation={$formValues.requiresAccomadation} />
		{/if}
	</FormWrapper>
	{#if (formIndex === 0 && !canRSVP) || formIndex > 0}
		<Navigation
			{formIndex}
			on:pageBackward={() => handleNavigation(-1)}
			on:pageForward={() => handleNavigation(1)}
		/>
	{/if}
</form>

{#if canRSVP}
	<button
		type="submit"
		class="button mb-5"
		transition:fade
		on:click|preventDefault={handleFormSubmission}>Send RSVP</button
	>
{/if}
