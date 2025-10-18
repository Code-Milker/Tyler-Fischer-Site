<!-- src/lib/components/Icon.svelte -->
<script lang="ts">
	import DeviceContainer from './DeviceContainer.svelte';

	export let href: string | undefined = undefined;
	export let src: string;
	export let alt: string;
	export let tooltip: string = '';
	export let onClick: (() => void) | undefined = undefined;
</script>

{#if href}
	<a
		{href}
		class="group relative rounded-lg bg-tertiary opacity-100 size-[36px] flex justify-center items-center"
	>
		<img class="max-h-[90%] max-w-[90%] object-contain" {src} {alt} />
		{#if tooltip}
			<div
				class="  lg:absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-quaternary font-bold text-md rounded shadow-lg whitespace-nowrap hidden group-hover:block"
			>
				{tooltip}
			</div>
		{/if}
	</a>
{:else}
	<button
		type="button"
		on:click={onClick}
		class="group relative rounded-lg bg-tertiary opacity-100 size-[36px] flex justify-center items-center"
	>
		<img class="max-h-[90%] max-w-[90%] object-contain" {src} {alt} />
		{#if tooltip}
			<div
				class=" lg:absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-quaternary font-bold text-md rounded shadow-lg whitespace-nowrap hidden group-hover:block"
			>
				{tooltip}
			</div>
		{/if}
	</button>
{/if}
