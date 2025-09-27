<script lang="ts">
	import { onMount } from 'svelte';

	export let device: 'mobile' | 'desktop' = 'mobile';
	let fontSize = device === 'desktop' ? 'text-3xl' : 'text-xl';
	let baseClass = `font-bold text-tertiary underline ${fontSize}`;
	let selectedClass = `font-bold underline text-quaternary ${fontSize}`;

	let currentTab = '';

	onMount(() => {
		currentTab = window.location.hash.slice(1) || 'resume';
		window.addEventListener('hashchange', () => {
			currentTab = window.location.hash.slice(1);
		});
	});
</script>

<nav class="flex justify-around my-0 text-text w-full">
	<a href="#resume" class={currentTab === 'resume' ? selectedClass : baseClass}>
		Resume
	</a>
	<a
		href="#projects"
		class={currentTab === 'projects' ? selectedClass : baseClass}
	>
		Projects
	</a>
	<a href="#work" class={currentTab === 'work' ? selectedClass : baseClass}>
		Work
	</a>
	<a
		href="#articles"
		class={currentTab === 'articles' ? selectedClass : baseClass}
	>
		Articles
	</a>
</nav>
