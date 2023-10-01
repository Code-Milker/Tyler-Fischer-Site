<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	import ContentPreview from '$lib/components/ContentPreview.svelte';
	import { onMount } from 'svelte';
	let articles: ContentPreviewType[] = [];
	onMount(() => {
		getArticles(new FileReader());
	});
	async function getArticles(fileReader: FileReader) {
		const res = await (await fetch('article-section')).json();
		articles = res;
	}
</script>

{#each articles as article, i}
	{#if i !== 0}<div class="min-h-[40px] bg-secondary md:hidden xs:visible" />
	{/if}
	{#if i === 0}
		<div class="xs:mb-2">
			<ContentPreview
				bg="bg-primary"
				img={article.image}
				title={article.title}
				url={'TODO'}
				description={article.description}
			/>
		</div>
	{:else}
		<div class="md:mt-6 xs:mt-2">
			<ContentPreview
				bg="bg-primary"
				img={article.image}
				title={article.title}
				url={'TODO'}
				description={article.description}
			/>
		</div>
	{/if}
{/each}
