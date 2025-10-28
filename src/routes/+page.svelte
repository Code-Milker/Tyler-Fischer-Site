<script lang="ts">
	import { browser } from '$app/environment';
	import Content from '$lib/components/Content.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import {
		articles,
		fetchRepoContent,
		scrollPosition,
		selectedArticle
	} from '$lib/stores/ArticleStore';
	import { onMount, tick } from 'svelte';
	import type { Unsubscriber } from 'svelte/store';
	import { get } from 'svelte/store';
	import '../app.css';
	import ArticleList from './article-section/ArticleList.svelte';
	import MeSection from './me-section/MeSection.svelte';
	import backArrow from '$lib/images/back-arrow.png';
	import Icon from '$lib/components/Icon.svelte';
	let unsubscribe: Unsubscriber;
	let popstateListener: () => void;
	async function parseAndSet() {
		if (!browser) return;
		const url = new URL(window.location.href);
		const slug = url.searchParams.get('article');
		if (slug) {
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
			if (browser) {
				if (art) {
					window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
				} else {
					window.scrollTo({
						top: get(scrollPosition),
						left: 0,
						behavior: 'instant'
					});
				}
			}
		});
		return () => {
			if (browser && popstateListener) {
				window.removeEventListener('popstate', popstateListener);
			}
			if (unsubscribe) unsubscribe();
		};
	});
	function handleBack() {
		if (browser) {
			if (history.length > 1) {
				history.back();
			} else {
				selectedArticle.set(null);
				history.replaceState({}, '', '/');
			}
		}
	}
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
	<div class="p-4 bg-primary flex justify-start border-t-2 border-t-secondary">
		<Icon src={backArrow} alt="Back" tooltip="Back" onClick={handleBack} />
	</div>
{/if}
<!-- <Footer /> -->
