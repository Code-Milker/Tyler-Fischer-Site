<script>
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let filename = ''; // Default to resume.md, but accept prop

	let markdownContent = '';

	onMount(async () => {
		try {
			const response = await fetch(`/${filename}`); // Fetch based on prop (assumes static/{filename})
			if (response.ok) {
				markdownContent = await response.text();
				console.log(markdownContent); // Log after fetching for debugging
			}
		} catch (error) {
			console.error(`Failed to load Markdown file ${filename}:`, error);
		}
	});
</script>

<div class="prose prose-invert pb-5 px-5">
	<!-- Added prose-invert to apply dark theme styles -->
	<SvelteMarkdown source={markdownContent} />
</div>
