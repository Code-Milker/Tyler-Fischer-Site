<script>
	import '../app.css';
	import MeSection from './MeSection.svelte';
	import ProjectSection from './ProjectSection.svelte';
	import WorkHistorySection from './WorkHistorySection.svelte';
	import ArticleSection from './ArticleSection.svelte';
	import Container from './Container.svelte';
</script>

<!-- <slot /> -->

<div class="grid justify-items-center">
	<Container content={MeSection} />
	<Container content={ArticleSection} />
	<Container content={ProjectSection} />
	<Container content={WorkHistorySection} />
</div>

<!-- <WorkHistorySection /> -->
<!-- <OtherSection /> -->

<style></style>
