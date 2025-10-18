<!-- src/lib/components/SectionHeader.svelte -->
<script lang="ts">
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import type { IconProps } from '$lib/types';
	import Icon from './Icon.svelte';
	export let title: string;
	export let description: string;
	export let image: string;
	export let alt: string = '';
	export let icons: IconProps[] = [];
</script>

<DeviceContainer>
	<div slot="desktop" class="bg-primary w-full">
		<div class="flex flex-row bg-primary p-4 w-full">
			<img
				src={image}
				class="size-[200px] border-primary"
				alt={`failed to load ${alt}`}
			/>
			<div class="pl-4 py-4 flex flex-col justify-between min-h-[200px] flex-1">
				<h1 class="text-3xl text-tertiary font-bold">{title}</h1>
				<p class="text-start">{description}</p>
				<div class="flex flex-row items-center space-x-4">
					{#each icons as icon}
						<Icon {...icon} />
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div slot="mobile" class=" border-b-secondary border-b-2 px-4">
		<h1 class="text-2xl font-bold text-tertiary py-4">
			{title}
		</h1>
		<div class="w-full bg-secondary p-4">
			<img
				src={image}
				class="aspect-square size-[225px] object-cover bg-secondary rounded-lg mx-auto"
				alt={`failed to load ${alt}`}
			/>
		</div>
		<div class="flex flex-col justify-center flex-1 py-4">
			<div class="flex flex-row items-center space-x-4">
				{#each icons as icon}
					<Icon {...icon} />
				{/each}
			</div>
		</div>
		<p class="text-start pb-4">{description}</p>
	</div>
</DeviceContainer>
