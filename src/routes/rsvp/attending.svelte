<script lang="ts">
	import SongSelect from '$components/song-select/song-select.svelte';
	import { formValues } from '$state/formValues';
</script>

<p class="font-serif uppercase">We Can't wait to see you!</p>

<!-- {#if $formValues.requiresAccomadation} -->
<div class="border-autumn-400 border p-4">
	<p class="font-serif uppercase">Important</p>
	<ul class="list-disc text-left pl-5">
		<li>
			<strong>Accomadation:</strong>
			<ul class="list-circle pl-10">
				<li>
					Please download
					<a
						href="/Gabrielle & Fergus's Wedding Booking Form.pdf"
						rel="external"
						download
						class="text-blue-500 underline hover:no-underline">this document</a
					>
					and organize your accomadation directly with Ohau Lodge.
				</li>
				<li>
					We recommend emailing or phoning the lodge directly. Credit card details are required to
					secure your booking, if you are uncomfortable providing those over email, please phone.
				</li>
				<li>Don't forget to let them know you are with the Gabby & Fergus party!</li>
			</ul>
		</li>
		<li>It's a May wedding so remember to wrap up warm!</li>
	</ul>
</div>

<!-- {/if} -->

<p class="font-serif">
	{#if $formValues.requiresAccomadation}In the meantime, help{:else}Help{/if}
	us by choosing a <span class="font-bold italic">party 🎉 song 🎶</span> to add to the Reception playlist!
</p>
<SongSelect />
