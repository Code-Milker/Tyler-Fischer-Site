<!-- src/routes/article-section/StaticArticleHeader.svelte -->
<script lang="ts">
	import type { IconProps } from '$lib/types';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import backArrow from '$lib/images/back-arrow.png';
	let icons: IconProps[] = [];
	$: if ($selectedArticle && 'filename' in $selectedArticle) {
		icons = [
			{
				onClick: () => selectedArticle.set(null),
				src: backArrow,
				alt: 'back',
				tooltip: 'Back to articles'
			}
		];
	}
</script>

{#if $selectedArticle}
	<SectionHeader
		title={$selectedArticle.title}
		description={$selectedArticle.description}
		image={$selectedArticle.image}
		alt={$selectedArticle.title}
		{icons}
	/>
{/if}
