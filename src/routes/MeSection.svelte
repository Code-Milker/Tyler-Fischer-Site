<script>
	import '../app.css';
	import me from '$lib/images/me.jpeg';
	import github from '$lib/images/github.png';
	import twitter from '$lib/images/twitter.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<div class={`bg-primary min-h-[25vh] flex justify-start p-4`}>
	<img src={me} class="max-h-[200px] rounded-full my-auto mr-8" alt="failed to load me" />

	<div class="my-auto text-white flex flex-col justify-around min-h-[200px]">
		<h1 class="text-2xl">Hey, I'm Ty</h1>
		<div class="mt-y text-white">
			Welcome, I'm your dedicated software contractor, specializing in web, blockchain, and mobile
			development. My mission is to bring your software ideas to life with expertise and precision.
			Send an email if you're interested in these services
		</div>
		<div class="mt-y">
			<div class="flex justify-around bg-secondary rounded-full">
				<a href="https://twitter.com/TygerrFish"
					><img class=" max-w-[50px] min-w-[50px]" src={twitter} alt="twitter" /></a
				>
				<a href="https://github.com/Milk-Maven">
					<img class="max-w-[50px] min-w-[50px]" src={github} alt="github" /></a
				>
				<a href="https://www.linkedin.com/in/tyler-fischer-4a5309141/"
					><img class="max-w-[50px] min-w-[50px]" src={linkedin} alt="linkedin" /></a
				>
			</div>
		</div>
	</div>
</div>

<!-- "But that's not all. We're not just about software. We believe in the power of knowledge and exploration. -->
<!-- Join our newsletter, where we delve into philosophy, health and fitness, psychology, and thought-provoking -->
<!-- ideas. Stay informed and inspired with our insights delivered right to your inbox." -->

<style></style>
