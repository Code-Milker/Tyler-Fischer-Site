<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ProjectSection from './project-section/ProjectSection.svelte';
	import WorkHistorySection from './work-section/WorkHistorySection.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import { onMount } from 'svelte';
	$: innerWidth = 0;
	$: styles = innerWidth >= 640 ? 'md:grid xs:block justify-items-center text-white' : 'text-white';
	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<svelte:window bind:innerWidth />
<div class={styles}>
	<DeviceContainer title="" color="text-white" bg="bg-secondary" firstContainer={true}>
		<div slot="desktop">
			<MeSection device="desktop" />
		</div>
		<div slot="mobile">
			<MeSection device="mobile" />
		</div>
	</DeviceContainer>
	<DeviceContainer
		title="Projects"
		titlePosition="text-center"
		color="text-white"
		bg="bg-secondary"
	>
		<div slot="desktop">
			<ProjectSection device="desktop" />
		</div>
		<div slot="mobile">
			<ProjectSection device="mobile" />
		</div>
	</DeviceContainer>
	<DeviceContainer
		titlePosition="text-center"
		title="Work history"
		color="text-white"
		bg="bg-secondary"
	>
		>
		<div slot="desktop">
			<WorkHistorySection device="desktop" />
		</div>
		<div slot="mobile">
			<WorkHistorySection device="mobile" />
		</div>
	</DeviceContainer>
</div>

<style></style>
