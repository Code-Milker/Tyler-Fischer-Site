<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	import { onMount, tick } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Rwa from '$lib/images/rwa.png';
	import WhaleComputer from '$lib/images/whale-computer.jpg';
	import resumeMd from '$lib/content/resume.md?raw';
	import aiMd from '$lib/content/ai.md?raw';

	type ArticlePreviewType = Omit<ContentPreviewType, 'url'> & {
		filename: string;
		fullContent?: string;
	};

	let articles: ArticlePreviewType[] = [
		{
			title: 'building tooling vs feature development',
			description: '',
			image: Rwa,
			filename: '/resume.md',
			fullContent: resumeMd // Preload content
		},
		{
			title: 'about me',
			description: '',
			image: Rwa,
			filename: '/resume.md',
			fullContent: resumeMd
		},
		{
			title: 'idea prototyping "just start writing to capture ideas',
			description:
				'A detailed professional resume for Tyler Fischer, showcasing years of experience in software development, key projects, technical skills, and career achievements across various industries including fintech and blockchain.',
			image: Rwa,
			filename: '/resume.md',
			fullContent: resumeMd
		},
		{
			title: 'Blockchain experiences in development, trading, and crisis',
			description: '',
			image: WhaleComputer,
			filename: '/ai.md',
			fullContent: aiMd
		},
		{
			title: 'AI and Prompting Approach for Development',
			description:
				'Thoughts on a generalized approach to leveraging AI efficiently and securely across any environment, emphasizing controlled access, precise prompting, output verification, and future safeguards to mitigate risks like hallucinations, biases, and privacy breaches while maximizing productivity.',
			image: WhaleComputer,
			filename: '/ai.md',
			fullContent: aiMd
		}
		// Add more articles here if needed, importing additional .md files with ?raw
	];

	let expanded: boolean[] = [];
	let previewRefs: (HTMLDivElement | null)[] = [];

	onMount(() => {
		expanded = new Array(articles.length).fill(false);
		previewRefs = new Array(articles.length).fill(null);
	});

	function toggleExpand(i: number) {
		expanded[i] = !expanded[i];
		if (previewRefs[i]) {
			previewRefs[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		expanded = expanded; // Trigger reactivity if needed
	}
</script>

<div>
	{#each articles as article, i}
		{#if i !== 0}
			<div class="min-h-[5px]" />
		{/if}
		<div class="bg-primary text-text" bind:this={previewRefs[i]}>
			<div class="flex flex-row p-6">
				<div class="flex-shrink-0 mr-6">
					<img
						src={article.image}
						alt={article.title}
						class="w-[200px] h-[200px] rounded-lg object-cover"
					/>
				</div>
				<div class="flex-1 flex flex-col max-h-[200px]">
					<h2 class="text-2xl text-quaternary font-semibold mb-2">
						{article.title}
					</h2>
					<div class="text-text mb-4 line-clamp-[6]">
						<SvelteMarkdown source={article.description} />
					</div>
					<div class="mt-auto flex justify-start">
						<button
							class="min-w-[120px] bg-secondary text-text px-4 py-2 rounded hover:bg-tertiary transition-colors"
							on:click={() => toggleExpand(i)}
						>
							{expanded[i] ? 'Close' : 'Expand'}
						</button>
					</div>
				</div>
			</div>
			{#if expanded[i]}
				<div class="px-6 py-8 border-t border-secondary">
					<div class="prose prose-invert !min-w-0 max-w-full">
						<SvelteMarkdown source={article.fullContent} />
					</div>
					<div class="mt-6 flex justify-center">
						<button
							class="min-w-[120px] bg-secondary text-text px-4 py-2 rounded hover:bg-tertiary transition-colors"
							on:click={() => toggleExpand(i)}
						>
							Close
						</button>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
