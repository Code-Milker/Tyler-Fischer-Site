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
			<div class="bg-primary rounded-lg p-6 grid grid-cols-3">
				<div class="col-span-1 flex items-center justify-center">
					<img
						src={me.me}
						class="max-h-[200px] max-w-[200px] rounded-full"
						alt="failed to load me"
					/>
				</div>
				<div class="col-span-2 flex flex-col justify-center gap-2 text-text text-justify">
					<h1 class="text-4xl text-quaternary font-bold">Hey, I'm Ty</h1>
					<p class="text-justify">{me.description}</p>
				</div>
				<div class="col-span-1 flex justify-center items-center mt-4">
					<IconBanner />
				</div>
				<div class="col-span-2 flex justify-start items-center mt-4">
					<Tabs />
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
