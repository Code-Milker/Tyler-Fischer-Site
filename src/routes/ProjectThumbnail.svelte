<script lang="ts">
	import type { ContentPreviewType } from '$lib/types.ts';
	export let project: ContentPreviewType;
	import '../app.css';
</script>

<div>
	<div
		class="mx-auto bg-primary rounded-md flex justify-center flex-col max-w-[500px] max-h-[600px] hover:cursor-pointer pb-0 pt-8 caret-transparent hover:bg-teritary"
	>
		<img
			src={project.image}
			alt="unable to load project"
			class="min-w-[225px] max-w-[225px] min-h-[225px] max-h-[225px] mx-auto rounded-lg"
		/>

		<div class="min-w-[70%] max-w-[70%] mx-auto pb-8">
			<div class="text-left py-2">{project.title}</div>
			<div class="text-left py-2 line-clamp-4 min-h-[150px]">
				{project.description}
			</div>
			<a href={project.url} class="text-left py-2 underline hover:text-secondaryComplement"
				>Read More</a
			>
		</div>
	</div>
</div>

<style></style>
