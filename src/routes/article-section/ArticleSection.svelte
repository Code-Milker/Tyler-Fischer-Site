<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	import { onMount, tick } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Rwa from '$lib/images/rwa.png';
	import WhaleComputer from '$lib/images/whale-computer.jpg';
	import aiMd from '$lib/content/ai.md?raw';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';

	interface StaticArticle extends Omit<ContentPreviewType, 'url'> {
		filename: string;
		fullContent: string;
	}

	interface RepoArticle extends Omit<ContentPreviewType, 'url'> {
		repo: string;
		fullContent?: string;
	}

	let repoArticles: RepoArticle[] = [
		{
			title: 'Effect-Less',
			description:
				"The project addresses TypeScript's flexibility leading to inconsistent codebases by proposing a stricter, opinionated dialect via custom lint rules with LSP integration. Key features include Go-like error handling, types derived from Zod schemas, automatic parameter validation, immutable data structures, and pure functions for enhanced reliability and maintainability.",
			image: Rwa, // Placeholder; update to a relevant image if available
			repo: 'Code-Milker/effect-less'
		},
		{
			title: 'MooMoo.js README',
			description:
				'A JavaScript project from the MooMoo.js GitHub repository. Details will be fetched dynamically from the README if available.',
			image: WhaleComputer, // Placeholder; update to a relevant image if available
			repo: 'Code-Milker/moomoo.js'
		}
	];

	let staticArticles: StaticArticle[] = [
		// Existing static examples (uncomment/add as needed; supports MD files)
		// {
		//   title: 'Building Tooling vs Feature Development',
		//   description: '',
		//   image: Rwa,
		//   filename: '/resume.md',
		//   fullContent: resumeMd
		// },
		// {
		//   title: 'About Me',
		//   description: '',
		//   image: Rwa,
		//   filename: '/resume.md',
		//   fullContent: resumeMd
		// },
		// {
		//   title: 'Idea Prototyping: Just Start Writing to Capture Ideas',
		//   description:
		//     'A detailed professional resume for Tyler Fischer, showcasing years of experience in software development, key projects, technical skills, and career achievements across various industries including fintech and blockchain.',
		//   image: Rwa,
		//   filename: '/resume.md',
		//   fullContent: resumeMd
		// },
		// {
		//   title: 'Blockchain Experiences in Development, Trading, and Crisis',
		//   description: '',
		//   image: WhaleComputer,
		//   filename: '/ai.md',
		//   fullContent: aiMd
		// },
		{
			title: 'AI and Prompting Approach for Development',
			description:
				'Thoughts on a generalized approach to leveraging AI efficiently and securely across any environment, emphasizing controlled access, precise prompting, output verification, and future safeguards to mitigate risks like hallucinations, biases, and privacy breaches while maximizing productivity.',
			image: WhaleComputer,
			filename: '/ai.md',
			fullContent: aiMd
		}
	];

	let articles: (StaticArticle | RepoArticle)[] = [
		...repoArticles,
		...staticArticles
	];

	let expanded: boolean[] = [];
	let previewRefs: (HTMLDivElement | null)[] = [];

	onMount(() => {
		expanded = new Array(articles.length).fill(false);
		previewRefs = new Array(articles.length).fill(null);
	});

	async function fetchRepoContent(repo: string): Promise<string> {
		try {
			const response = await fetch(
				`https://raw.githubusercontent.com/${repo}/main/README.md`
			);
			if (response.ok) {
				return await response.text();
			}
			return 'Failed to fetch README from GitHub. It may not exist or the repo is private.';
		} catch (e) {
			return 'Error fetching README: ' + (e as Error).message;
		}
	}

	async function toggleExpand(i: number) {
		const article = articles[i];
		if ('repo' in article && article.fullContent === undefined) {
			article.fullContent = await fetchRepoContent(article.repo);
			articles = articles; // Trigger reactivity
		}

		expanded[i] = !expanded[i];
		if (expanded[i] && previewRefs[i]) {
			await tick();
			previewRefs[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		expanded = expanded;
	}
</script>

<DeviceContainer title="Articles">
	<div slot="desktop">
		<div>
			{#each articles as article, i}
				{#if i !== 0}
					<div class="border-b border-b-border" />
				{/if}
				<div
					class="bg-primary text-text {i === 0 ? 'rounded-t-lg' : ''} {i ===
					articles.length - 1
						? 'rounded-b-lg'
						: ''}"
					bind:this={previewRefs[i]}
				>
					<div class="flex flex-row p-6">
						<div class="flex-shrink-0 mb-0 mr-6 p-2">
							<img
								src={article.image}
								alt={article.title}
								class="w-[300px] aspect-square rounded-lg object-cover"
							/>
						</div>
						<div class="flex-1 flex flex-col">
							<h2 class="text-2xl text-quaternary font-semibold mb-2">
								{article.title}
							</h2>
							<div class="text-text mb-4 line-clamp-[6] prose prose-invert">
								<SvelteMarkdown source={article.description} />
							</div>
							<div class="flex justify-start">
								<button
									class="min-w-[120px] bg-secondary text-text px-2 py-2 rounded hover:bg-tertiary transition-colors"
									on:click={() => toggleExpand(i)}
								>
									{expanded[i] ? 'Close' : 'Expand'}
								</button>
							</div>
						</div>
					</div>
					{#if expanded[i]}
						<div class="px-6 py-8 border-t border-quaternary">
							<div class="prose prose-invert !min-w-0 max-w-full">
								<SvelteMarkdown source={article.fullContent ?? ''} />
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
	</div>
	<div slot="mobile">
		<div>
			{#each articles as article, i}
				{#if i !== 0}
					<div class="border-b border-b-border" />
				{/if}
				<div
					class="bg-primary text-text {i === 0 ? 'rounded-t-lg' : ''} {i ===
					articles.length - 1
						? 'rounded-b-lg'
						: ''}"
					bind:this={previewRefs[i]}
				>
					<div class="flex flex-col p-4">
						<div class="flex-shrink-0 mb-4 p-2">
							<img
								src={article.image}
								alt={article.title}
								class="aspect-square mx-auto rounded-lg object-cover"
							/>
						</div>
						<div class="flex-1 flex flex-col">
							<h2 class="text-2xl text-quaternary font-semibold mb-2">
								{article.title}
							</h2>
							<div class="text-text mb-4 line-clamp-[6] prose prose-invert">
								<SvelteMarkdown source={article.description} />
							</div>
							<div class="mt-auto flex justify-start">
								<button
									class="min-w-[120px] bg-secondary text-text px-2 py-2 rounded hover:bg-tertiary transition-colors"
									on:click={() => toggleExpand(i)}
								>
									{expanded[i] ? 'Close' : 'Expand'}
								</button>
							</div>
						</div>
					</div>
					{#if expanded[i]}
						<div class="px-4 py-8 border-t border-quaternary">
							<div class="prose prose-invert !min-w-0 max-w-full">
								<SvelteMarkdown source={article.fullContent ?? ''} />
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
	</div>
</DeviceContainer>
