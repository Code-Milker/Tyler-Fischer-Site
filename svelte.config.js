import adapter from '@sveltejs/adapter-static'; // Changed to static adapter for full SSG

import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import remarkGfm from 'remark-gfm'; // For GitHub-style tables
import rehypeSlug from 'rehype-slug'; // Adds IDs to headings
import rehypeAutolinkHeadings from 'rehype-autolink-headings'; // Auto-links headings

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkGfm], // Enhances tables with GFM styling
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings] // Heading IDs and links
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({ fallback: 'index.html' }) // Defaults to prerendering all routes as static files
	}
};

export default config;
