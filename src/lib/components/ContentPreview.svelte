<script lang="ts">
	import ProjectThumbnail from '$lib/components/ProjectThumbnail.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	export let img: string;
	export let description: string;
	export let title: string;
	export let url: string;
	export let bg: string;
</script>

<DeviceContainer>
	<div slot="desktop" class="{bg} flex flex-row mx-6 md:rounded-lg xs:rounded-none">
		<div class="md:p-6 flex justify-center">
			<img
				src={img}
				alt="lseg"
				class="min-w-[225px] max-w-[225px] min-h-[225px] max-h-[225px] rounded-lg"
			/>
		</div>
		<div
			class="rounded-r-lg flex flex-col justify-around sm:max-w-[500px] md:max-w-full min-h-[225px] md:max-h-[225px] w-full"
		>
			<div><span>Title: {title}</span></div>
			<div><span class="">Description: {description}</span></div>
		</div>
	</div>
	<div slot="mobile">
		<ProjectThumbnail project={{ title: title, description: description, url: url, image: img }} />
	</div>
</DeviceContainer>
