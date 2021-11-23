import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type StatefulSwap = {
	state: Writable<number>;
	transitionTo: (newState: number) => void;
	onOutro: () => void;
};

const statefulSwap = (initialState: number): StatefulSwap => {
	const state = writable(initialState);
	let nextState = initialState;

	function transitionTo(newState) {
		if (nextState === newState) return;
		nextState = newState;
		state.set(null);
	}

	function onOutro() {
		state.set(nextState);
	}

	return {
		state,
		transitionTo,
		onOutro
	};
};

export default statefulSwap;
