<script lang="ts">
	export var accommodation: number;
</script>

<div class="space-y-8">
	<div class="flex flex-col justify-items-start space-y-2">
		<p class="text-gray-400">Will you require accommodation?</p>
		<p class="text-sm">
			We recommend you arrive on Friday 5th May and stay two nights at Ohau Lodge.
		</p>
		<label>
			<input
				class="form-checkbox text-black"
				type="radio"
				name="accommodation"
				bind:group={accommodation}
				value={2}
			/>
			Friday and Saturday Night at Ohau Lodge (2 Nights - Recommended)
		</label>

		<label>
			<input
				class="form-checkbox text-black"
				type="radio"
				name="accommodation"
				bind:group={accommodation}
				value={1}
			/>
			Just Saturday Night at Ohau Lodge (1 Night)
		</label>

		<label>
			<input
				class="form-checkbox text-black"
				type="radio"
				name="accommodation"
				bind:group={accommodation}
				value={0}
			/>
			No, I will manage my own accommodation
		</label>
	</div>
</div>
