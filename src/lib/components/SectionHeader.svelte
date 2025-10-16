<!-- src/lib/components/SectionHeader.svelte -->
<script lang="ts">
	import DeviceContainer from '$lib/components/DeviceContainer.svelte';

	export let title: string;
	export let description: string;
	export let image: string;
	export let alt: string = '';
</script>

<DeviceContainer class="w-full">
	<div slot="desktop" class="bg-primary">
		<div class="flex flex-row bg-primary p-4 w-full">
			<img
				src={image}
				class="size-[200px] border-primary"
				alt={`failed to load ${alt}`}
			/>
			<div class="pl-4 py-4 flex flex-col justify-between min-h-[200px] flex-1">
				<h1 class="text-3xl text-tertiary font-bold">{title}</h1>
				<p class="text-start">{description}</p>
				<div class="max-w-[200px] flex flex-row justify-between">
					<slot name="actions" />
				</div>
			</div>
		</div>
	</div>
	<div slot="mobile">
		<div class="flex flex-col">
			<div class="flex flex-row items-center">
				<img
					src={image}
					class="aspect-square size-[130px] rounded-full bg-secondary"
					alt={`failed to load ${alt}`}
				/>
				<div class="flex flex-col justify-center pl-4 flex-1">
					<h1 class="text-3xl font-bold text-tertiary mb-2">
						{title}
					</h1>
					<div class="flex justify-between w-full mt-2">
						<slot name="actions" />
					</div>
				</div>
			</div>
			<p class="text-start pt-2 px-4">{description}</p>
		</div>
	</div>
</DeviceContainer>
