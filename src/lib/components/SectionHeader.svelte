<!-- src/lib/components/SectionHeader.svelte -->
<script lang="ts">
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import type { IconProps } from '$lib/types';
	import SvelteMarkdown from 'svelte-markdown';
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
			<div class="flex flex-col justify-around pb-4" />
			<div class="pl-4 py-4 flex flex-col justify- min-h-[200px] flex-1">
				<h1 class="text-3xl text-tertiary font-bold pb-4">{title}</h1>
				<div class="prose prose-invert">
					<SvelteMarkdown source={description} />
				</div>
				<div class="flex flex-row items-start space-x-4 pt-4 w-full">
					{#each icons as icon}
						<Icon {...icon} />
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div slot="mobile" class="border-b-secondary border-b-2 bg-primary">
		<div class="w-full bg-primary">
			<h1 class="text-3xl font-bold text-tertiary p-4">
				{title}
			</h1>
		</div>
		<div class=" px-4 prose prose-invert">
			<SvelteMarkdown source={description} />
		</div>

		<div class="flex flex-col justify-center flex-1 p-4">
			<div class="flex flex-row items-center space-x-4">
				{#each icons as icon}
					<Icon {...icon} />
				{/each}
			</div>
		</div>
	</div>
</DeviceContainer>
