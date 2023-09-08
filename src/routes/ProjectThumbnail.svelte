<script lang="ts">
	import type { ProjectThumbnailType } from '$lib/types.ts';
	export let project: ProjectThumbnailType;
	import '../app.css';
</script>

<div
	class="bg-primary rounded-md flex justify-center flex-col min-w-[100%] max-h-[300px] hover:cursor-pointer p-4 pb-0 pt-8 caret-transparent hover:bg-secondary"
>
	<img
		src={project.image}
		alt="unable to load project"
		class="rounded-md max-h-[225px] min-h-[225px] min-w-[225px] max-w-[200px] mx-auto"
	/>

	<div class="text-center py-2">{project.title}</div>
</div>

<style></style>
