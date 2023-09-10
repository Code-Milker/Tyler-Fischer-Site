<script lang="ts">
	export let content: any;
</script>

<div class="md:min-w-[64rem] sm:min-w-[100vw] sm:max-w-[100vw] md:max-w-[64rem]">
	<svelte:component this={content} />
</div>
