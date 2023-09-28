<script lang="ts">
	export let content: any;
	export let title: string;
	export let color: string;
	export let bg: string;
	export let firstContainer: boolean = false;
	$: innerWidth = 0;
	$: styles =
		innerWidth >= 640
			? 'md:min-w-[64rem] xs:min-w-[100vw] xs:max-w-[100vw] md:max-w-[64rem] {color} {bg} bg-secondary'
			: 'w-full bg-secondary';
</script>

<svelte:window bind:innerWidth />

<div class={styles}>
	{#if !firstContainer}<h1
			class="text-center mx-auto {bg} text-2xl inline-block text-center align-middle w-full min-h-[40px]"
		>
			<div class="mt-1">
				{title}
			</div>
		</h1>
	{/if}
	<svelte:component this={content} />
</div>
