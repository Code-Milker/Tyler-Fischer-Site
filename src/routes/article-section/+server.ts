import { json } from '@sveltejs/kit';
import type { ContentPreviewType } from '$lib/types.ts';
import Rwa from '$lib/images/rwa.png'; // Keeping existing images; replace or add new ones as needed
import DesoLogo from '$lib/images/DesoLogo.jpeg';
// Add imports for new images if available (e.g., import ResumeImg from "$lib/images/resume.png";)

// Import Markdown files as raw strings (bundled at build time via Vite's ?raw loader)
import resume from '../../../static/resume.md?raw';
import ai from '../../../static/ai.md?raw';

export function GET() {
	// No need for async since imports are synchronous
	const articles: (Omit<ContentPreviewType, 'url'> & { filename: string })[] = [
		{
			title: 'Resume', // Adjust title as needed
			description: resume.split('\n').slice(0, 5).join('\n') + '...', // Truncated preview
			image: Rwa, // Reuse existing image or import a new one
			filename: './resume.md' // Added for full fetch in MarkdownViewer
		},
		{
			title: 'AI Article', // Adjust title as needed
			description: ai.split('\n').slice(0, 5).join('\n') + '...', // Truncated preview
			image: DesoLogo, // Reuse existing image or import a new one
			filename: './ai.md' // Added for full fetch in MarkdownViewer
		}
		// Add more articles here if needed, importing additional .md files with ?raw
	];
	return json(articles);
}
