<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<!-- <Header /> -->

<MeSection />

<ArticleSection />
<div class="h-full bg-primary" />
<!-- <Footer /> -->
