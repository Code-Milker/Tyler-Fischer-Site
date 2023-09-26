<script lang="ts">
	export let content: any;
	export let title: string;
	export let color: string;
	export let bg: string;
	export let firstContainer: boolean = false;
</script>

<div class="md:min-w-[64rem] sm:min-w-[100vw] sm:max-w-[100vw] md:max-w-[64rem] {color} {bg} p-6">
	{#if !firstContainer}<h1 class="text-center pb-6 {bg} text-2xl">{title}</h1>
	{/if}
	<svelte:component this={content} />
</div>
