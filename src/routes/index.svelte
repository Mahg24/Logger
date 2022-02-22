<script>
	import MessageBox from '$lib/terminal/MessageBox.svelte';
	import { io } from '$lib/realtime';
	import { onMount } from 'svelte';
	let random = [];
	onMount(() => {
		io.on('log', (message) => {
			// Listen to the message event
			console.log(message);
			random[random.length] = { ...message, type: 'log' };
		});

		io.on('error', (message) => {
			// Listen to the message event
			console.log(message);
			random[random.length] = { ...message, type: 'error' };
		});
		io.on('warn', (message) => {
			// Listen to the message event
			console.log(message);
			random[random.length] = { ...message, type: 'warn' };
		});
	});
</script>

<MessageBox logs={random} />
