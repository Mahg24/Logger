<script>
	const date2 = new Date();
	export let date = `${date2.toLocaleDateString()} - ${date2.getHours()}:${date2.getMinutes()}:${date2.getSeconds()}`;
	export let from = 'AppService';
	export let message = '- Oh the misery';
</script>

<li class="messages">
	<span class="log-date">[{date}] - </span> ❗❗ ⚠️ ⚠️ <span class="log-from">{from}</span>
	<span class="log-message"> {message} </span> ⚠️ ⚠️ ❗❗
</li>

<style>
	.messages {
		font-family: var(--font-mono);
		list-style: none;
		padding: 0;
		margin: 0;
		color: #ffffff;
	}

	.messages .log-date {
		color: green;
	}
	.messages .log-from {
		color: #8500ff;
	}
	.messages .log-message {
		color: yellow;
	}
</style>
