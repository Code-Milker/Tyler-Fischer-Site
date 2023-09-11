<script lang="ts">
	import '../app.css';
	import ProjectThumbnail from './ProjectThumbnail.svelte';

	import Lseg from '$lib/images/lseg.jpeg';
	const jobs: { description: string }[] = [
		{
			description: `I was a seasoned software developer at Refinitiv, recognized for my contributions to modernizing financial applications by developing and maintaining reusable UI components. My expertise included Typescript, HTML5, CSS/SASS, JavaScript (Angular, Graphql, Jasmine), .Net Core, Postman, and Git (GitLab).

I also led critical process improvements, including design, software release, and team estimation. I championed agile methodologies to align with Product Owners and Business Analysts, ensuring the successful delivery of high-quality products that met evolving business needs.`
		}
	];
</script>

<div class="bg-secondary text-white py-6">
	<h1 class=" text-center text-2xl mt-1">Work</h1>
	{#each jobs as job}
		<div class="flex jusify-start bg-secondary rounded-lg p-6">
			<img
				src={Lseg}
				alt="lseg"
				class="min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-l-lg my-auto"
			/>
			<div class="bg-primary rounded-r-lg p-4 flex flex-col justify-around">
				<div><span>Title: Lead Engineer</span></div>
				<div><span>Description: {job.description}</span></div>

				<!-- <div class="flex justify-center"> -->
				<!-- 	<span class=" rounded-b px-1 text-center bg-secondary">techonology</span> -->
				<!-- </div> -->
				<!-- <div class="bg-primary rounded-full h-[100px] flex flex-col justify-between"> -->
				<!-- <div class="flex justify-start"> -->
				<!-- 	<div class="flex justify-around w-full pl-4 my-auto w-full flex justify-start"> -->
				<!-- 		<div>react.png</div> -->
				<!-- 		<div>angularpng</div> -->
				<!-- 		<div>etc</div> -->
				<!-- 	</div> -->
				<!-- </div> -->
				<!-- </div> -->
			</div>
		</div>
	{/each}
</div>
