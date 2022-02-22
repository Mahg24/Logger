<script>
	const date2 = new Date();
	export let date = `${date2.toLocaleDateString()} - ${date2.getHours()}:${date2.getMinutes()}:${date2.getSeconds()}`;
	export let from = 'AppService';
	export let method = 'getAll';
	export let values = [];
	export let error = { message: '- Oh the misery' };
</script>

<li class="messages">
	<span class="log-date">[{date}] - </span> <span class="log-from">{from}</span>
	<span class="log-method"> {method} </span>{values
		.map((e) => {
			return JSON.stringify(e);
		})
		.join()} <span class="log-error"> {JSON.stringify(error)}</span>
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
	.messages .log-method {
		color: cyan;
	}
	.messages .log-error {
		color: #fb5757;
	}
</style>
