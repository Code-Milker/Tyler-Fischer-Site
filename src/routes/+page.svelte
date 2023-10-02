<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ProjectSection from './project-section/ProjectSection.svelte';
	import WorkHistorySection from './work-section/WorkHistorySection.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import Container from '$lib/components/Container.svelte';
	import { onMount } from 'svelte';
	$: innerWidth = 0;
	$: styles = innerWidth >= 640 ? 'md:grid xs:block justify-items-center text-white' : 'text-white';
	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<svelte:window bind:innerWidth />
<div class={styles}>
	<Container
		title=""
		color="text-white"
		content={MeSection}
		bg="bg-secondary"
		firstContainer={true}
	/>
	<Container
		title="Articles"
		titlePosition="text-center"
		color="text-white"
		bg="bg-secondary"
		content={ArticleSection}
	/>
	<Container
		title="Projects"
		titlePosition="text-center"
		color="text-white"
		bg="bg-secondary"
		content={ProjectSection}
	/>
	<Container
		titlePosition="text-center"
		title="Work history"
		color="text-white"
		bg="bg-secondary"
		content={WorkHistorySection}
	/>
</div>

<style></style>
