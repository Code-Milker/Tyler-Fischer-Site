<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<MeSection />
<ArticleSection />
