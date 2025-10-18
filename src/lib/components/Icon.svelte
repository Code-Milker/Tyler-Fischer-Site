<script lang="ts">
	export let href: string | undefined = undefined;
	export let src: string;
	export let alt: string;
	export let tooltip: string = '';
	export let onClick: (() => void) | undefined = undefined;
</script>

{#if href}
	<a {href} class="group relative opacity-100 flex flex-row items-center">
		<div
			class="rounded-l-lg bg-tertiary group-hover:bg-emerald-400 size-[36px] flex justify-center items-center"
		>
			<img class="max-h-[90%] max-w-[90%] object-contain" {src} {alt} />
		</div>
		{#if tooltip}
			<span
				class="px-2 bg-primary text-quaternary font-bold text-md rounded-r-lg shadow-lg border border-tertiary group-hover:border-emerald-400 h-[36px] flex items-center"
			>
				{tooltip}
			</span>
		{/if}
	</a>
{:else}
	<button
		type="button"
		on:click={onClick}
		class="group relative opacity-100 flex flex-row items-center"
	>
		<div
			class="rounded-l-lg bg-tertiary group-hover:bg-emerald-400 size-[36px] flex justify-center items-center"
		>
			<img class="max-h-[90%] max-w-[90%] object-contain" {src} {alt} />
		</div>
		{#if tooltip}
			<span
				class="px-2 bg-primary text-quaternary font-bold text-md rounded-r-lg shadow-lg border border-tertiary group-hover:border-emerald-400 h-[36px] flex items-center"
			>
				{tooltip}
			</span>
		{/if}
	</button>
{/if}
