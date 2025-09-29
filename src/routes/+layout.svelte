<script>
	import './styles.css';
</script>

<div class="app bg-secondary">
	<main>
		<slot />
	</main>
	<footer />
</div>

<!-- max-width: 64rem; -->
<style>
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
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
