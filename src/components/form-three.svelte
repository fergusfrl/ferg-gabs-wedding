<script lang="ts">
	import { fly } from 'svelte/transition';

	export var accomadation;
	export var onOutro;
</script>

<div class="form-item" in:fly={{ x: 200, duration: 1000 }} on:outroend={onOutro}>
	<p>Will you need accomadation?</p>

	<label>
		<input type="radio" bind:group={accomadation} name="accomadation" value={1} />
		Yes, book me a room at Ohau Lodge
	</label>

	<label>
		<input type="radio" bind:group={accomadation} name="accomadation" value={0} />
		No, I will manage my own accomadation
	</label>
</div>
