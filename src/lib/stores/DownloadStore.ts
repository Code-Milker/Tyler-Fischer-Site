import { writable } from 'svelte/store';

export const triggerDownload = writable<{
	type: 'pdf';
	source?: string;
} | null>(null);
