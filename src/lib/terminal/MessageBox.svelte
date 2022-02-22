<script>
	import Log from './Log.svelte';
	import Warn from './Warn.svelte';
	import Error from './Error.svelte';
	export let logs = [];
	function addLog(data) {
		console.log(logs);
		const date2 = new Date();
		let date = `${date2.toLocaleDateString()} - ${date2.getHours()}:${date2.getMinutes()}:${date2.getSeconds()}`;
		logs[logs.length] = {
			date: date,
			from: 'From',
			method: 'Method',
			message: 'message',
			values: ['v', 'a', 'l', 'u', 'e', 's'],
			type: 'log'
		};
	}
</script>

<div class="message-box">
	<ul id="messages-container">
		{#each logs as item}
			{#if item.type === 'log'}
				<svelte:component
					this={Log}
					date={item.date}
					from={item.from}
					message={item.message}
					method={item.method}
					values={item.values}
				/>
			{/if}
			{#if item.type === 'warn'}
				<svelte:component this={Warn} message={item.message} date={item.date} from={item.from} />
			{/if}
			{#if item.type === 'error'}
				<svelte:component
					this={Error}
					date={item.date}
					from={item.from}
					error={item.error}
					method={item.method}
					values={item.values}
				/>
			{/if}
		{/each}
	</ul>
</div>

<style>
	.message-box {
		background-color: #000000;
		width: 40vw;
		height: 80vh;
		overflow-y: scroll;
	}
</style>
