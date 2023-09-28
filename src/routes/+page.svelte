<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ProjectSection from './project-section/ProjectSection.svelte';
	import WorkHistorySection from './work-section/WorkHistorySection.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import Container from '$lib/components/Container.svelte';
	$: innerWidth = 0;
	$: styles = innerWidth >= 640 ? 'md:grid xs:block justify-items-center text-white' : 'text-white';
</script>

<svelte:window bind:innerWidth />
<div class={styles}>
	<Container
		title="asdf"
		color="text-white"
		content={MeSection}
		bg="bg-secondary"
		firstContainer={true}
	/>
	<Container title="Articles" color="text-white" bg="bg-secondary" content={ArticleSection} />
	<Container title="Projects" color="text-white" bg="bg-secondary" content={ProjectSection} />
	<Container
		title="Work history"
		color="text-white"
		bg="bg-secondary"
		content={WorkHistorySection}
	/>
</div>

<style></style>
