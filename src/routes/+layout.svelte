<script>
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
</script>

<div class="app bg-black">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer>
		<div class="flex justify-around w-full bg-primary text-white min-h-[40px]">
			<!-- <p class="my-auto">Tyler Fischer</p> -->
		</div>
	</footer>
</div>

<!-- max-width: 64rem; -->
<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
