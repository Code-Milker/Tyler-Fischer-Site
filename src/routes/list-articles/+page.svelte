<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	import ContentPreview from '$lib/components/ContentPreview.svelte';
	import { onMount } from 'svelte';
	import Container from '$lib/components/Container.svelte';
	import SubContainer from '$lib/components/SubContainer.svelte';
	let articles: ContentPreviewType[] = [];
	onMount(() => {
		getArticles(new FileReader());
	});
	async function getArticles(fileReader: FileReader) {
		const res = await (await fetch('article-section/[slug]')).json();
		articles = res;
	}
</script>

<Container title="" color="text-white" bg="bg-primary" firstContainer={true}>
	<SubContainer>
		<div slot="desktop">
			<h1 class="text-xl">Articles</h1>
			<p>
				This article page was born out of my frustration with the disconnect in conversations due to
				differing use of terminology and facts. It's a platform where I sort my random thoughts into
				theories and frameworks, bridging those gaps in understanding. Welcome to this space of
				creative organization!
			</p>
		</div>
		<div slot="mobile">mobile</div>
	</SubContainer>
</Container>
<Container title="" color="text-white" bg="bg-secondary" firstContainer={true}>
	{#each articles as article, i}
		<div class="xs:mb-2">
			<ContentPreview
				color="text-white"
				bg="bg-primary"
				img={article.image}
				title={article.title}
				url={article.url}
				description={article.description}
			/>
		</div>
	{/each}
</Container>
