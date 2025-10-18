<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import { onMount, onDestroy, tick } from 'svelte';
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import ArticleList from './article-section/ArticleList.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import RepoArticleHeader from '$lib/components/RepoArticleHeader.svelte';
	import StaticArticleHeader from '$lib/components/StaticArticleHeader.svelte';

	let unsubscribe;
	onMount(() => {
		document.title = 'Ty Fischer';
		unsubscribe = selectedArticle.subscribe(async () => {
			await tick();
			await tick();
			await tick();
			window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
		});
	});
	onDestroy(() => {
		if (unsubscribe) unsubscribe();
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
		{#if 'showPrototype' in $selectedArticle && $selectedArticle.showPrototype}
			{#if 'interactiveContent' in $selectedArticle && $selectedArticle.interactiveContent}
				<iframe
					srcdoc={$selectedArticle.interactiveContent}
					class=" w-full h-[800px]"
					title="Interactive Content"
				/>
			{/if}
		{:else}
			<SvelteMarkdown
				on:parsed={() => {
					window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
				}}
				source={$selectedArticle.fullContent}
			/>
		{/if}
	</div>
{/if}
<div class="h-full bg-primary" />
<!-- <Footer /> -->
