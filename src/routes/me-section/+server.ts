import { json } from '@sveltejs/kit';
import github from '$lib/images/github.png';
import twitter from '$lib/images/twitter.svg';
import linkedin from '$lib/images/linkedin.svg';
import me from '$lib/images/me.jpeg';
export function GET() {
	const description = `Welcome, I'm your dedicated software contractor, specializing in web, blockchain, and mobile
				development. My mission is to bring your software ideas to life with expertise and precision.
				You can reach me at tylerf66@gmail.com`;
	const links = [
		// { href: "https://twitter.com/TygerrFish", src: twitter, alt: "twitter" },
		{ href: 'https://github.com/Milk-Maven', src: github, alt: 'github' },
		{
			href: 'https://www.linkedin.com/in/tyler-fischer-4a5309141/',
			src: linkedin,
			alt: 'linkedin'
		}
	];
	return json({ description, links, me });
}
