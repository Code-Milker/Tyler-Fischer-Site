<script lang="ts">
	export let title: string;
	export let titlePosition = 'text-center';
</script>

<div class={`w-full opacity-90 bg-secondary`}>
	<div class="hidden lg:block px-8 max-w-[1048px] mx-auto">
		{#if title}
			<h2 class={`${titlePosition} text-xl font-bold p-2 text-quaternary`}>
				{title}
			</h2>
		{/if}
		<slot name="desktop" />
	</div>

	<div class="block lg:hidden">
		{#if title}
			<div class="border-text">
				<h2 class={`text-xl font-bold p-2 bg-border`}>
					{title}
				</h2>
			</div>
		{/if}
		<slot name="mobile" />
	</div>
</div>
