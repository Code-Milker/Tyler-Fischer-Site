<script lang="ts">
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.svg';
	import downloadResume from '$lib/images/download-paper-icon.png';
	import { triggerDownload } from '$lib/stores/DownloadStore'; // Import the store

	function triggerPdfDownload(event: MouseEvent) {
		event.preventDefault();
		triggerDownload.set({ type: 'pdf' }); // Trigger the store
	}
</script>

<div class="flex flex-row justify-start">
	<a
		href="https://github.com/Code-Milker"
		class="relative rounded-lg p-1 bg-tertiary opacity-100 max-w-[36px] max-h-[36px] group"
	>
		<img class="max-w-[30px] max-h-[30px]" src={github} alt="github" />
		<span
			class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
		>
			GitHub Profile
		</span>
	</a>
	<div class="mr-8" />
	<a
		href="https://www.linkedin.com/in/tyler-fischer-4a5309141/"
		class="relative rounded-lg p-1 bg-tertiary opacity-100 max-w-[36px] max-h-[36px] group"
	>
		<img class="max-w-[30px] max-h-[30px]" src={linkedin} alt="linkedin" />
		<span
			class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
		>
			LinkedIn Profile
		</span>
	</a>
	<div class="mr-8" />
	<button
		type="button"
		on:click={triggerPdfDownload}
		class="relative rounded-lg p-1 bg-tertiary opacity-100 max-w-[36px] max-h-[36px] group"
	>
		<img
			class="max-w-[30px] max-h-[30px]"
			src={downloadResume}
			alt="download"
		/>
		<span
			class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
		>
			Download Resume as PDF
		</span>
	</button>
	<div class="mr-8" />
</div>
