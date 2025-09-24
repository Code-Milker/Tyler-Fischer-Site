<script lang="ts">
	import ProjectThumbnail from '$lib/components/ProjectThumbnail.svelte';
	import type { ContentPreviewType } from '$lib/types.ts';
	import { onMount } from 'svelte';

	export let device: 'mobile' | 'desktop' = 'mobile';
	let projects: ContentPreviewType[] = [];
	onMount(() => {
		getProjects();
	});

	async function getProjects() {
		const response = await fetch('project-section');
		projects = await response.json();
	}
</script>

<div class="grid md:grid-cols-3 xs:grid-cols-0 md:gap-5 xs:gap-0 mb-0">
	{#each projects as project, i}
		{#if i !== 0}<div class="min-h-[40px] bg-secondary md:hidden xs:visible" />
		{/if}
		<ProjectThumbnail {project} />
	{/each}
</div>

<style></style>
