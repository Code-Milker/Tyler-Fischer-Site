<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { LinksType } from '$lib/types';
	import { onMount } from 'svelte';
	import { selectedTab } from '$lib/stores/selectedTab'; // Import the store

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
	<div style="desktop" class="bg-primary flex justify-start flex-col invisible md:visible">
		<div class="p-6 bg-secondary">
			<div class="bg-primary rounded-lg p-6 pb-0 flex flex-col">
				<div class="flex items-center">
					<div class="flex items-center justify-center flex-1">
						<img
							src={me.me}
							class="max-h-[200px] max-w-[200px] rounded-full"
							alt="failed to load me"
						/>
					</div>
					<div class="flex-1 bg-primary rounded-lg text-text text-justify flex flex-col">
						<h1 class="text-2xl text-quaternary">Hey, I'm Ty</h1>
						<p class="text-justify mt-auto">{me.description}</p>
					</div>
				</div>
				<!-- <Header /> -->
				<!-- Navigation as tabs -->
				<nav class="flex justify-around mt-4 mb-0 text-text mt-auto">
					<button
						on:click={() => ($selectedTab = 'resume')}
						class={$selectedTab === 'resume'
							? 'bg-secondary text-text px-4 py-2 rounded text-2xl'
							: 'text-2xl'}
					>
						Resume
					</button>
					<button
						on:click={() => ($selectedTab = 'projects')}
						class={$selectedTab === 'projects'
							? 'bg-secondary text-text px-4 py-2 rounded text-2xl'
							: 'text-2xl'}
					>
						Projects
					</button>
					<button
						on:click={() => ($selectedTab = 'work')}
						class={$selectedTab === 'work'
							? 'bg-secondary text-text px-4 py-2 rounded text-2xl'
							: 'text-2xl'}
					>
						Work
					</button>
				</nav>
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
				<p class="text-justify mt-auto">{me.description}</p>
				<!-- Navigation as tabs -->
				<nav class="flex justify-around mt-4 mb-0 text-text mt-auto">
					<button
						on:click={() => ($selectedTab = 'resume')}
						class={$selectedTab === 'resume'
							? 'bg-secondary text-text px-4 py-2 rounded text-xl'
							: 'text-xl'}
					>
						Resume
					</button>
					<button
						on:click={() => ($selectedTab = 'projects')}
						class={$selectedTab === 'projects'
							? 'bg-secondary text-text px-4 py-2 rounded text-xl'
							: 'text-xl'}
					>
						Projects
					</button>
					<button
						on:click={() => ($selectedTab = 'work')}
						class={$selectedTab === 'work'
							? 'bg-secondary text-text px-4 py-2 rounded text-xl'
							: 'text-xl'}
					>
						Work
					</button>
				</nav>
			</div>
		</div>
	</div>
{/if}
