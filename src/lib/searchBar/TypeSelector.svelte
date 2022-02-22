<script>
	export let type = 'logs';
</script>

<div class="type-selector-container">
	<ul class="types-list">
		<li class="type">
			<input type="radio" bind:group={type} name="log" id="log" value="logs" />Log
		</li>
		<li class="type">
			<input type="radio" bind:group={type} name="warn" id="warn" value="warns" />Warning
		</li>
		<li class="type">
			<input type="radio" bind:group={type} name="err" id="err" value="errors" />Error
		</li>
	</ul>
</div>

<style>
	.type-selector-container {
		background: rgb(73, 64, 64);
	}

	.types-list {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		justify-content: space-evenly;
	}
	.type {
		font-family: var(--font-mono);
		list-style: none;
		padding: 0;
		font-size: 1.15em;
		margin: 0;
		display: flex;
		color: #ffffff;
		align-items: center;
	}
</style>
