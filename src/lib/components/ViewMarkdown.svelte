<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import DeviceContainer from './DeviceContainer.svelte';
	import { triggerDownload } from '$lib/stores/DownloadStore';
	import { onMount, onDestroy, tick } from 'svelte';
	import jsPDF from 'jspdf';
	import html2canvas from 'html2canvas';
	import type { Unsubscriber } from 'svelte/store';

	export let source = '';

	let contentElement: HTMLElement | null = null; // Ref for capture (not used for PDF now)
	let unsubscribe: Unsubscriber; // For store subscription

	onMount(() => {
		unsubscribe = triggerDownload.subscribe(async (trigger) => {
			if (trigger && trigger.type === 'pdf' && source) {
				let offscreenDiv: HTMLDivElement | null = null;
				let mdComponent: any | null = null; // Typed as any for $destroy
				try {
					// Create off-screen div
					offscreenDiv = document.createElement('div');
					offscreenDiv.style.position = 'absolute';
					offscreenDiv.style.left = '-9999px';
					offscreenDiv.style.top = '0';
					offscreenDiv.style.width = '210mm'; // Match A4 width for accurate capture
					offscreenDiv.classList.add(
						'px-8',
						'bg-primary',
						'prose',
						'prose-invert'
					);
					// Override last-child margin to reduce bottom space
					const style = document.createElement('style');
					style.textContent = '.prose :last-child { margin-bottom: 0; }';
					offscreenDiv.appendChild(style);
					document.body.appendChild(offscreenDiv);

					// Render SvelteMarkdown component into it
					mdComponent = new SvelteMarkdown({
						target: offscreenDiv,
						props: { source }
					});

					await tick(); // Ensure the component has rendered

					// Force height to exact content height to trim extra space
					offscreenDiv.style.height = `${offscreenDiv.scrollHeight}px`;

					const canvas = await html2canvas(offscreenDiv, {
						scale: 2, // Higher scale for better quality
						useCORS: true, // If there are external images
						logging: false,
						height: offscreenDiv.scrollHeight // Explicitly set capture height
					});

					// Get background color from the offscreen div to match in PDF
					const bgColor = window.getComputedStyle(offscreenDiv).backgroundColor;
					const rgb = bgColor.match(/\d+/g)?.slice(0, 3).map(Number) || [
						255, 255, 255
					]; // Default white if fail

					const imgData = canvas.toDataURL('image/png');
					const imgWidth = 210; // A4 width in mm
					let imgHeight = (canvas.height * imgWidth) / canvas.width;
					const pageHeight = 297; // A4 height in mm

					let pdf;
					if (imgHeight <= pageHeight) {
						// Custom height for single page to avoid white space
						pdf = new jsPDF('p', 'mm', [imgWidth, imgHeight]);
						pdf.setFillColor(rgb[0], rgb[1], rgb[2]);
						pdf.rect(0, 0, imgWidth, imgHeight, 'F');
						pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
					} else {
						// Multi-page with background fill on each page
						pdf = new jsPDF('p', 'mm', 'a4');
						let position = 0;
						let heightLeft = imgHeight;

						// First page
						pdf.setFillColor(rgb[0], rgb[1], rgb[2]);
						pdf.rect(0, 0, imgWidth, pageHeight, 'F');
						pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
						heightLeft -= pageHeight;

						while (heightLeft > 0) {
							pdf.addPage();
							position -= pageHeight;
							pdf.setFillColor(rgb[0], rgb[1], rgb[2]);
							pdf.rect(0, 0, imgWidth, pageHeight, 'F');
							pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
							heightLeft -= pageHeight;
						}
					}

					// Download the PDF
					pdf.save('Tyler-Fischer-Resume.pdf');
				} catch (error) {
					console.error('PDF download failed:', error);
					alert('Failed to generate PDF. Please try again.');
				} finally {
					// Clean up
					if (mdComponent) {
						mdComponent.$destroy();
					}
					if (offscreenDiv) {
						offscreenDiv.remove();
					}
					// Reset the trigger to prevent re-runs
					triggerDownload.set(null);
				}
			}
		});
	});

	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
</script>

<DeviceContainer>
	<div slot="desktop">
		<div class="prose prose-invert" bind:this={contentElement}>
			<SvelteMarkdown {source} />
		</div>
	</div>
	<div slot="mobile" class="prose prose-invert">
		<SvelteMarkdown {source} />
	</div>
</DeviceContainer>
