<script lang="ts">
	export var name: string;
	export var email: string;
	export var attendance: number;
</script>

<label class="block">
	<span class="text-gray-400">Full Name</span>
	<input type="text" class="form-input mt-1 block w-full" required bind:value={name} />
</label>

<label class="block">
	<span class="text-gray-400">Email</span>
	<input type="text" class="form-input mt-1 block w-full" required bind:value={email} />
</label>

<div class="flex flex-col justify-items-start space-y-2">
	<p class="text-gray-400">Will you be coming?</p>
	<label>
		<input
			class="form-checkbox text-black"
			type="radio"
			name="attendance"
			bind:group={attendance}
			value={1}
		/>
		Yes, I can attend
	</label>

	<label>
		<input
			class="form-checkbox text-black"
			type="radio"
			name="attendance"
			bind:group={attendance}
			value={0}
		/>
		No, I cannot attend
	</label>
</div>
