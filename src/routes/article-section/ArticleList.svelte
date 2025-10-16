<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Resume from '$lib/images/resume.jpeg';
	import WhaleComputer from '$lib/images/whale-computer.jpg';
	import Bip39 from '$lib/images/bip 39.jpeg';
	import EffectLess from '$lib/images/less-effect.png';
	import aiMd from '$lib/content/ai.md?raw';
	import resumeMd from '$lib/content/resume.md?raw';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import type { RepoArticle, StaticArticle } from '$lib/stores/ArticleStore';
	import { selectedArticle } from '$lib/stores/ArticleStore';

	let repoArticles: RepoArticle[] = [
		{
			title: 'BIP39',
			description: 'A single file web page that generates private keys',
			image: Bip39,
			repo: 'Code-Milker/bip-39',
			branch: 'master',
			file: 'README.md',
			interactiveFile: 'index.html'
		},
		{
			title: 'BIP39',
			description: 'A single file web page that generates private keys',
			image: Bip39,
			repo: 'Code-Milker/bip-39',
			branch: 'master',
			file: 'README.md',
			interactiveFile: 'index.html'
		},
		{
			title: 'Effect-Less',
			description:
				"Effect-less is a project that addresses TypeScript's flexibility-related challenges, such as inconsistent codebases from mixing paradigms, gradual typing pitfalls, and runtime errors, by enforcing a stricter, opinionated dialect through custom lint rules with LSP integration for immediate feedback, automating decisions, reducing debates, and prioritizing business logic. Key features include rules for Go-like error handling with [result, error] tuples, validator-derived types from Zod schemas, automatic parameter validation, immutable data structures via const and readonly, and pure functions without side effects to promote reliability, predictability, and maintainability.",
			image: EffectLess,
			repo: 'Code-Milker/effect-less',
			branch: 'main',
			file: 'README.md'
		},
		{
			title: 'MooMoo.js',
			description:
				'A JavaScript project from the MooMoo.js GitHub repository. Details will be fetched dynamically from the README if available, though the repository appears to lack a detailed description.',
			image: WhaleComputer,
			repo: 'Code-Milker/moomoo.js',
			branch: 'main',
			file: 'README.md'
		}
	];
	let staticArticles: StaticArticle[] = [
		{
			title: 'Resume',
			description: 'Resume for Tyler Fischer',
			image: Resume,
			filename: '/resume.md',
			fullContent: resumeMd
		},
		{
			title: 'Prompting 101',
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
	let chunks: (StaticArticle | RepoArticle)[][] = [];
	for (let i = 0; i < articles.length; i += 2) {
		chunks.push(articles.slice(i, i + 2));
	}
	async function fetchRepoContent(
		repo: string,
		branch: string,
		file: string
	): Promise<string> {
		if (!file) return '';
		try {
			const response = await fetch(
				`https://raw.githubusercontent.com/${repo}/${branch}/${file}`
			);
			if (response.ok) {
				return await response.text();
			}
			return `Failed to fetch ${file} from GitHub. It may not exist or the repo is private.`;
		} catch (e) {
			return 'Error fetching content: ' + (e as Error).message;
		}
	}
	async function selectArticle(i: number) {
		const article = articles[i];
		if ('repo' in article) {
			if (article.fullContent === undefined) {
				article.fullContent = await fetchRepoContent(
					article.repo,
					article.branch,
					article.file
				);
			}
			if (article.interactiveFile && article.interactiveContent === undefined) {
				article.interactiveContent = await fetchRepoContent(
					article.repo,
					article.branch,
					article.interactiveFile
				);
			}
			articles = articles;
		}
		selectedArticle.set(article);
		console.log(`Selected article: ${article.title}`);
	}
</script>

<DeviceContainer title="Articles">
	<div slot="desktop" class="bg-secondary pt-0">
		<div class="bg-primary">
			{#each chunks as chunk, chunkIndex}
				<div
					class="grid grid-cols-2 {chunkIndex < chunks.length - 1 ? '' : ''}"
				>
					{#each chunk as article, j}
						{@const i = chunkIndex * 2 + j}
						<div class="bg-primary text-text overflow-hidden">
							<div
								class={`flex flex-row transition-colors p-4 ${
									j === 0 ? 'border-r-2 border-r-secondary' : ''
								} border-t-2 border-t-secondary`}
							>
								<div class="flex-shrink-0">
									<img
										src={article.image}
										alt={article.title}
										class="w-[200px] aspect-square object-cover"
									/>
								</div>
								<div class="flex-1 flex flex-col p-4">
									<h2 class="text-2xl text-quaternary font-semibold mb-2">
										{article.title}
									</h2>
									<div
										class="text-text mb-4 line-clamp-3 prose prose-invert min-h-[calc(3*1.75em)]"
									>
										<SvelteMarkdown source={article.description} />
									</div>
									<a
										href="#"
										class="text-quaternary hover:underline"
										on:click|preventDefault={() => selectArticle(i)}
										>Read More</a
									>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<div slot="mobile">
		<div>
			{#each articles as article, i}
				{#if i > 0}
					<div class="border-b border-b-border" />
				{/if}
				<div
					class="bg-primary text-text {i === articles.length - 1
						? 'rounded-b-lg'
						: ''} {i === 0 ? 'rounded-t-lg' : ''}"
				>
					<div class="flex flex-col p-4 transition-colors">
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
							<div
								class="text-text mb-4 line-clamp-6 prose prose-invert min-h-[calc(6*1.75em)]"
							>
								<SvelteMarkdown source={article.description} />
							</div>
							<a
								href="#"
								class="text-quaternary hover:underline"
								on:click|preventDefault={() => selectArticle(i)}>Read More</a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</DeviceContainer>
