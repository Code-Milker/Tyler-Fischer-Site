<script lang="ts">
	export let content: any | undefined;
	export let title: string;
	export let titlePosition = 'text-center';

	export let color: string;
	export let bg: string;
	export let firstContainer: boolean = false;
	console.log(bg, color);
	$: innerWidth = 0;
	$: styles =
		innerWidth >= 640 ? 'min-w-[64rem] max-w-[64rem] {color} {bg}' : 'w-full {bg} {color}';
</script>

<svelte:window bind:innerWidth />

<div class={`${styles} ${color} ${bg}`}>
	{#if !firstContainer}<h1
			class="mx-auto text-2xl inline-block {titlePosition} align-middle w-full min-h-[40px]"
		>
			<div class="mt-1 {titlePosition}">
				{title}
			</div>
		</h1>
	{/if}
	{#if content}
		<svelte:component this={content} />
	{:else}
		<slot />
	{/if}
</div>
