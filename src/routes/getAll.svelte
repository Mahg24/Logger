<script>
	import TypeSelector from '$lib/searchBar/TypeSelector.svelte';
	import { variables } from '$lib/variables.js';
	import MessageBox from '$lib/terminal/MessageBox.svelte';
	let type;
	let logs = [];
	let response;
	async function search() {
		response = await fetch(`${variables.apiUrl}/api/logger/${type}`)
			.then((res) => res.json())
			.then((data) => {
				data.map((log) => {
					console.log(log.message);
					logs[logs.length] = { ...log.message, type: type };
				});
				console.log(logs);
			});
	}
	// function addLog(data) {
	// 	console.log(data);
	// 	logs[logs.length] = {
	// 		date: data.date,
	// 		from: data.from,
	// 		method: data.method,
	// 		message: data.message,
	// 		values: data.values,
	// 		type: data.type
	// 	};
	// }
</script>

<TypeSelector bind:type />
<button on:click={search}>Buscar!</button>
{#await response}
	<h2>Busca!</h2>
{:then data}
	{#if data}
		<MessageBox {data} />
	{/if}
{:catch error}
	<h2>Error!:{error}</h2>
{/await}
