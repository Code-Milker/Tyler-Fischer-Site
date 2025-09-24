<script lang="ts">
	export let title: string;
	export let titlePosition = 'text-center';
	export let color: string;
	export let bg: string;
	export let firstContainer: boolean = false;
	$: innerWidth = 0;
	$: styles =
		innerWidth >= 640 ? 'min-w-[64rem] max-w-[64rem] {color} {bg}' : 'w-full {bg} {color}';
</script>

<svelte:window bind:innerWidth />

<div class={`${styles} ${color} ${bg} rounded-lg p-8`}>
	<div class="hidden md:block">
		<slot name="desktop" />
	</div>
	<div class="block md:hidden">
		<slot name="mobile" />
	</div>
</div>
