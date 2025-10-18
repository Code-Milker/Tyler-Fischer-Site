<script>
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import SvelteMarkdown from 'svelte-markdown';
	import DeviceContainer from './DeviceContainer.svelte';
</script>

{#if $selectedArticle}
	<DeviceContainer>
		<div slot="desktop">
			<div class="bg-primary p-4 text-text prose prose-invert mx-auto">
				{#if 'showPrototype' in $selectedArticle && $selectedArticle.showPrototype}
					{#if 'interactiveContent' in $selectedArticle && $selectedArticle.interactiveContent}
						<iframe
							srcdoc={$selectedArticle.interactiveContent}
							class=" w-full"
							title="Interactive Content"
						/>
					{/if}
				{:else}
					<SvelteMarkdown
						on:parsed={() => {
							requestAnimationFrame(() => {
								window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
							});
						}}
						source={$selectedArticle.fullContent}
					/>
				{/if}
			</div>
		</div>

		<div slot="mobile">
			<div class="bg-primary p-4 text-text prose prose-invert max-w-screen">
				{#if 'showPrototype' in $selectedArticle && $selectedArticle.showPrototype}
					{#if 'interactiveContent' in $selectedArticle && $selectedArticle.interactiveContent}
						<iframe
							srcdoc={$selectedArticle.interactiveContent}
							title="Interactive Content"
						/>
					{/if}
				{:else}
					<SvelteMarkdown
						on:parsed={() => {
							requestAnimationFrame(() => {
								window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
							});
						}}
						source={$selectedArticle.fullContent}
					/>
				{/if}
			</div>
		</div>
	</DeviceContainer>
{/if}
