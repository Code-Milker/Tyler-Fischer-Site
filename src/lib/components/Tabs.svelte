<script lang="ts">
	import { selectedTab } from '$lib/stores/selectedTab';

	export let device: 'mobile' | 'desktop' = 'mobile';
</script>

<nav class="flex justify-around gap-6 mt-4 mb-0 text-text bg-primary p-6 pb-0 rounded-lg">
	<button
		on:click={() => ($selectedTab = 'resume')}
		class={$selectedTab === 'resume'
			? 'bg-secondary text-text px-4 py-2 rounded-t ' +
			  (device === 'desktop' ? 'text-2xl' : 'text-xl')
			: device === 'desktop'
			? 'text-2xl'
			: 'text-xl'}
	>
		Resume
	</button>
	<button
		on:click={() => ($selectedTab = 'projects')}
		class={$selectedTab === 'projects'
			? 'bg-secondary text-text px-4 py-2 rounded-t ' +
			  (device === 'desktop' ? 'text-2xl' : 'text-xl')
			: device === 'desktop'
			? 'text-2xl'
			: 'text-xl'}
	>
		Projects
	</button>
	<button
		on:click={() => ($selectedTab = 'work')}
		class={$selectedTab === 'work'
			? 'bg-secondary text-text px-4 py-2 rounded-t ' +
			  (device === 'desktop' ? 'text-2xl' : 'text-xl')
			: device === 'desktop'
			? 'text-2xl'
			: 'text-xl'}
	>
		Work
	</button>
</nav>
