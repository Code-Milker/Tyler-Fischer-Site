<!-- src/routes/me-section/MeSection.svelte -->
<script lang="ts">
	import type { IconProps } from '$lib/types';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import github from '$lib/images/github.png';
	import me from '$lib/images/me.jpeg';
	import downloadResume from '$lib/images/download-paper-icon.png';
	import resumePdf from '$lib/images/resume.pdf';
	import linkedin from '$lib/images/linkedin.svg';
	import coverLetterMd from '$lib/content/coverLetter.md?raw';
	let myInfo: { description: string; me: string } = {
		description: coverLetterMd,
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
			onClick: () => {
				const link = document.createElement('a');
				link.href = resumePdf;
				link.download = 'tyler-fischer-resume.pdf';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			},
			src: downloadResume,
			alt: 'download',
			tooltip: 'Download Resume'
		}
	];
</script>

<SectionHeader
	title="Hey, I'm Ty"
	description={myInfo.description}
	image={undefined}
	alt="me"
	{icons}
/>
