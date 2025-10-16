<!-- src/routes/me-section/MeSection.svelte -->
<script lang="ts">
	import type { LinksType } from '$lib/types';
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.svg';
	import me from '$lib/images/me.jpeg';
	import IconBanner from '$lib/components/IconBanner.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

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

<SectionHeader
	title="Hey, I'm Ty"
	description={myInfo.description}
	image={myInfo.me}
	alt="me"
>
	<IconBanner slot="actions" />
</SectionHeader>
