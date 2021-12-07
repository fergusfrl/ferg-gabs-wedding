<script lang="ts">
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';

	import AttendanceForm from '$components/attendance-form.svelte';
	import AccomadationForm from '$components/accomadation-form.svelte';
	import DietryForm from '$components/dietry-form.svelte';
	import { formValues } from '$state/formValues';

	$: canRSVP =
		$formValues.name &&
		($formValues.attendance === 0 ||
			($formValues.attendance === 1 &&
				$formValues.dietry !== null &&
				$formValues.requiresAccomadation !== null));

	const handleSubmit = (): void => {
		// TODO: send to firebase.
		console.log($formValues);

		if ($formValues.attendance !== 1) {
			goto('/rsvp/not-attending');
			return;
		}

		goto('/rsvp/attending');
	};
</script>

<p class="font-serif uppercase mx-20">
	Please RSVP by 30th August 2022 and fill in <span class="underline">once per person</span>
</p>

<form class="flex flex-col w-2/3 space-y-8 text-left">
	<AttendanceForm bind:name={$formValues.name} bind:attendance={$formValues.attendance} />

	{#if $formValues.attendance}
		<div transition:slide|local class="space-y-8">
			<DietryForm
				bind:dietry={$formValues.dietry}
				bind:dietryDescription={$formValues.dietryDescription}
			/>
			<AccomadationForm bind:accomadation={$formValues.requiresAccomadation} />
		</div>
	{/if}
</form>

<div class="w-2/3">
	<button
		class="button w-full text-center mb-4 {!canRSVP && 'disabled cursor-not-allowed'}"
		disabled={!canRSVP}
		on:click={handleSubmit}>Send RSVP</button
	>
	<a href="/" class="underline hover:no-underline">Back</a>
</div>
