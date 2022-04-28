<script lang="ts">
	import SongSelect from '$components/song-select/song-select.svelte';
	import { formValues } from '$state/formValues';
</script>

<p class="font-serif uppercase">We Can't wait to see you!</p>

{#if $formValues.requiresAccomadation}
	<p>
		Please download <a
			href="/Gabrielle & Fergus's Wedding Booking Form.pdf"
			rel="external"
			download
			class="text-blue-500 underline hover:no-underline">this document</a
		> and organize your accomadation directly with Ohau Lodge.
	</p>
	<p>
		You can either fill out the form and email/post it to Ohau Lodge OR phone them directly to
		secure a booking. Just let them know you are with the Gabby & Fergus party.
	</p>
{/if}

<p class="font-serif">
	{#if $formValues.requiresAccomadation}In the meantime, help{:else}Help{/if}
	us by choosing a <span class="font-bold italic">party 🎉 song 🎶</span> to add to the Reception playlist!
</p>
<SongSelect />
