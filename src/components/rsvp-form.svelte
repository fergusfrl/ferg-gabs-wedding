<script lang="ts">
	let name = '';
	let attendance = false;
	let dietry = false;
	let dietryDescription = '';
	let accomadation = false;

	const handleFormSubmission = (e): void => {
		console.log({
			name,
			attendance,
			dietry,
			dietryDescription,
			accomadation
		});
	};
</script>

<h5 class="text-xl font-serif text-autumn-500">RSVP</h5>
<p class="font-serif uppercase">Please RSVP by 30th August 2020 and fill in one per invitee.</p>
<form class="flex flex-col items-center space-y-10 font-serif">
	<div class="form-item">
		<label for="name">What's your name?</label>
		<input type="text" name="name" bind:value={name} required class="border border-gray-500" />
	</div>
	<div class="form-item">
		<p>Will you be coming?</p>

		<label>
			<input type="radio" bind:group={attendance} name="attendance" value={1} />
			Yes, I can attend
		</label>

		<label>
			<input type="radio" bind:group={attendance} name="attendance" value={0} />
			No, I cannot attend
		</label>
	</div>
	{#if attendance}
		<div class="form-item">
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
		<div class="form-item">
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
	{/if}
	<button type="submit" class="button" on:click|preventDefault={handleFormSubmission}
		>Send RSVP</button
	>
</form>
