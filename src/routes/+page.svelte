<script>
	import '../app.css';
	import MeSection from './MeSection.svelte';
	import ProjectSection, { colorBackground } from './ProjectSection.svelte';
	import WorkHistorySection from './WorkHistorySection.svelte';
	import OtherSection from './OtherSection.svelte';
	import Container from './Container.svelte';
	$: {
		console.log('hello');
	}
	const a = '2';
</script>

<slot />
<div class="">
	<Container content={MeSection} {colorBackground} />
	<!-- <MeSection /> -->

	<Container content={ProjectSection} {colorBackground} />
	<!-- <WorkHistorySection /> -->
	<!-- <OtherSection /> -->
</div>

<style></style>
