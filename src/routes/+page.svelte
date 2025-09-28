<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ProjectSection from './project-section/ProjectSection.svelte';
	import WorkHistorySection from './work-section/WorkHistorySection.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	import ViewMarkdown from '$lib/components/ViewMarkdown.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import IconBanner from '$lib/components/IconBanner.svelte';
	$: innerWidth = 0;
	$: styles =
		innerWidth >= 640
			? 'flex flex-row text-text min-h-screen'
			: 'flex flex-col text-text';
	$: device = innerWidth >= 640 ? 'desktop' : 'mobile';
	onMount(async () => {
		document.title = 'Ty Fischer';
	});
</script>

<svelte:window bind:innerWidth />
<div class={styles + ' mt-10 '}>
	{#if device === 'desktop'}
		<div
			class="w-32 md:w-40 lg:w-48 bg-primary p-4 fixed left-0 top-0 h-full flex flex-col overflow-y-auto"
		>
			<Tabs {device} orientation="vertical" />
		</div>
		<div
			class="w-32 md:w-40 lg:w-48 bg-primary p-16 fixed right-0 top-0 h-full flex flex-col overflow-y-auto"
		>
			<IconBanner vertical={true} />
		</div>
	{/if}
	<div
		class={device === 'desktop'
			? 'ml-32 md:ml-40 lg:ml-48 mr-32 md:mr-40 lg:mr-48 flex-1 flex justify-center'
			: ''}
	>
		<div class={device === 'desktop' ? 'max-w-[64rem] w-full' : ''}>
			{#if device !== 'desktop'}
				<Tabs orientation="horizontal" />
				<div class="flex justify-center">
					<IconBanner vertical={true} />
				</div>
			{/if}
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
							class="bg-primary justify-center flex rounded-lg shadow-lg md:w-[210mm] md:mx-auto md:p-10 p-4"
						>
							<!-- Added responsive width (A4-like on md+), mx-auto for centering, p-10 (about 2.5cm) on md+, p-4 on mobile -->
							<ViewMarkdown filename="resume.md" />
						</div>
					</div>
					<div
						class="bg-primary justify-center flex rounded-lg shadow-lg md:w-[210mm] md:mx-auto md:p-10 p-4"
						slot="mobile"
					>
						<!-- Same as above; slots are already device-switched, but classes ensure responsiveness -->
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
		</div>
	</div>
</div>

<style>
	* {
		scroll-behavior: smooth;
		scroll-padding-top: 80px; /* Prevents overlap from fixed elements */
	}
</style>
