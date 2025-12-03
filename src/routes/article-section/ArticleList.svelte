<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { articlesList } from '$lib/articles';
	import backArrow from '$lib/images/back-arrow.png';
</script>

<DeviceContainer>
	<div slot="desktop" class="bg-secondary pt-0">
		<div class="bg-primary">
			{#each { length: Math.ceil(articlesList.length / 2) } as _, chunkIndex}
				<div class="grid grid-cols-2">
					{#each articlesList.slice(chunkIndex * 2, chunkIndex * 2 + 2) as article, j}
						{@const i = chunkIndex * 2 + j}
						<div class="bg-primary text-text overflow-hidden">
							<div
								class={`flex flex-row transition-colors p-4 ${
									j === 0 ? 'border-r-2 border-r-secondary' : ''
								} ${
									chunkIndex < Math.ceil(articlesList.length / 2) - 1
										? 'border-b-2 border-b-secondary'
										: ''
								}`}
							>
								<div class="flex-shrink-0">
									<img
										src={article.image}
										alt={article.title}
										class="max-w-[200px] max-h-[200px] w-[200px] h-[200px]"
									/>
								</div>
								<div class="flex-1 flex flex-col pl-4 min-h-[200px]">
									<h2 class="text-2xl text-quaternary font-semibold pb-4">
										{article.title}
									</h2>
									<div
										class="text-text prose prose-invert overflow-hidden line-clamp-3 min-h-[5.5rem] max-h-[5.5rem]"
									>
										<SvelteMarkdown source={article.description} />
									</div>
									<div class="mt-auto pt-4">
										<Icon
											href={`/article/${article.slug}`}
											src={backArrow}
											alt="Read More"
											tooltip="Read More"
										/>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<div slot="mobile">
		<div>
			{#each articlesList as article, i}
				<div
					class="bg-primary text-text {i === articlesList.length - 1
						? 'rounded-b-lg'
						: ''} {i === 0 ? 'rounded-t-lg' : ''}"
				>
					<div class="flex flex-col p-4 transition-colors">
						<div class="flex-shrink-0 p-8 bg-secondary">
							<div class="bg-primary">
								<img
									src={article.image}
									alt={article.title}
									class="aspect-square w-full rounded-lg object-cover mx-auto"
								/>
							</div>
						</div>
						<h2 class="text-2xl text-quaternary font-semibold pt-4">
							{article.title}
						</h2>
						<div
							class="text-text prose prose-invert py-4 max-h-[18em] overflow-hidden"
						>
							<SvelteMarkdown source={article.description} />
						</div>
						<Icon
							href={`/article/${article.slug}`}
							src={backArrow}
							alt="Read More"
							tooltip="Read More"
							showTooltipOnMobile={true}
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
</DeviceContainer>
