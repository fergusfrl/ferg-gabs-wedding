import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type FormValues = {
	name: string;
	attendance: boolean | null;
	dietry: boolean | null;
	dietryDescription: string;
};

const initialValues: FormValues = {
	name: '',
	attendance: null,
	dietry: null,
	dietryDescription: ''
};

export const formValues: Writable<FormValues> = writable(initialValues);
