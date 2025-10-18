<script lang="ts">
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import { onMount, onDestroy, tick } from 'svelte';
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import ArticleList from './article-section/ArticleList.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import RepoArticleHeader from '$lib/components/RepoArticleHeader.svelte';
	import StaticArticleHeader from '$lib/components/StaticArticleHeader.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import type { Unsubscriber } from 'svelte/store';
	import Content from '$lib/components/Content.svelte';
	let unsubscribe: Unsubscriber;
	onMount(() => {
		document.title = 'Ty Fischer';
		unsubscribe = selectedArticle.subscribe(async () => {
			await tick(); // One tick is usually enough
			requestAnimationFrame(() => {
				window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
			});
		});
		return () => unsubscribe();
	});
	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
</script>

<!-- <Header /> -->
{#if !$selectedArticle}
	<MeSection />
	<ArticleList />
{:else if 'repo' in $selectedArticle}
	<RepoArticleHeader />
{:else}
	<StaticArticleHeader />
{/if}
<Content />
<div class="h-full bg-primary" />
<!-- <Footer /> -->
