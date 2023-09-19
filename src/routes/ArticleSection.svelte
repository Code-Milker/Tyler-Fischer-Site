<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	import Bip from '$lib/images/bip-39.png';
	import ContentPreview from './ContentPreview.svelte';
	const articles: ContentPreviewType[] = [
		{
			title: 'Spiral Dynamics and its pragmatic use cases',
			image: Bip,
			description: '',

			url: ''
		},
		{
			title: '5 starter improvements for you developer workflow',
			image: Bip,
			description:
				' alskdjfl asldjkflkdsjf lkdjfdlkfjdlkfjdlkfj dlfkjd flkdjfd lkjd flkdj fldk jfldk jfdlkjf dlk fjdlkj fdlk jflkdj fldkjf ldkjf dlk jflk djfdlk jfdlk jfdlkjf dlkzjfda;lkjdf;alskjf;aslkjfas;ljfa;sldkjfasd; lfjas;lasj d;lkjasd  f;lsad:',
			url: ''
		}
	];
</script>

{#each articles as article}
	<div class="mb-6">
		<ContentPreview
			bg="bg-primary"
			img={article.image}
			title={article.title}
			link={'TODO'}
			description={article.description}
		/>
	</div>
{/each}
