import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type FormValues = {
	name: string;
	attendance: number | null;
	dietry: number | null;
	dietryDescription: string;
	requiresAccomadation: number | null;
};

const initialValues: FormValues = {
	name: '',
	attendance: null,
	dietry: null,
	dietryDescription: '',
	requiresAccomadation: null
};

export const formValues: Writable<FormValues> = writable(initialValues);
