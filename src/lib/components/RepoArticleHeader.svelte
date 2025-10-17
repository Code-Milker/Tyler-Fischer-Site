<!-- src/lib/components/RepoArticleHeader.svelte -->
<script lang="ts">
	import type { IconProps } from '$lib/types';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import github from '$lib/images/github.png';
	import backArrow from '$lib/images/back-arrow.png';

	let icons: IconProps[] = [];
	$: if ($selectedArticle && 'repo' in $selectedArticle) {
		icons = [
			{
				onClick: () => selectedArticle.set(null),
				src: backArrow,
				alt: 'back'
			},
			{
				href: `https://github.com/${$selectedArticle.repo}`,
				src: github,
				alt: 'github'
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
