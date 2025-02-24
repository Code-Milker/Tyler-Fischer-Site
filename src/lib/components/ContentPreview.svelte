<script lang="ts">
	import ProjectThumbnail from '$lib/components/ProjectThumbnail.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	export let img: string;
	export let description: string;
	export let title: string;
	export let url: string;
	export let bg: string;
	export let color: string;
	export let device: 'mobile' | 'desktop' = 'desktop';
	const queryParams = new URLSearchParams();
	queryParams.set('title', title);
	queryParams.set('description', description);
</script>

{#if device === 'desktop'}
	<div class="{bg} flex flex-row mx-6 md:rounded-lg xs:rounded-none {color}">
		<div class="md:p-6 flex justify-center">
			<img
				src={img}
				alt="lseg"
				class="min-w-[225px] max-w-[225px] min-h-[225px] max-h-[225px] rounded-lg"
			/>
		</div>
		<div class="px-8 py-10">
			<div>
				<span class="overflow-hidden line-clamp-[8]">
					<SvelteMarkdown source={description} />
				</span>
			</div>
		</div>
	</div>
{:else}
	<ProjectThumbnail project={{ title: title, description: description, url: url, image: img }} />
{/if}
