<script lang="ts">
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import SvelteMarkdown from 'svelte-markdown';
	import DeviceContainer from './DeviceContainer.svelte';
	import { onMount } from 'svelte';

	let desktopIframe: HTMLIFrameElement;
	let mobileIframe: HTMLIFrameElement;

	const resizeIframe = (iframe: HTMLIFrameElement) => {
		if (iframe && iframe.contentDocument) {
			const height = iframe.contentDocument.body.scrollHeight;
			iframe.style.height = height + 'px';
		}
	};
</script>

{#if $selectedArticle}
	<DeviceContainer>
		<div
			slot="desktop"
			class=" bg-primary p-4 text-text prose prose-invert mx-auto"
		>
			{#if 'showPrototype' in $selectedArticle && $selectedArticle.showPrototype}
				{#if 'interactiveContent' in $selectedArticle && $selectedArticle.interactiveContent}
					<iframe
						bind:this={desktopIframe}
						on:load={() => resizeIframe(desktopIframe)}
						srcdoc={$selectedArticle.interactiveContent}
						class="w-full"
						title="Interactive Content"
						style="border: none; overflow: hidden;"
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
		<div
			slot="mobile"
			class="bg-primary p-4 text-text prose prose-invert max-w-screen"
		>
			{#if 'showPrototype' in $selectedArticle && $selectedArticle.showPrototype}
				{#if 'interactiveContent' in $selectedArticle && $selectedArticle.interactiveContent}
					<iframe
						bind:this={mobileIframe}
						on:load={() => resizeIframe(mobileIframe)}
						srcdoc={$selectedArticle.interactiveContent}
						class="w-full"
						title="Interactive Content"
						style="border: none; overflow: hidden;"
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
	</DeviceContainer>
{/if}
