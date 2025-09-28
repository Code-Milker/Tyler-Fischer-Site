<script>
	import './styles.css';
</script>

<div class="app bg-primary">
	<main>
		<slot />
	</main>
	<footer>
		<div
			class="flex justify-around w-full bg-primary text-white min-h-[40px]"
		/>
	</footer>
</div>

<!-- max-width: 64rem; -->
<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex: 1;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
