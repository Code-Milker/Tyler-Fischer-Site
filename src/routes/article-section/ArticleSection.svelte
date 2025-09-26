<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	type ArticlePreviewType = Omit<ContentPreviewType, 'url'> & {
		filename: string;
		fullContent?: string;
	};

	let articles: ArticlePreviewType[] = [];
	let expanded: boolean[] = [];

	onMount(() => {
		getArticles();
	});

	async function getArticles() {
		const response = await fetch('article-section');
		articles = await response.json();
		articles = articles.map((article) => ({
			...article,
			fullContent: undefined
		}));
		expanded = new Array(articles.length).fill(false);
	}

	async function toggleExpand(i: number) {
		if (expanded[i]) {
			expanded[i] = false;
		} else {
			if (!articles[i].fullContent) {
				const res = await fetch(articles[i].filename);
				if (res.ok) {
					articles[i].fullContent = await res.text();
				}
			}
			expanded[i] = true;
		}
		expanded = expanded;
		articles = articles;
	}
</script>

<div>
	{#each articles as article, i}
		{#if i !== 0}
			<div class="min-h-[40px] bg-secondary" />
		{/if}
		<div class="bg-primary md:rounded-lg xs:rounded-none text-text">
			<div class="flex flex-row">
				<div class="md:p-6 flex justify-center">
					<img
						src={article.image}
						alt={article.title}
						class="min-w-[225px] max-w-[225px] min-h-[225px] max-h-[225px] rounded-lg"
					/>
				</div>
				<div class="px-8 py-10 flex-1">
					<h2 class="text-4xl text-quaternary font-bold mb-4">
						{article.title}
					</h2>
					{#if !expanded[i]}
						<span class="overflow-hidden line-clamp-[8] block">
							<SvelteMarkdown source={article.description} />
						</span>
					{/if}
					<button
						class="mt-4 bg-secondary text-text px-4 py-2 rounded hover:bg-tertiary"
						on:click={() => toggleExpand(i)}
					>
						{expanded[i] ? 'Collapse' : 'Expand'}
					</button>
				</div>
			</div>
			{#if expanded[i]}
				<div class="px-8 py-10 border-t border-secondary">
					<div class="prose prose-invert !min-w-0 max-w-full">
						<SvelteMarkdown source={article.fullContent} />
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
