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

<a
	href="https://github.com/Code-Milker"
	class=" static rounded-lg bg-tertiary opacity-100 max-w-[36px] max-h-[36px] flex justify-center items-center"
>
	<img
		class="max-w-[36px] max-h-[36px] min-w-[36px] min-h-[36px]"
		src={github}
		alt="github"
	/>
</a>
<a
	href="https://www.linkedin.com/in/tyler-fischer-4a5309141/"
	class=" rounded-lg bg-tertiary opacity-100 max-w-[36px] max-h-[36px] min-w-[36px] min-h-[36px] flex justify-center items-center"
>
	<img
		class="max-w-[30px] max-h-[30px] min-w-[30px] min-h-[30px]"
		src={linkedin}
		alt="linkedin"
	/>
</a>
<button
	type="button"
	on:click={triggerPdfDownload}
	class="rounded-lg bg-tertiary opacity-100 max-w-[36px] max-h-[36px] min-w-[36px] min-h-[36px] flex justify-center items-center"
>
	<img
		class="max-w-[30px] max-h-[30px] min-w-[30px] min-h-[30px]"
		src={downloadResume}
		alt="download"
	/>
</button>
