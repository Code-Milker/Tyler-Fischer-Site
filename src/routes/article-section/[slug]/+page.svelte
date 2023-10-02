<script lang="ts">
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import Container from '$lib/components/Container.svelte';
	import moomoo from '$lib/images/moomoo.jpeg';
	const pageURL = $page.url;
	const border = 'border-b border-[#999] pb-2';
</script>

<div class="bg-secondary flex flex-row justify-center">
	<div class="bg-secondary p-6">
		<div class="bg-primary text-white px-40 pt-12">
			<div class={`flex ${border}`}>
				<h1 class="text-3xl font-bold pt-6 px-10">
					{pageURL.searchParams.get('title')}
				</h1>

				<div class="flex flex-col text-[#555] text-xs font-extralight pt-6 ml-auto px-10">
					<div>Tyler Fischer</div>
					<div>{new Date().toISOString().split('T')[0]}</div>
				</div>
			</div>

			<div class="flex justify-center">
				<img src={moomoo} class="pt-16 px-10 rounded-lg" alt="moo" />
			</div>
		</div>

		<Container
			title=""
			titlePosition="center"
			firstContainer={true}
			color="text-white"
			bg="bg-primary"
			content={undefined}
		>
			<div class={`mx-40 px-10 py-12 ${border}`}>
				<SvelteMarkdown source={pageURL.searchParams.get('description')} />
			</div>
		</Container>
		<div class="bg-primary text-white p-12 px-40">
			If you liked what you read you can follow me on:
		</div>
	</div>
</div>

<style>
	p {
		margin-top: 40px;
		margin-bottom: 10px;
	}
</style>
