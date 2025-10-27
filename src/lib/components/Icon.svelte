<script lang="ts">
	export let href: string | undefined = undefined;
	export let src: string;
	export let alt: string;
	export let tooltip: string = '';
	export let onClick: (() => void) | undefined = undefined;
	export let imgClass: string = '';
	export let showTooltipOnMobile: boolean = false;
</script>

{#if href}
	<a
		{href}
		class="group relative opacity-100 flex flex-row items-center [-webkit-tap-highlight-color:transparent]"
	>
		<div
			class="bg-tertiary size-[36px] flex justify-center items-center"
			class:group-hover:bg-emerald-400={!!tooltip}
			class:rounded-lg={!tooltip}
			class:rounded-l-lg={!!tooltip}
			class:rounded-r-lg={!!tooltip && !showTooltipOnMobile}
			class:rounded-r-none={!!tooltip && showTooltipOnMobile}
			class:md:rounded-r-none={!!tooltip}
		>
			<img
				class={`max-h-[90%] max-w-[90%] object-contain ${imgClass}`}
				{src}
				{alt}
			/>
		</div>
		{#if tooltip}
			<span
				class="{showTooltipOnMobile
					? 'flex'
					: 'hidden md:flex'} px-2 bg-primary text-quaternary font-bold text-md rounded-r-lg shadow-lg border border-tertiary group-hover:border-emerald-400 h-[36px] items-center"
			>
				{tooltip}
			</span>
		{/if}
	</a>
{:else}
	<button
		type="button"
		on:click={onClick}
		class="group relative opacity-100 flex flex-row items-center [-webkit-tap-highlight-color:transparent]"
	>
		<div
			class="bg-tertiary size-[36px] flex justify-center items-center"
			class:group-hover:bg-emerald-400={!!tooltip}
			class:rounded-lg={!tooltip}
			class:rounded-l-lg={!!tooltip}
			class:rounded-r-lg={!!tooltip && !showTooltipOnMobile}
			class:rounded-r-none={!!tooltip && showTooltipOnMobile}
			class:md:rounded-r-none={!!tooltip}
		>
			<img
				class={`max-h-[90%] max-w-[90%] object-contain ${imgClass}`}
				{src}
				{alt}
			/>
		</div>
		{#if tooltip}
			<span
				class="{showTooltipOnMobile
					? 'flex'
					: 'hidden md:flex'} px-2 bg-primary text-quaternary font-bold text-md rounded-r-lg shadow-lg border border-tertiary group-hover:border-emerald-400 h-[36px] items-center"
			>
				{tooltip}
			</span>
		{/if}
	</button>
{/if}
