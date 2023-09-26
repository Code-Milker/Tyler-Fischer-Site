<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ProjectSection from './ProjectSection.svelte';
	import WorkHistorySection from './WorkHistorySection.svelte';
	import ArticleSection from './ArticleSection.svelte';
	import Container from './Container.svelte';
</script>

<div class="grid justify-items-center">
	<Container
		title=""
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
