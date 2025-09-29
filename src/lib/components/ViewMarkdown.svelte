<script>
	import SvelteMarkdown from 'svelte-markdown';
	export let source = ''; // Accept the markdown content as a prop
</script>

<div class="prose prose-invert">
	<!-- Added prose-invert to apply dark theme styles -->
	<SvelteMarkdown {source} />
</div>
