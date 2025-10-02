<script lang="ts">
	import type { LinksType } from '$lib/types';
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.svg';
	import me from '$lib/images/me.jpeg';
	import IconBanner from '$lib/components/IconBanner.svelte';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';

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

<DeviceContainer>
	<div slot="desktop">
		<div class="flex flex-row">
			<img
				src={myInfo.me}
				class="size-[200px] rounded-full"
				alt="failed to load me"
			/>
			<div class="pl-8 flex flex-col justify-between min-h-[200px]">
				<h1 class="text-3xl text-tertiary font-bold">Hey, I'm Ty</h1>
				<p class="text-start">{myInfo.description}</p>
				<div class="max-w-[200px] flex flex-row justify-between">
					<IconBanner />
				</div>
			</div>
		</div>
	</div>
	<div slot="mobile">
		<div class="flex flex-col">
			<div class="flex flex-row justify-around">
				<img
					src={myInfo.me}
					class="aspect-square size-[130px] rounded-full bg-secondary my-auto"
					alt="failed to load me"
				/>
				<div class=" flex flex-col justify-evenly">
					<h1 class="text-3xl font-bold text-center w-full text-tertiary mb-2">
						Hey, I'm Ty
					</h1>
					<div class="flex justify-between w-full mt-2">
						<IconBanner />
					</div>
				</div>
			</div>
			<p class="text-start pt-2">{myInfo.description}</p>
		</div>
	</div>
</DeviceContainer>
