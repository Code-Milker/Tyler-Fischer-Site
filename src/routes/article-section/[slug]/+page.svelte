<script lang="ts">
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import moomoo from '$lib/images/moomoo.jpeg';
	const pageURL = $page.url;
	const border = 'border-b border-[#999] pb-2';
</script>

<div class="bg-secondary flex flex-row justify-center">
	<div class="bg-secondary p-6">
		<div class="bg-primary text-text px-40 max-w-[1200px] py-12">
			<div class={`flex ${border}`}>
				<h1 class="text-3xl font-bold pt-6 px-10">
					{pageURL.searchParams.get('title')}
				</h1>

				<div class="flex flex-col text-[#555] text-xs font-extralight pt-6 ml-auto px-10">
					<div>Tyler Fischer</div>
					<!-- <div>{new Date().toISOString().split('T')[0]}</div> -->
				</div>
			</div>

			<div class="flex justify-center">
				<img src={moomoo} class="py-12 px-10 rounded-lg" alt="moo" />
			</div>

			<SvelteMarkdown source={pageURL.searchParams.get('description')} />
			<div class={``}>If you liked what you read you can follow me on:</div>
		</div>
	</div>
</div>
