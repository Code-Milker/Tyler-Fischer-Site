<!-- src/routes/me-section/MeSection.svelte -->
<script lang="ts">
	import type { IconProps } from '$lib/types';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { triggerDownload } from '$lib/stores/DownloadStore';
	import github from '$lib/images/github.png';
	import me from '$lib/images/me.jpeg';
	import downloadResume from '$lib/images/download-paper-icon.png';
	import linkedin from '$lib/images/linkedin.svg';
	let myInfo: { description: string; me: string } = {
		description: `Welcome, I'm your dedicated software contractor, specializing in web, blockchain, and mobile
development. My mission is to bring your software ideas to life with expertise and precision.
You can reach me at tylerf66@gmail.com`,
		me: me
	};
	let icons: IconProps[] = [
		{
			href: 'https://github.com/Milk-Maven',
			src: github,
			alt: 'github',
			tooltip: 'View my GitHub profile'
		},
		{
			href: 'https://www.linkedin.com/in/tyler-fischer-4a5309141/',
			src: linkedin,
			alt: 'linkedin',
			tooltip: 'Connect with me on LinkedIn'
		},
		{
			onClick: () => triggerDownload.set({ type: 'pdf' }),
			src: downloadResume,
			alt: 'download',
			tooltip: 'Download my resume'
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
