<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import { articles, selectedArticle } from '$lib/stores/ArticleStore';
	import { get } from 'svelte/store';

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
		const arts = get(articles);
		const article = arts[i];
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
		}
		selectedArticle.set(article);
		articles.update(() => arts);
		console.log(`Selected article: ${article.title}`);
	}
</script>

<DeviceContainer>
	<div slot="desktop" class="bg-secondary pt-0">
		<div class="bg-primary">
			{#each { length: Math.ceil($articles.length / 2) } as _, chunkIndex}
				<div class="grid grid-cols-2">
					{#each $articles.slice(chunkIndex * 2, chunkIndex * 2 + 2) as article, j}
						{@const i = chunkIndex * 2 + j}
						<div class="bg-primary text-text overflow-hidden">
							<div
								class={`flex flex-row transition-colors p-4 ${
									j === 0 ? 'border-r-2 border-r-secondary' : ''
								} ${
									chunkIndex < Math.ceil($articles.length / 2) - 1
										? 'border-b-2 border-b-secondary'
										: ''
								}`}
							>
								<div class="flex-shrink-0">
									<img
										src={article.image}
										alt={article.title}
										class="w-[200px] h-[200px]"
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
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a
										href="#"
										class="text-quaternary underline hover:text-emerald-400"
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
			{#each $articles as article, i}
				{#if i > 0}
					<div class="border-b border-b-secondary" />
				{/if}
				<div
					class="bg-primary text-text {i === $articles.length - 1
						? 'rounded-b-lg'
						: ''} {i === 0 ? 'rounded-t-lg' : ''}"
				>
					<div class="flex flex-col p-4 transition-colors">
						<h2 class="text-2xl text-quaternary font-semibold mb-4">
							{article.title}
						</h2>
						<div class="flex-shrink-0 p-8 bg-secondary">
							<div class="bg-primary">
								<img
									src={article.image}
									alt={article.title}
									class="aspect-square w-full rounded-lg object-cover mx-auto"
								/>
							</div>
						</div>
						<div class="text-text line-clamp-6 prose prose-invert mt-2">
							<SvelteMarkdown source={article.description} />
						</div>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="#"
							class="text-quaternary underline text-lg pt-2"
							on:click|preventDefault={() => selectArticle(i)}>Read More</a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</DeviceContainer>
