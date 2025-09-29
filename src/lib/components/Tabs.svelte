<script lang="ts">
	import { onMount } from 'svelte';
	export let device: 'mobile' | 'desktop' = 'mobile';
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';
	let fontSize = 'text-xl';
	let baseClass = `text-tertiary font-semibold  ${fontSize}`;
	let selectedClass = `font-semibold text-tertiary underline ${fontSize}`;
	let currentTab = '';
	onMount(() => {
		currentTab = window.location.hash.slice(1) || 'resume';
		window.addEventListener('hashchange', () => {
			currentTab = window.location.hash.slice(1);
		});
	});
</script>

<nav
	class={`flex text-center mt-4     ${
		orientation === 'vertical'
			? 'flex-col space-y-8 mt-8 '
			: 'justify-around space-x-4 pb-2  '
	}  text-text w-full`}
>
	<a href="#resume" class={currentTab === 'resume' ? selectedClass : baseClass}>
		Resume
	</a>
	<!-- <a -->
	<!-- 	href="#projects" -->
	<!-- 	class={currentTab === 'projects' ? selectedClass : baseClass} -->
	<!-- > -->
	<!-- 	Projects -->
	<!-- </a> -->
	<a
		href="#articles"
		class={currentTab === 'articles' ? selectedClass : baseClass}
	>
		Articles
	</a>
	<!-- <a href="#work" class={currentTab === 'work' ? selectedClass : baseClass}> -->
	<!-- 	Work -->
	<!-- </a> -->
</nav>
