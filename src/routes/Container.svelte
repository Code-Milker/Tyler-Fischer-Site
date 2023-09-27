<script lang="ts">
	export let content: any;
	export let title: string;
	export let color: string;
	export let bg: string;
	export let firstContainer: boolean = false;
	$: innerWidth = 0;
	$: styles =
		innerWidth >= 640
			? 'md:min-w-[64rem] sm:min-w-[100vw] sm:max-w-[100vw] md:max-w-[64rem] {color} {bg} bg-secondary'
			: 'w-full';
</script>

<svelte:window bind:innerWidth />

<div class={styles}>
	{#if !firstContainer}<h1
			class="text-center py-3 mx-auto {bg} text-2xl inline-block text-center align-middle w-full"
		>
			{title}
		</h1>
	{/if}
	<svelte:component this={content} />
</div>
