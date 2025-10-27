<script>
	export let selectedArticle;
	import SvelteMarkdown from 'svelte-markdown';
	import DeviceContainer from './DeviceContainer.svelte';
	import CodeBlock from './CodeBlock.svelte';
</script>

<DeviceContainer>
	<div slot="desktop" class="flex flex-col h-full">
		<div class="bg-primary p-4 text-text prose prose-invert mx-auto flex-none">
			<SvelteMarkdown
				renderers={{ code: CodeBlock }}
				on:parsed={() => {
					requestAnimationFrame(() => {
						window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
					});
				}}
				source={selectedArticle.fullContent}
			/>
		</div>
		{#if 'interactiveContent' in selectedArticle && selectedArticle.interactiveContent}
			<div class="flex-grow bg-primary">
				<iframe
					srcdoc={selectedArticle.interactiveContent}
					class="h-[1000px] w-full"
					title="Interactive Content"
				/>
			</div>
		{/if}
	</div>
	<div slot="mobile" class="flex flex-col h-full max-w-screen">
		<div
			class="bg-primary p-4 text-text prose prose-invert max-w-screen flex-none"
		>
			<SvelteMarkdown
				renderers={{ code: CodeBlock }}
				on:parsed={() => {
					requestAnimationFrame(() => {
						window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
					});
				}}
				source={selectedArticle.fullContent}
			/>
		</div>
		{#if 'showPrototype' in selectedArticle && selectedArticle.showPrototype}
			{#if 'interactiveContent' in selectedArticle && selectedArticle.interactiveContent}
				<div class="flex-grow bg-primary">
					<iframe
						srcdoc={selectedArticle.interactiveContent}
						class="h-full w-full"
						title="Interactive Content"
					/>
				</div>
			{/if}
		{/if}
	</div>
</DeviceContainer>
