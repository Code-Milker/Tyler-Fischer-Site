<!-- src/lib/components/Icon.svelte -->
<script lang="ts">
	export let href: string | undefined = undefined;
	export let src: string;
	export let alt: string;
	export let onClick: (() => void) | undefined = undefined;
</script>

{#if href}
	<a
		{href}
		class="rounded-lg bg-tertiary opacity-100 size-[36px] flex justify-center items-center"
	>
		<img class="max-h-[90%] max-w-[90%] object-contain" {src} {alt} />
	</a>
{:else}
	<button
		type="button"
		on:click={onClick}
		class="rounded-lg bg-tertiary opacity-100 size-[36px] flex justify-center items-center"
	>
		<img class="max-h-[90%] max-w-[90%] object-contain" {src} {alt} />
	</button>
{/if}
