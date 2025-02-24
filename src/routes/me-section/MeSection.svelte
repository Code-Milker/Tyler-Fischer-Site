<script lang="ts">
	// import '../../app.css';
	import type { LinksType } from '$lib/types';
	import { onMount } from 'svelte';
	export let device: 'mobile' | 'desktop' = 'mobile';
	onMount(() => {
		getMeInfo();
	});

	let me: { description: string; me: string; links: LinksType[] } = {
		description: '',
		me: '',
		links: []
	};
	// $: adevice = device;

	async function getMeInfo() {
		const response = await fetch('me-section');
		me = await response.json();
	}
</script>

<!--desktop-->

{#if device === 'desktop'}
	<div style="desktop" class="bg-primary flex justify-start flex-col invisible md:visible">
		<div class="p-6">
			<div class="bg-primary rounded-lg p-6">
				<img
					src={me.me}
					class="max-w-[200px] max-h-[200px] rounded-full m-auto"
					alt="failed to load me"
				/>
				<div class="bg-primary rounded-lg pt-6 text-white">
					<h1 class="text-2xl">Hey, I'm Ty</h1>
					{me.description}
				</div>
			</div>

			<div class="text-white flex flex-col justify-around my-6">
				<span class="flex justify-around bg-secondary rounded-full">
					{#each me.links as link}
						<a href={link.href}
							><img class="max-w-[50px] min-h-[50px]" src={link.src} alt={link.alt} />
						</a>
					{/each}
				</span>
			</div>
		</div>
	</div>
{:else}
	<div style="mobile">
		<div class="bg-primary p-6">
			<div class="bg-primary rounded-lg">
				<img
					src={me.me}
					class="max-w-[200px] max-h-[200px] rounded-full m-auto bg-secondary"
					alt="failed to load me"
				/>
				<h1 class="text-2xl">Hey, I'm Ty</h1>
				{me.description}
			</div>

			<div class="text-white flex flex-col justify-around my-6">
				<div class="flex justify-around bg-secondary rounded-full">
					{#each me.links as link}
						<a href={link.href}
							><img class="max-w-[30px] min-h-[30px]" src={link.src} alt={link.alt} /></a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
