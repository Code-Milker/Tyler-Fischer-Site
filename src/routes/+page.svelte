<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	import ViewMarkdown from '$lib/components/ViewMarkdown.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import resumeMd from '$lib/content/resume.md?raw';

	onMount(() => {
		document.title = 'Ty Fischer';
	});
</script>

<div class="flex flex-col text-text">
	<Tabs orientation="horizontal" />
	<MeSection />
	<div id="resume">
		<DeviceContainer title="Resume">
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
		<DeviceContainer title="Articles">
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
