<script lang="ts">
	export let title: string;
	export let titlePosition = 'text-center';
	export let color: string;
	export let bg: string;
	export let firstContainer: boolean = false;
	$: innerWidth = 0;
	$: styles =
		innerWidth >= 1024 ? ' w-full {color} {bg}' : 'w-full {bg} {color}';
</script>

<svelte:window bind:innerWidth />
<div class={`${styles} ${color} ${bg}  `}>
	{#if title}
		<div class="border-text">
			<h2
				class={`${titlePosition} text-2xl font-bold ${color} bg-secondary p-2`}
			>
				{title}
			</h2>
		</div>
	{/if}
	<div class="hidden md:block px-8">
		<slot name="desktop" />
	</div>
	<div class="block md:hidden px-4">
		<slot name="mobile" />
	</div>
</div>
