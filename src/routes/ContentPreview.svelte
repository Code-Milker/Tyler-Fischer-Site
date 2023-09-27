<script lang="ts">
	export let img: string;
	export let description: string;
	export let title: string;
	export let link: string;
	export let bg: string;
</script>

<div class="sm:flex {bg} flex-row mx-6 rounded-lg">
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
