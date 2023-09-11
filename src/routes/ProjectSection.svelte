<script lang="ts" context="module">
	import SurfPunk from '$lib/images/surfpunk.avif';
	import Ture from '$lib/images/ture.png';
	import DesoLogo from '$lib/images/DesoLogo.jpeg';
	import Bip39 from '$lib/images/bip-39.png';
	import MooMoo from '$lib/images/moomoo.jpeg';
	import '../app.css';
	import ProjectThumbnail from './ProjectThumbnail.svelte';
	import type { ProjectThumbnailType } from '$lib/types.ts';

	const projects: ProjectThumbnailType[] = [
		{
			title: 'BIP 39',
			description: 'some description',
			url: 'https://github.com/Milk-Maven/bip-39',
			image: Bip39
		},
		{
			title: 'Deso Protocol',
			description:
				'Client side typescript/javascript SDK for building web3 applications for the DeSo blockchain.',

			url: 'https://www.npmjs.com/package/deso-protocol',
			image: DesoLogo
		},
		{
			title: 'Ture',
			description:
				"TURE Wisconsin is best way to find things to do in Wisconsin. It's like E-Harmony or Tinder for entertainment and activities. Quickly sift through coffee shops, restaurants, entertainment, parks, trails, and more one at a time and learn about your community or the area you are traveling to. Save things for later in your itinerary and utilize coupons and other perks. Have you purchased one of Venture Wisconsin's products like the Coffee Shop Passport or the Wisconsin Old Fashioned Passport? You can also use this app to explore more places with a deal when you use your code to load the new establishments that we add throughout the year.",
			url: 'https://opensea.io/collection/surf-punks-nft',
			image: Ture
		},
		{
			title: 'Surf Punks',
			description: 'some description',
			url: 'https://opensea.io/collection/surf-punks-nft',
			image: SurfPunk
		},
		{
			title: 'MooMoo.js',
			description:
				'MooMoo.js offers an alternative way to build web apps with a strong focus on separation of concerns, keeping things simple, and staying vanilla ',
			url: 'https://github.com/Milk-Maven/moomoo.js',
			image: MooMoo
		},
		{
			title: 'MooMoo.js',
			description:
				'MooMoo.js offers an alternative way to build web apps with a strong focus on separation of concerns, keeping things simple, and staying vanilla ',
			url: 'https://github.com/Milk-Maven/moomoo.js',
			image: MooMoo
		}
	];
</script>

<div class="bg-secondary text-white w-full">
	<h1 class="text-2xl text-center pt-4">Projects</h1>
	<div class="grid md:grid-cols-3 sm:grid-cols-1 gap-5 pt-4 px-6 mb-0">
		{#each projects as project}
			<ProjectThumbnail {project} />
		{/each}
	</div>
</div>

<style></style>
