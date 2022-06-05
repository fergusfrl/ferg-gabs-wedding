import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type FormValues = {
	name: string;
	email: string;
	attendance: number | null;
	dietry: number | null;
	dietryDescription: string;
	requiresAccommodation: number | null;
};

const initialValues: FormValues = {
	name: '',
	email: '',
	attendance: null,
	dietry: null,
	dietryDescription: '',
	requiresAccommodation: null
};

export const formValues: Writable<FormValues> = writable(initialValues);
