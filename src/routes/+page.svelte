<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ProjectSection from './project-section/ProjectSection.svelte';
	import WorkHistorySection from './work-section/WorkHistorySection.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	import ViewMarkdown from '$lib/components/ViewMarkdown.svelte';

	$: innerWidth = 0;
	$: styles =
		innerWidth >= 640 ? 'flex flex-col justify-center text-text ' : 'text-text';
	$: device = innerWidth >= 640 ? 'desktop' : 'mobile';

	onMount(async () => {
		document.title = 'Ty Fischer';
	});
</script>

<svelte:window bind:innerWidth />

<div class={styles + ' mt-10 '}>
	<DeviceContainer
		title=""
		color="text-text"
		bg="bg-secondary"
		firstContainer={true}
	>
		<div slot="desktop">
			<MeSection device="desktop" />
		</div>
		<div slot="mobile">
			<MeSection device="mobile" />
		</div>
	</DeviceContainer>

	<div id="resume">
		<DeviceContainer
			title="Resume"
			titlePosition="text-center"
			color="text-text"
			bg="bg-secondary"
		>
			<div slot="desktop">
				<div
					class=" bg-primary justify-center flex rounded md:rounded-lg xs:rounded-none"
				>
					<ViewMarkdown filename="resume.md" />
				</div>
			</div>
			<div slot="mobile">
				<ViewMarkdown filename="resume.md" />
			</div>
		</DeviceContainer>
	</div>

	<div id="projects">
		<DeviceContainer
			title="Projects"
			titlePosition="text-center"
			color="text-text"
			bg="bg-secondary"
		>
			<div slot="desktop">
				<ProjectSection />
			</div>
			<div slot="mobile">
				<ProjectSection />
			</div>
		</DeviceContainer>
	</div>

	<div id="work">
		<DeviceContainer
			title="Work History"
			titlePosition="text-center"
			color="text-text"
			bg="bg-secondary"
		>
			<div slot="desktop">
				<WorkHistorySection device="desktop" />
			</div>
			<div slot="mobile">
				<WorkHistorySection device="mobile" />
			</div>
		</DeviceContainer>
	</div>

	<div id="articles">
		<DeviceContainer
			title="Articles"
			titlePosition="text-center"
			color="text-text"
			bg="bg-secondary"
		>
			<div slot="desktop">
				<ArticleSection />
			</div>
			<div slot="mobile">
				<ArticleSection />
			</div>
		</DeviceContainer>
	</div>
</div>

<style>
	* {
		scroll-behavior: smooth;
		scroll-padding-top: 80px; /* Prevents overlap from fixed elements */
	}
</style>
