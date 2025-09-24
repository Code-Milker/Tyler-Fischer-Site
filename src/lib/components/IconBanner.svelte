<script lang="ts">
	import type { LinksType } from '$lib/types';

	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.svg';
	export let device: 'mobile' | 'desktop' = 'mobile';
</script>

<div class="text-text flex justify-start rounded-lg">
	<div class="flex justify-between">
		{#each [{ href: 'https://github.com/Milk-Maven', src: github, alt: 'github' }, { href: 'https://www.linkedin.com/in/tyler-fischer-4a5309141/', src: linkedin, alt: 'linkedin' }] as link}
			<a href={link.href} class="mt-3 mr-5 rounded-lg p-1 bg-tertiary">
				<img class="max-w-[40px] min-h-[40px]" src={link.src} alt={link.alt} />
			</a>
		{/each}
	</div>
</div>
