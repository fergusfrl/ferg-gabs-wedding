<script lang="ts">
	export var accomadation: number;
</script>

<div class="space-y-8">
	<div class="flex flex-col justify-items-start space-y-2">
		<p class="text-gray-400">Will you require accomadation?</p>
		<label>
			<input
				class="form-checkbox text-black"
				type="radio"
				name="accomadation"
				bind:group={accomadation}
				value={1}
			/>
			Yes, book me a room at Ohau Lodge
		</label>

		<label>
			<input
				class="form-checkbox text-black"
				type="radio"
				name="accomadation"
				bind:group={accomadation}
				value={0}
			/>
			No, I will manage my own accomadation
		</label>
	</div>
</div>
