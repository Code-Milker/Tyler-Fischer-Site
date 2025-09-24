<script lang="ts">
	import { selectedTab } from '$lib/stores/selectedTab';

	export let device: 'mobile' | 'desktop' = 'mobile';

	let fontSize = device === 'desktop' ? 'text-2xl' : 'text-xl';
	let baseClass = `font-bold text-tertiary ${fontSize}`;
	let selectedClass = `font-bold    ${fontSize}`;
</script>

<nav class="flex justify-start gap-8 mt-0 mb-0 text-text">
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
</nav>
