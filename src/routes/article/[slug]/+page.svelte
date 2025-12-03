<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Content from '$lib/components/Content.svelte';
	import backArrow from '$lib/images/back-arrow.png';
	import Icon from '$lib/components/Icon.svelte';
	import type { IconProps } from '$lib/types';

	export let data: PageData;
	let { article } = data;

	let processedIcons: IconProps[] = article.icons.map(
		(icon: IconProps & { type?: 'back' }) => {
			if (icon.type === 'back') {
				const { type, ...rest } = icon;
				return { ...rest, onClick: handleBack };
			}
			return icon;
		}
	);

	function handleBack() {
		if (history.length > 1) {
			history.back();
		} else {
			goto('/');
		}
	}
</script>

<SectionHeader
	title={article.title}
	description={article.description}
	image={article.image}
	alt={article.title}
	icons={processedIcons}
/>

<Content selectedArticle={article} />

<div class="p-4 bg-primary flex justify-start border-t-2 border-t-secondary">
	<Icon src={backArrow} alt="Back" tooltip="Back" onClick={handleBack} />
</div>
