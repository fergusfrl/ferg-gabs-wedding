<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div class="form-item" in:fly={{ x: 200, duration: 1000 }} on:outroend>
	<slot />
</div>
