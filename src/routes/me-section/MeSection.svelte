<script lang="ts">
	import type { LinksType } from '$lib/types';
	import { onMount } from 'svelte';
	import { selectedTab } from '$lib/stores/selectedTab'; // Import the store
	import IconBanner from '$lib/components/IconBanner.svelte';
	import Tabs from '$lib/components/Tabs.svelte';

	export let device: 'mobile' | 'desktop' = 'mobile';

	onMount(() => {
		getMeInfo();
	});

	let me: { description: string; me: string; links: LinksType[] } = {
		description: '',
		me: '',
		links: []
	};

	async function getMeInfo() {
		const response = await fetch('me-section');
		me = await response.json();
	}
</script>

<!--desktop-->
{#if device === 'desktop'}
	<div
		style="desktop"
		class="rounded-lg bg-primary flex justify-start flex-col invisible md:visible"
	>
		<div class="bg-secondary">
			<div class="bg-primary rounded-lg p-6 flex flex-col">
				<div class="flex min-h-[200px]">
					<div class="flex items-center justify-center flex-1">
						<img
							src={me.me}
							class="max-h-[200px] max-w-[200px] rounded-full flex-2"
							alt="failed to load me"
						/>
					</div>
					<div
						class="flex-1 bg-primary rounded-lg text-text text-justify flex flex-col justify-center gap-2"
					>
						<h1 class="text-4xl text-quaternary font-bold">Hey, I'm Ty</h1>
						<p class="text-justify">{me.description}</p>
					</div>
				</div>
				<div class="flex items-center mt-4">
					<div class="flex-1 flex justify-center">
						<IconBanner />
					</div>
					<div class="flex-1 flex justify-start">
						<Tabs />
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div style="mobile">
		<div class="bg-primary p-6">
			<div class="bg-primary rounded-lg flex flex-col pb-0">
				<img
					src={me.me}
					class="max-w-[200px] max-h-[200px] rounded-full m-auto bg-secondary"
					alt="failed to load me"
				/>
				<h1 class="text-2xl">Hey, I'm Ty</h1>
				<p class="text-justify mt-2">{me.description}</p>
				<div class="flex flex-col items-center mt-4 gap-4">
					<IconBanner />
					<Tabs />
				</div>
			</div>
		</div>
	</div>
{/if}
