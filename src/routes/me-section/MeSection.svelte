<script lang="ts">
	// import '../../app.css';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import type { LinksType } from '$lib/types';
	import { onMount } from 'svelte';
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
<DeviceContainer>
	<div slot="desktop" class="bg-secondary flex justify-start flex-col invisible md:visible">
		<div class="bg-primary p-6">
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
				<div class="flex justify-around bg-secondary rounded-full">
					{#each me.links as link}
						<a href={link.href}
							><img class="max-w-[50px] min-w-[50px]" src={link.src} alt={link.alt} /></a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div slot="mobile">
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
							><img class="max-w-[50px] min-w-[50px]" src={link.src} alt={link.alt} /></a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
</DeviceContainer>

<!-- "But that's not all. We're not just about software. We believe in the power of knowledge and exploration. -->
<!-- Join our newsletter, where we delve into philosophy, health and fitness, psychology, and thought-provoking -->
<!-- ideas. Stay informed and inspired with our insights delivered right to your inbox." -->

<!--mobile-->

<style></style>
