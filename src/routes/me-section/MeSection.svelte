<!-- src/routes/me-section/MeSection.svelte -->
<script lang="ts">
	import type { IconProps } from '$lib/types';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { downloadResumePDF } from '$lib/utils/downloadResume';
	import github from '$lib/images/github.png';
	import me from '$lib/images/me.jpeg';
	import downloadResume from '$lib/images/download-paper-icon.png';
	import linkedin from '$lib/images/linkedin.svg';
	let myInfo: { description: string; me: string } = {
		description: `

Welcome to my portfolio. I'm a seasoned Senior Engineer and Developer Advocate with deep expertise in TypeScript, mastered through hands-on development since Angular 2 beta in 2016. Along the way, I've crafted innovative solutions across FinTech, blockchain, Web3, mobile development, and AI. My crypto and DeFi journey started with white paper research for trading, evolving into practical development that fueled my pivot from traditional roles to blockchain positions, self-led mobile contracts, and diverse one-off projects.

Today, I excel at tooling and systems design from the ground up, simplifying complex decentralized tech into secure, scalable solutions via libraries, SDKs, and smart contracts. Recently, I've built a full-stack mobile app with interactive mapping, geolocation, and payments (my latest non-blockchain work) and crypto tracing tools for fund recovery, inspired by surviving a personal malware attack. I'm seeking team roles in DeFi, blockchain-mobile, or fintech. 

This site was built from the ground up with svelte and tailwind, it showcases my professional journey and contributions. Below, you'll find my resume, along with featured projects, each with details, repos, and "Read More" links to dive deeper into my work in blockchain, AI prompting, and mobile development. Explore the cards to see code, articles, and live demos.`,
		me: me
	};
	let icons: IconProps[] = [
		{
			href: 'https://github.com/Code-Milker',
			src: github,
			alt: 'github',
			tooltip: 'GitHub'
		},
		{
			href: 'https://www.linkedin.com/in/tyler-fischer-4a5309141/',
			src: linkedin,
			alt: 'linkedin',
			tooltip: 'LinkedIn'
		},
		{
			onClick: downloadResumePDF,
			src: downloadResume,
			alt: 'download',
			tooltip: 'Download Resume'
		}
	];
</script>

<SectionHeader
	title="Hey, I'm Ty"
	description={myInfo.description}
	image={myInfo.me}
	alt="me"
	{icons}
/>
