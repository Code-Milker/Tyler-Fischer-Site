<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import ProjectSection from './project-section/ProjectSection.svelte';
	import WorkHistorySection from './work-section/WorkHistorySection.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import Tabs from '$lib/components/Tabs.svelte'; // Adjust path as needed
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import ViewMarkdown from '$lib/components/ViewMarkdown.svelte';
	import { selectedTab } from '$lib/stores/selectedTab'; // Import the store

	$: innerWidth = 0;
	$: styles = innerWidth >= 640 ? 'md:grid xs:block justify-items-center text-text' : 'text-text';
	$: device = innerWidth >= 640 ? 'desktop' : 'mobile';
	let resumeMarkdown = '';
	onMount(async () => {
		document.title = 'Ty Fischer';
		try {
			const response = await fetch('/resume.md'); // Adjust path to your MD file in static/
			if (response.ok) {
				console.log(resumeMarkdown);
				resumeMarkdown = await response.text();
			}
		} catch (error) {
			console.error('Failed to load resume MD:', error);
		}
	});
</script>

<svelte:window bind:innerWidth />

<div class={styles + ' mt-10'}>
	<DeviceContainer title="" color="text-text" bg="bg-secondary" firstContainer={true}>
		<div slot="desktop">
			<MeSection device="desktop" />
		</div>
		<div slot="mobile">
			<MeSection device="mobile" />
		</div>
	</DeviceContainer>
	<Tabs />

	{#if $selectedTab === 'resume'}
		<DeviceContainer title="" titlePosition="text-center" color="text-text" bg="bg-secondary">
			<div slot="desktop">
				<div class="bg-primary justify-center flex rounded md:rounded-lg xs:rounded-none">
					<ViewMarkdown filename="resume.md" />
				</div>
			</div>
			<div slot="mobile">
				<ViewMarkdown filename="resume.md" />
			</div>
		</DeviceContainer>
	{/if}

	{#if $selectedTab === 'projects'}
		<DeviceContainer title="" titlePosition="text-center" color="text-text" bg="bg-secondary">
			<div slot="desktop">
				<ProjectSection device="desktop" />
			</div>
			<div slot="mobile">
				<ProjectSection device="mobile" />
			</div>
		</DeviceContainer>
	{/if}

	{#if $selectedTab === 'work'}
		<DeviceContainer titlePosition="text-center" title="" color="text-text" bg="bg-secondary">
			<div slot="desktop">
				<WorkHistorySection device="desktop" />
			</div>
			<div slot="mobile">
				<WorkHistorySection device="mobile" />
			</div>
		</DeviceContainer>
	{/if}
</div>
