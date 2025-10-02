<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	import ViewMarkdown from '$lib/components/ViewMarkdown.svelte';
	import resumeMd from '$lib/content/resume.md?raw';

	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<MeSection />
<ViewMarkdown source={resumeMd} />
<ArticleSection />
