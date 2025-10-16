<!-- src/routes/article-section/RepoArticleHeader.svelte -->
<script lang="ts">
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { selectedArticle } from '$lib/stores/ArticleStore';
	import github from '$lib/images/github.png';
</script>

<SectionHeader
	title={$selectedArticle.title}
	description={$selectedArticle.description}
	image={$selectedArticle.image}
	alt={$selectedArticle.title}
>
	<div slot="actions" class="flex justify-between max-w-[200px]">
		<button
			on:click={() => selectedArticle.set(null)}
			class="rounded-lg bg-tertiary opacity-100 max-w-[36px] max-h-[36px] min-w-[36px] min-h-[36px] flex justify-center items-center"
		>
			<svg
				class="w-[30px] h-[30px] text-quaternary"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 19l-7-7 7-7"
				/>
			</svg>
		</button>
		<a
			href="https://github.com/{$selectedArticle.repo}"
			class="rounded-lg bg-tertiary opacity-100 max-w-[36px] max-h-[36px] flex justify-center items-center"
			target="_blank"
		>
			<img
				class="max-w-[36px] max-h-[36px] min-w-[36px] min-h-[36px]"
				src={github}
				alt="github"
			/>
		</a>
	</div>
</SectionHeader>
