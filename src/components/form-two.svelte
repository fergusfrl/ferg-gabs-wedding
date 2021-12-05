<script lang="ts">
	export var dietry: number;
	export var dietryDescription: string;
</script>

<div class="space-y-8">
	<div class="flex flex-col justify-items-start space-y-2">
		<p class="text-gray-400">Do you have any dietry requirements?</p>
		<label>
			<input
				class="form-checkbox text-black"
				type="radio"
				name="dietry"
				bind:group={dietry}
				value={1}
			/>
			Yes
		</label>

		<label>
			<input
				class="form-checkbox text-black"
				type="radio"
				name="dietry"
				bind:group={dietry}
				value={0}
			/>
			No
		</label>
	</div>
	{#if dietry}
		<label class="block">
			<span class="text-gray-400">What are your requirements?</span>
			<input type="text" class="form-input mt-1 block w-full" bind:value={dietryDescription} />
		</label>
	{/if}
</div>
