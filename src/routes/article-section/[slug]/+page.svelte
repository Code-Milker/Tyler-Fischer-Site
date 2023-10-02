<script lang="ts">
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import Container from '$lib/components/Container.svelte';
	const pageURL = $page.url;
	console.log(pageURL.searchParams.get('description'));
</script>

<div class="bg-secondary flex flex-row justify-center">
	<div>
		<Container title="Articles" color="text-white" bg="bg-primary" content={undefined}>
			<SvelteMarkdown source={pageURL.searchParams.get('description')} />
		</Container>
	</div>
</div>
