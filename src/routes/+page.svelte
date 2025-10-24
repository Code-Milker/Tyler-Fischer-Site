<script lang="ts">
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import { onMount, onDestroy, tick } from 'svelte';
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import ArticleList from './article-section/ArticleList.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import Content from '$lib/components/Content.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import type { Unsubscriber } from 'svelte/store';
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
{:else}
	<SectionHeader
		title={$selectedArticle.title}
		description={$selectedArticle.description}
		image={$selectedArticle.image}
		alt={$selectedArticle.title}
		icons={$selectedArticle.icons}
	/>
{/if}
{#if $selectedArticle}
	<Content selectedArticle={$selectedArticle} />
{/if}
<!-- <Footer /> -->
