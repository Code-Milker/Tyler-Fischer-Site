<script lang="ts">
	import { onMount } from 'svelte';
	export let device: 'mobile' | 'desktop' = 'mobile';
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';
	let fontSize = device === 'desktop' ? 'text-2xl' : 'text-lg';
	let baseClass = `text-tertiary underline ${fontSize}`;
	let selectedClass = ` underline text-quaternary ${fontSize}`;
	let currentTab = '';
	onMount(() => {
		currentTab = window.location.hash.slice(1) || 'resume';
		window.addEventListener('hashchange', () => {
			currentTab = window.location.hash.slice(1);
		});
	});
</script>

<nav
	class={`flex text-start pt-1    ${
		orientation === 'vertical'
			? 'flex-col space-y-8 '
			: 'justify-around space-x-4  '
	} my-4 text-text w-full`}
>
	<a href="#resume" class={currentTab === 'resume' ? selectedClass : baseClass}>
		Resume
	</a>
	<a
		href="#projects"
		class={currentTab === 'projects' ? selectedClass : baseClass}
	>
		Projects
	</a>
	<a
		href="#articles"
		class={currentTab === 'articles' ? selectedClass : baseClass}
	>
		Articles
	</a>
	<a href="#work" class={currentTab === 'work' ? selectedClass : baseClass}>
		Work
	</a>
</nav>
