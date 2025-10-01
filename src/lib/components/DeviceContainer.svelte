<script lang="ts">
	export let title: string;
	export let titlePosition = 'text-center';
	export let color: string;
	export let bg: string;
</script>

<div class={`w-full opacity-90 ${bg}`}>
	<div class="hidden md:block px-8 max-w-[1048px] mx-auto">
		{#if title}
			<h2 class={`${titlePosition} text-xl font-bold  p-2  text-quaternary`}>
				{title}
			</h2>
		{/if}
		<slot name="desktop" />
	</div>
	<div class="block md:hidden">
		{#if title}
			<div class="border-text">
				<h2
					class={`${titlePosition} text-xl font-bold ${color}  p-2 bg-border `}
				>
					{title}
				</h2>
			</div>
		{/if}
		<slot name="mobile" />
	</div>
</div>
