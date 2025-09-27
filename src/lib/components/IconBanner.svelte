<script lang="ts">
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.svg';
	import downloadResume from '$lib/images/download-paper-icon.png';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import jsPDF from 'jspdf';
	import html2canvas from 'html2canvas';
	const resumeFilename = 'resume.md'; // Assuming this is the file name; adjust if needed
	let markdownContent = '';
	let contentElement: HTMLElement | null = null; // Explicitly typed to fix implicit 'any'
	export let vertical: boolean = false;
	onMount(async () => {
		try {
			const response = await fetch(`/${resumeFilename}`);
			if (response.ok) {
				markdownContent = await response.text();
			}
		} catch (error) {
			console.error(`Failed to load resume Markdown:`, error);
		}
	});
	async function downloadAsPDF(event: MouseEvent) {
		event.preventDefault(); // Prevent navigation if using <a>
		if (!contentElement || !markdownContent) {
			alert('Resume content not loaded yet. Please try again.');
			return;
		}
		// Capture the hidden rendered HTML as a canvas
		const canvas = await html2canvas(contentElement, {
			scale: 2, // Higher scale for better quality
			useCORS: true, // If there are external images
			logging: false
		});
		// Create PDF
		const pdf = new jsPDF('p', 'mm', 'a4');
		const imgData = canvas.toDataURL('image/png');
		const imgWidth = 210; // A4 width in mm
		const pageHeight = 297; // A4 height in mm
		const imgHeight = (canvas.height * imgWidth) / canvas.width;
		let heightLeft = imgHeight;
		let position = 0;
		pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
		heightLeft -= pageHeight;
		// Add extra pages if content is long
		while (heightLeft >= 0) {
			position = heightLeft - imgHeight;
			pdf.addPage();
			pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
			heightLeft -= pageHeight;
		}
		// Download the PDF
		pdf.save('resume.pdf');
	}
</script>

<!-- Off-screen renderer for the Markdown content (visible in DOM but not on page) -->
<div
	class="prose prose-invert pb-5 absolute -left-[99999px] bg-primary px-5"
	style="width: 210mm;"
	bind:this={contentElement}
>
	<SvelteMarkdown source={markdownContent} />
</div>
<div
	class={`flex ${
		vertical ? 'flex-col space-y-10 items-center' : 'justify-evenly'
	} w-full`}
>
	{#each [{ href: 'https://github.com/Milk-Maven', src: github, alt: 'github', tooltip: 'GitHub Profile' }, { href: 'https://www.linkedin.com/in/tyler-fischer-4a5309141/', src: linkedin, alt: 'linkedin', tooltip: 'LinkedIn Profile' }, { href: '#', src: downloadResume, alt: 'download', tooltip: 'Download Resume', onClick: downloadAsPDF }] as link}
		{#if link.onClick}
			<a
				href={link.href}
				on:click={link.onClick}
				class="relative rounded-lg p-1 bg-tertiary max-w-[50px] max-h-[50px] group"
			>
				<img class="max-w-[40px] max-h-[40px]" src={link.src} alt={link.alt} />
				<span
					class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
				>
					{link.tooltip}
				</span>
			</a>
		{:else}
			<a
				href={link.href}
				class="relative rounded-lg p-1 bg-tertiary max-w-[50px] max-h-[50px] group"
			>
				<img class="max-w-[40px] max-h-[40px]" src={link.src} alt={link.alt} />
				<span
					class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
				>
					{link.tooltip}
				</span>
			</a>
		{/if}
	{/each}
</div>
