<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	import { onMount } from 'svelte';
	import ContentPreview from '$lib/components/ContentPreview.svelte';

	type ArticlePreviewType = Omit<ContentPreviewType, 'url'>;

	let articles: ArticlePreviewType[] = [];

	onMount(() => {
		getArticles();
	});

	async function getArticles() {
		const response = await fetch('article-section');
		articles = await response.json();
	}
</script>

<div class="">
	{#each articles as article, i}
		<ContentPreview
			device="desktop"
			color="text-text"
			bg="bg-primary"
			img={article.image}
			title={article.title}
			url={'TODO'}
			description={article.description}
		/>
		{#if i !== 0}
			<div class="min-h-[40px] bg-secondary md:hidden xs:visible" />
		{/if}
	{/each}
</div>
