<script lang="ts">
	import { fly } from 'svelte/transition';

	export var dietry;
	export var dietryDescription;
	export var onOutro;
</script>

<div
	in:fly={{ x: 200, duration: 1000 }}
	out:fly={{ x: -200, duration: 1000 }}
	on:outroend={onOutro}
	class="form-item"
>
	<p>Do you have any dietry requirements?</p>

	<label>
		<input type="radio" bind:group={dietry} name="dietry" value={1} />
		Yes
	</label>

	<label>
		<input type="radio" bind:group={dietry} name="dietry" value={0} />
		No
	</label>
</div>
{#if dietry}
	<div class="form-item">
		<label for="dietryDescription">What are you requirements?</label>
		<input
			type="text"
			name="dietryDescription"
			bind:value={dietryDescription}
			class="border border-gray-500"
		/>
	</div>
{/if}
