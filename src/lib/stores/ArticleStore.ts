import type { ContentPreviewType } from '$lib/types.ts';
import { writable } from 'svelte/store';
export const selectedArticle = writable<StaticArticle | RepoArticle | null>(
	null
);
export interface StaticArticle extends Omit<ContentPreviewType, 'url'> {
	filename: string;
	fullContent: string;
}
export interface RepoArticle extends Omit<ContentPreviewType, 'url'> {
	repo: string;
	fullContent?: string;
	interactiveContent?: string;
	branch: string;
	file: string;
	interactiveFile?: string;
	showPrototype?: boolean;
}
