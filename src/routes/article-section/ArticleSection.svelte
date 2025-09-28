<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	import { onMount, tick } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	type ArticlePreviewType = Omit<ContentPreviewType, 'url'> & {
		filename: string;
		fullContent?: string;
	};
	let articles: ArticlePreviewType[] = [];
	let expanded: boolean[] = [];
	let previewRefs: (HTMLDivElement | null)[] = [];
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
		previewRefs = new Array(articles.length).fill(null);
	}
	async function toggleExpand(i: number) {
		const wasExpanded = expanded[i];
		expanded[i] = !expanded[i];
		if (!wasExpanded) {
			if (!articles[i].fullContent) {
				const res = await fetch(articles[i].filename);
				if (res.ok) {
					articles[i].fullContent = await res.text();
				}
			}
		}
		await tick(); // Wait for DOM update
		if (previewRefs[i]) {
			previewRefs[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
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
		<div
			class="bg-primary md:rounded-lg xs:rounded-none text-text shadow-md"
			bind:this={previewRefs[i]}
		>
			<div class="flex flex-row items-start p-6">
				<div class="flex-shrink-0 mr-6">
					<img
						src={article.image}
						alt={article.title}
						class="w-[200px] h-[200px] rounded-lg object-cover"
					/>
				</div>
				<div class="flex-1 flex flex-col min-h-[200px]">
					<h2 class="text-2xl text-quaternary font-bold mb-2">
						{article.title}
					</h2>
					<div class="text-text mb-4 line-clamp-[6]">
						<SvelteMarkdown source={article.description} />
					</div>
					<div class="mt-auto flex justify-start">
						<button
							class="min-w-[120px] bg-secondary text-text px-4 py-2 rounded hover:bg-tertiary transition-colors"
							on:click={() => toggleExpand(i)}
						>
							{expanded[i] ? 'Close' : 'Expand'}
						</button>
					</div>
				</div>
			</div>
			{#if expanded[i]}
				<div class="px-6 py-8 border-t border-secondary">
					<div class="prose prose-invert !min-w-0 max-w-full">
						<SvelteMarkdown source={article.fullContent} />
					</div>
					<div class="mt-6 flex justify-center">
						<button
							class="min-w-[120px] bg-secondary text-text px-4 py-2 rounded hover:bg-tertiary transition-colors"
							on:click={() => toggleExpand(i)}
						>
							Close
						</button>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
