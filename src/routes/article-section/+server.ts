import { json } from '@sveltejs/kit';
import type { ContentPreviewType } from '$lib/types.ts';
import Rwa from '$lib/images/rwa.png';
import WhaleComputer from '$lib/images/whale-computer.jpg';
export function GET() {
	const articles: (Omit<ContentPreviewType, 'url'> & { filename: string })[] = [
		{
			title: 'Resume', // Adjust title as needed
			description:
				'A detailed professional resume for Tyler Fischer, showcasing years of experience in software development, key projects, technical skills, and career achievements across various industries including fintech and blockchain.', // Longer made-up description
			image: Rwa, // Reuse existing image or import a new one
			filename: '/resume.md' // Added for full fetch in MarkdownViewer
		},
		{
			title: 'building tooling vs feature development', // Adjust title as needed
			description: '', // Longer made-up description
			image: Rwa, // Reuse existing image or import a new one
			filename: '/resume.md' // Added for full fetch in MarkdownViewer
		},
		{
			title: 'about me', // Adjust title as needed
			description: '', // Longer made-up description
			image: Rwa, // Reuse existing image or import a new one
			filename: '/resume.md' // Added for full fetch in MarkdownViewer
		},
		{
			title: 'idea prototyping "just start writing to capture ideas', // Adjust title as needed
			description:
				'A detailed professional resume for Tyler Fischer, showcasing years of experience in software development, key projects, technical skills, and career achievements across various industries including fintech and blockchain.', // Longer made-up description
			image: Rwa, // Reuse existing image or import a new one
			filename: '/resume.md' // Added for full fetch in MarkdownViewer
		},
		{
			title: 'Blockchain experiences in development, trading, and crisis', // Adjust title as needed
			description: '', // Longer made-up description
			image: WhaleComputer, // Reuse existing image or import a new one
			filename: '/ai.md' // Added for full fetch in MarkdownViewer
		},
		{
			title: 'AI and Prompting Approach for Development', // Adjust title as needed
			description:
				'Thoughts on a generalized approach to leveraging AI efficiently and securely across any environment, emphasizing controlled access, precise prompting, output verification, and future safeguards to mitigate risks like hallucinations, biases, and privacy breaches while maximizing productivity.', // Longer made-up description
			image: WhaleComputer, // Reuse existing image or import a new one
			filename: '/ai.md' // Added for full fetch in MarkdownViewer
		}
		// Add more articles here if needed, importing additional .md files with ?raw
	];
	return json(articles);
}
