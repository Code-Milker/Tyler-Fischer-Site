<script lang="ts">
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import { onMount, onDestroy, tick } from 'svelte';
	import { selectedArticle, articles } from '$lib/stores/ArticleStore';
	import ArticleList from './article-section/ArticleList.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import Content from '$lib/components/Content.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import type { Unsubscriber } from 'svelte/store';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import { fetchRepoContent } from '$lib/stores/ArticleStore';
	let unsubscribe: Unsubscriber;
	let popstateListener: () => void;
	async function parseAndSet() {
		if (!browser) return;
		const path = window.location.pathname;
		if (path.startsWith('/article/')) {
			const slug = path.slice('/article/'.length);
			const arts = get(articles);
			const article = arts.find((a) => a.slug === slug);
			if (article) {
				if ('repo' in article) {
					if (article.fullContent === undefined) {
						article.fullContent = await fetchRepoContent(
							article.repo,
							article.branch,
							article.file
						);
					}
					if (
						article.interactiveFile &&
						article.interactiveContent === undefined
					) {
						article.interactiveContent = await fetchRepoContent(
							article.repo,
							article.branch,
							article.interactiveFile
						);
					}
				}
				selectedArticle.set(article);
				articles.update(() => arts);
				// Add home to history for direct loads to enable back to home
				history.replaceState({}, '', '/');
				history.pushState({}, '', path);
			} else {
				// Slug not found, redirect to home
				selectedArticle.set(null);
				history.replaceState({}, '', '/');
			}
		} else {
			selectedArticle.set(null);
		}
	}
	onMount(() => {
		parseAndSet();
		if (browser) {
			popstateListener = () => {
				parseAndSet();
			};
			window.addEventListener('popstate', popstateListener);
		}
		unsubscribe = selectedArticle.subscribe(async (art) => {
			document.title = art ? art.title : 'Ty Fischer';
			await tick();
			window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
		});
		return () => {
			if (browser && popstateListener) {
				window.removeEventListener('popstate', popstateListener);
			}
			if (unsubscribe) unsubscribe();
		};
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
