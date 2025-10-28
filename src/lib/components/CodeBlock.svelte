<script lang="ts">
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css'; // Dark theme; matches your prose-invert. Swap e.g., 'atom-one-dark.css' if preferred.
	export let text: string; // The code content from markdown
	export let lang: string | null = null; // Language from markdown (e.g., 'js', 'ts'); falls back to auto-detect
	let highlighted = text;
	onMount(() => {
		if (lang && hljs.getLanguage(lang)) {
			highlighted = hljs.highlight(text, { language: lang }).value;
		} else {
			highlighted = hljs.highlightAuto(text).value;
		}
	});
</script>

<pre><code class="hljs max-w-2">{@html highlighted}</code></pre>

<style>
	pre {
		max-width: 100%;
		box-sizing: border-box;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		border-radius: 0.375rem; /* rounded-md */
		margin: 0 0 1.5rem 0; /* Add bottom margin for separation between consecutive code blocks */
	}
	code {
		white-space: pre;
		word-break: normal;
	}
</style>
