<script>
	import '../../app.css';
	import DeviceContainer from '$lib/DeviceContainer.svelte';
	import me from '$lib/images/me.jpeg';
	import github from '$lib/images/github.png';
	import twitter from '$lib/images/twitter.svg';
	import linkedin from '$lib/images/linkedin.svg';
	const description = `Welcome, I'm your dedicated software contractor, specializing in web, blockchain, and mobile
				development. My mission is to bring your software ideas to life with expertise and precision.
				Send an email if you're interested in these services`;
	const links = [
		{ href: 'https://twitter.com/TygerrFish', src: twitter, alt: 'twitter' },
		{ href: 'https://github.com/Milk-Maven', src: github, alt: 'github' },
		{ href: 'https://www.linkedin.com/in/tyler-fischer-4a5309141/', src: linkedin, alt: 'linkedin' }
	];
</script>

<!--desktop-->
<DeviceContainer>
	<div slot="desktop" class="bg-secondary flex justify-start flex-col invisible md:visible">
		<div class="bg-primary rounded-lg p-10">
			<div class="bg-primary rounded-lg p-6">
				<img
					src={me}
					class="max-w-[200px] max-h-[200px] rounded-full m-auto bg-secondary"
					alt="failed to load me"
				/>
				<div class="bg-primary rounded-lg pt-6 text-white">
					<h1 class="text-2xl">Hey, I'm Ty</h1>
					{description}
				</div>
			</div>

			<div class="text-white flex flex-col justify-around my-6">
				<div class="flex justify-around bg-secondary rounded-full">
					{#each links as link}
						<a href={link.href}
							><img class="max-w-[50px] min-w-[50px]" src={link.src} alt={link.alt} /></a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div slot="mobile">asdf</div>
</DeviceContainer>

<!-- "But that's not all. We're not just about software. We believe in the power of knowledge and exploration. -->
<!-- Join our newsletter, where we delve into philosophy, health and fitness, psychology, and thought-provoking -->
<!-- ideas. Stay informed and inspired with our insights delivered right to your inbox." -->

<!--mobile-->

<style></style>
