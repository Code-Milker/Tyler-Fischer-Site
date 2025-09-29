<script>
	import '../app.css';
	import MeSection from './me-section/MeSection.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import ArticleSection from './article-section/ArticleSection.svelte';
	import { onMount } from 'svelte';
	import ViewMarkdown from '$lib/components/ViewMarkdown.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import IconBanner from '$lib/components/IconBanner.svelte';
	$: innerWidth = 0;
	$: styles =
		innerWidth >= 1024
			? 'flex flex-row text-text min-h-screen'
			: 'flex flex-col text-text';
	onMount(async () => {
		document.title = 'Ty Fischer';
	});
</script>

<svelte:window bind:innerWidth />
<div class={styles + ''}>
	<div>
		<div class="w-full">
			<!-- {#if device !== 'desktop'} -->
			<Tabs orientation="horizontal" />
			<!-- {/if} -->
			<DeviceContainer title="" color="text-text" bg="bg-secondary">
				<div slot="desktop" class="flex flex-col">
					<MeSection device="desktop" />
					<div class="bg-primary p-4 rounded-b-lg">
						<IconBanner vertical={false} />
					</div>
				</div>
				<div slot="mobile" class="flex flex-col">
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
							<!-- Added responsive width (A4-like on md+), mx-auto for centering, p-10 (about 2.5cm) on md+, p-4 on mobile -->
							<ViewMarkdown filename="resume.md" />
						</div>
					</div>
					<div
						class="bg-primary justify-center flex md:w-[210mm] md:mx-auto md:p-8 p-4"
						slot="mobile"
					>
						<!-- Same as above; slots are already device-switched, but classes ensure responsiveness -->
						<ViewMarkdown filename="resume.md" />
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
	</div>
</div>
