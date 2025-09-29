<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	import ViewMarkdown from '$lib/components/ViewMarkdown.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import IconBanner from '$lib/components/IconBanner.svelte';

	// Import Markdown as raw string from $lib/content (assuming files are in src/lib/content)
	import resumeMd from '$lib/content/resume.md?raw';

	$: innerWidth = 0;
	$: styles =
		innerWidth >= 1024
			? 'flex flex-row text-text min-h-screen'
			: 'flex flex-col text-text';
	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<svelte:window bind:innerWidth />
<div class={styles + ''}>
	<div>
		<div class="w-full">
			<DeviceContainer title="" color="text-text" bg="bg-secondary">
				<div slot="desktop" class="flex flex-col">
					<Tabs orientation="horizontal" />
					<MeSection device="desktop" />
					<div class="bg-primary p-4 rounded-b-lg">
						<IconBanner vertical={false} />
					</div>
				</div>
				<div slot="mobile" class="flex flex-col">
					<Tabs orientation="horizontal" />
					<MeSection device="mobile" />
					<div class=" bg-primary p-4">
						<IconBanner vertical={false} />
					</div>
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
							class="bg-primary justify-center flex rounded-lg md:mx-auto md:p-8 p-4"
						>
							<ViewMarkdown source={resumeMd} />
						</div>
					</div>
					<div
						class="bg-primary justify-center flex md:w-[210mm] md:mx-auto md:p-8 p-4"
						slot="mobile"
					>
						<ViewMarkdown source={resumeMd} />
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
						<Tabs orientation="horizontal" />
					</div>
					<div slot="mobile">
						<ArticleSection />
						<Tabs orientation="horizontal" />
					</div>
				</DeviceContainer>
			</div>
		</div>
	</div>
</div>
