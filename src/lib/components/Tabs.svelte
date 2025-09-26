<script lang="ts">
	import { selectedTab } from '$lib/stores/selectedTab';

	export let device: 'mobile' | 'desktop' = 'mobile';

	let fontSize = device === 'desktop' ? 'text-3xl' : 'text-xl';
	let baseClass = `font-bold text-tertiary underline ${fontSize}`;
	let selectedClass = `font-bold underline text-quaternary ${fontSize}`;
</script>

<nav class="flex justify-around my-0 text-text w-full">
	<button
		on:click={() => ($selectedTab = 'resume')}
		class={$selectedTab === 'resume' ? selectedClass : baseClass}
	>
		Resume
	</button>
	<button
		on:click={() => ($selectedTab = 'projects')}
		class={$selectedTab === 'projects' ? selectedClass : baseClass}
	>
		Projects
	</button>
	<button
		on:click={() => ($selectedTab = 'work')}
		class={$selectedTab === 'work' ? selectedClass : baseClass}
	>
		Work
	</button>

	<button
		on:click={() => ($selectedTab = 'articles')}
		class={$selectedTab === 'articles' ? selectedClass : baseClass}
	>
		Articles
	</button>
</nav>
