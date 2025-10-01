<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	import ViewMarkdown from '$lib/components/ViewMarkdown.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import resumeMd from '$lib/content/resume.md?raw';

	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<div class="flex flex-col text-text">
	<MeSection />
	<ViewMarkdown source={resumeMd} />
	<ArticleSection />
	<div class="lg:p-8 p-4 bg-secondary" />
</div>
