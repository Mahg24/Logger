import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const drinkNames = derived(apiData, ($apiData) => {
	console.log($apiData);
	return [];
});
