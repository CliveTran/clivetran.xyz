import { writable } from 'svelte/store';

const defaultTitle = "Clive Tran - An ordinary developer."
function createTitle() {
	const { subscribe, set, update } = writable(defaultTitle);

	return {
		subscribe,
		set: (text: string) => update(() => text),
		reset: () => set(defaultTitle)
	};
}

export const title = createTitle();