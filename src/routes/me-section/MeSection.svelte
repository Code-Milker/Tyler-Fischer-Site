<script lang="ts">
	import type { LinksType } from '$lib/types';
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.svg';
	export let device: 'mobile' | 'desktop' = 'mobile';
	import me from '$lib/images/me.jpeg';
	let myInfo: { description: string; me: string; links: LinksType[] } = {
		description: `Welcome, I'm your dedicated software contractor, specializing in web, blockchain, and mobile
				development. My mission is to bring your software ideas to life with expertise and precision.
				You can reach me at tylerf66@gmail.com`,
		me: me,
		links: [
			{ href: 'https://github.com/Milk-Maven', src: github, alt: 'github' },
			{
				href: 'https://www.linkedin.com/in/tyler-fischer-4a5309141/',
				src: linkedin,
				alt: 'linkedin'
			}
		]
	};
</script>

<!--desktop-->
{#if device === 'desktop'}
	<div
		style="desktop"
		class="rounded-t-lg bg-primary flex justify-start flex-col invisible md:visible"
	>
		<div class="bg-secondary">
			<div class="bg-primary rounded-t-lg p-3 grid grid-cols-3">
				<div class="col-span-1 flex items-center justify-center">
					<img
						src={myInfo.me}
						class="max-h-[200px] max-w-[200px] rounded-full"
						alt="failed to load me"
					/>
				</div>
				<div
					class="col-span-2 flex flex-col justify-center gap-2 text-text text-justify"
				>
					<h1 class="text-3xl text-quaternary font-bold">Hey, I'm Ty</h1>
					<p class="text-start">{myInfo.description}</p>
				</div>
				<div class="col-span-1 flex justify-center items-center mt-4" />
				<div class="col-span-2 flex justify-start items-center mt-4" />
			</div>
		</div>
	</div>
{:else}
	<div style="mobile">
		<div class="bg-primary p-6">
			<div class="bg-primary flex flex-col pb-0">
				<img
					src={myInfo.me}
					class="max-w-[200px] max-h-[200px] rounded-full m-auto bg-secondary"
					alt="failed to load me"
				/>
				<h1 class="text-2xl text-quaternary">Hey, I'm Ty</h1>
				<p class="mt-2 text-start">{myInfo.description}</p>
				<div class="flex flex-col items-center mt-4 gap-4" />
			</div>
		</div>
	</div>
{/if}
