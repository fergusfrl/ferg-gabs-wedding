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
		console.log(JSON.stringify($formValues));
		const postUrl = 'https://us-central1-test-database-200da.cloudfunctions.net/addGuest';
		fetch(postUrl, {
			method: 'POST',
			body: JSON.stringify($formValues)
		}).then(() => {
			$formValues.attendance !== 1 ? goto('/rsvp/not-attending') : goto('/rsvp/attending');
		});
	};
</script>

<div>
	<p class="font-serif uppercase">Please RSVP by 30th November 2022</p>
	<p class="font-serif">Fill in form one per person</p>
</div>

<form class="flex flex-col w-2/3 space-y-8 text-left">
	<AttendanceForm
		bind:name={$formValues.name}
		bind:email={$formValues.email}
		bind:attendance={$formValues.attendance}
	/>

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
		class="text-sm border px-4 py-2 uppercase bg-autumn-500 text-white transition-all w-full text-center mb-4 hover:shadow-md {!canRSVP &&
			'disabled'}"
		disabled={!canRSVP}
		on:click={handleSubmit}>Send RSVP</button
	>
	<a href="/" class="underline hover:no-underline">Back</a>
</div>
