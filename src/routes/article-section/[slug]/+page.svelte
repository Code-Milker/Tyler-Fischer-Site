<script lang="ts">
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	const pageURL = $page.url;
	console.log(pageURL.searchParams.get('description'));
</script>

<div class="bg-secondary">
	asdf
	<!-- <SvelteMarkdown source={pageURL.searchParams.get('description')} /> -->
</div>
