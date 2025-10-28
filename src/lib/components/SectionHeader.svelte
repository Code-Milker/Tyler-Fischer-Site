<script lang="ts">
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import type { IconProps } from '$lib/types';
	import SvelteMarkdown from 'svelte-markdown';
	import Icon from './Icon.svelte';
	export let title: string;
	export let description: string;
	export let image: string | undefined = undefined;
	export let alt: string = '';
	export let icons: IconProps[] = [];
</script>

<DeviceContainer>
	<div slot="desktop" class="bg-primary w-full">
		<div class="flex flex-row items-start bg-primary p-4 w-full">
			{#if image}
				<div class="flex-shrink-0">
					<img src={image} {alt} class="w-[200px] h-[200px]" />
				</div>
			{/if}
			<div
				class="{image ? 'pl-4' : ''} flex flex-col min-h-{image
					? '[200px]'
					: '0'} flex-1"
			>
				<h1 class="text-3xl text-tertiary font-bold pb-4">{title}</h1>
				<div class="prose prose-invert">
					<SvelteMarkdown source={description} />
				</div>
				<div class="mt-auto flex flex-row items-start space-x-4 pt-4 w-full">
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
		{#if image}
			<div class="flex-shrink-0 p-8 bg-secondary">
				<div class="bg-primary">
					<img
						src={image}
						{alt}
						class="aspect-square w-full rounded-lg object-cover mx-auto"
					/>
				</div>
			</div>
		{/if}
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
