<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import '../app.css';
</script>

<slot />
<header>
	<nav>
		<ul class="flex justify-around p-2 w-full bg-black text-white my-auto">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a class="" href="/resources">Resources</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<!-- <div class="corner"> -->
				<!-- <a class="max-h-[100px]" href="https://github.com/Milk-Maven"> -->
				<!-- 	<img width="40" class="text-white" src={github} alt="GitHub" /> -->
				<!-- </a> -->
				<!-- </div> -->
			</li>
		</ul>
	</nav>
</header>

<style></style>
