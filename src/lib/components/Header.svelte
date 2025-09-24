<script lang="ts">
	import type { LinksType } from '$lib/types';

	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.svg';
	export let device: 'mobile' | 'desktop' = 'mobile';
</script>

<div class="text-text flex flex-col justify-around">
	<div class="flex justify-around p-3">
		{#each [{ href: 'https://github.com/Milk-Maven', src: github, alt: 'github' }, { href: 'https://www.linkedin.com/in/tyler-fischer-4a5309141/', src: linkedin, alt: 'linkedin' }] as link}
			<a href={link.href}>
				<img
					class="max-w-[60px] min-h-[60px] bg "
					src={link.src}
					alt={link.alt}
				/>
			</a>
		{/each}
	</div>
</div>
