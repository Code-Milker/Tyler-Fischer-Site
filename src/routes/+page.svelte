<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import { onMount } from 'svelte';
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import ArticleList from './article-section/ArticleList.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import RepoArticleHeader from '$lib/components/RepoArticleHeader.svelte';
	import StaticArticleHeader from '$lib/components/StaticArticleHeader.svelte';
	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<!-- <Header /> -->
{#if !$selectedArticle}
	<MeSection />
	<ArticleList />
{:else}
	{#if 'repo' in $selectedArticle}
		<RepoArticleHeader />
	{:else}
		<StaticArticleHeader />
	{/if}
	<div class="bg-primary p-4 text-text prose prose-invert max-w-4xl mx-auto">
		<SvelteMarkdown source={$selectedArticle.fullContent} />
		{#if 'interactiveContent' in $selectedArticle && $selectedArticle.interactiveContent}
			<h2 class="text-2xl text-quaternary font-semibold mt-8 mb-4">
				Interactive Demo
			</h2>
			<iframe
				srcdoc={$selectedArticle.interactiveContent}
				class="w-full h-[600px] border-2 border-secondary"
				title="Interactive Content"
			/>
		{/if}
	</div>
{/if}
<div class="h-full bg-primary" />
<!-- <Footer /> -->
