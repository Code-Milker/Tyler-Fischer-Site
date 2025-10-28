import type { ContentPreviewType, IconProps } from '$lib/types.ts';
import me from '$lib/images/me.jpeg';
import { writable } from 'svelte/store';
import WhaleComputer from '$lib/images/whale-computer.jpg';
import Moo2 from '$lib/images/moo2.jpeg';
import RWA from '$lib/images/rwa.png';
import GoldenCalf from '$lib/images/calf.png';
import Bip39 from '$lib/images/bip39new.png';
import SubSpark from '$lib/images/subspark.jpg';
import EffectLess from '$lib/images/effectless-new.jpeg';
import SurfPunk from '$lib/images/surfpunk.avif';
import Deso from '$lib/images/DesoLogo.jpeg';
import ThisSite from '$lib/images/svelte-logo.svg';
import IronFox from '$lib/images/ironfox.jpg';
import aiMd from '$lib/content/ai.md?raw';
import desoMd from '$lib/content/deso.md?raw';
import resumeMd from '$lib/content/resume.md?raw';
import github from '$lib/images/github.png';
import backArrow from '$lib/images/back-arrow.png';
import Phone from '$lib/images/phone.png';
import { browser } from '$app/environment';
export const selectedArticle = writable<StaticArticle | RepoArticle | null>(
	null
);
export const scrollPosition = writable(0);
const backIcon: IconProps = {
	onClick: () => {
		if (browser) history.back();
	},
	src: backArrow,
	alt: 'back',
	tooltip: 'Back'
};
// const getDemoIcon = (): IconProps => ({
// onClick: () => {
// selectedArticle.update((a) => {
// if (a && 'repo' in a) {
// a.showPrototype = !a.showPrototype;
// }
// return a;
// });
// },
// src: gear,
// alt: 'prototype',
// tooltip: 'Demo'
// });
const getGithubIcon = (repo: string): IconProps => ({
	href: `https://github.com/${repo}`,
	src: github,
	alt: 'github',
	tooltip: 'GitHub'
});
const getDownloadIcon = (repo: string, branch: string): IconProps => ({
	href: `https://github.com/${repo}/archive/${branch}.zip`,
	src: Phone,
	alt: 'download',
	tooltip: 'Download'
});
const repoArticles: RepoArticle[] = [
	{
		title: 'Sub Spark',
		slug: 'sub-spark',
		description:
			'Sub Spark is a React Native app linking users to local businesses via maps, listings, coupons, and payments, showcasing full-stack expertise in a production prototype.',
		image: SubSpark,
		repo: 'Code-Milker/VentureWisconsinMobile',
		branch: 'main',
		file: 'readme.md',
		icons: [backIcon, getGithubIcon('Code-Milker/VentureWisconsinMobile')]
	},
	{
		title: ' ERC-7540',
		slug: 'erc-7540',
		description:
			'Token Vault contract for bridging real world assets to chatuea capital',
		image: RWA,
		repo: 'Code-Milker/tokenVault',
		branch: 'master',
		file: 'README.md',
		interactiveFile: 'index.html',
		icons: [backIcon, getGithubIcon('Code-Milker/tokenVault')]
	},
	{
		title: 'BIP-39',
		slug: 'bip-39',
		description: 'A single file web page that generates private keys',
		image: Bip39,
		repo: 'Code-Milker/bip-39',
		branch: 'master',
		file: 'README.md',
		interactiveFile: 'index.html',
		icons: [backIcon, getGithubIcon('Code-Milker/bip-39')]
	},
	{
		title: 'Effect Less',
		slug: 'effect-less',
		description:
			"Struggling with TypeScript's flexibility causing inconsistent code, runtime errors, and endless debates? Effect-less enforces a stricter dialect via custom lint rules, Go-like error handling, Zod-derived types, immutable structures, and pure functions—boosting reliability and focus on business logic.",
		image: EffectLess,
		repo: 'Code-Milker/effect-less',
		branch: 'main',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/effect-less')]
	},
	{
		title: 'Surf Punks V2',
		slug: 'surf-punks-v2',
		description:
			'Surf Punks V2 is an ERC-721 NFT smart contract on Ethereum where users mint unrevealed "trunks" tokens that later get revealed through randomization into unique "surfer" collectibles with varying rarities and attributes, emphasizing surf culture themes with owner-controlled minting and metadata management.',
		image: SurfPunk,
		repo: 'Code-Milker/surf-punks-v2',
		branch: 'master',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/surf-punks-v2')]
	},
	{
		title: 'This Site',
		slug: 'this-site',
		description:
			'Built with Svelte and tailwind, this site features a custom markdown generator blah blah',
		image: ThisSite,
		repo: 'Code-Milker/Tyler-Fischer-Site',
		branch: 'master',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/Tyler-Fischer-Site')]
	},
	{
		title: 'MooMoo.js',
		slug: 'moomoo-js',
		description:
			'MooMoo is a lightweight TypeScript library for building web components declaratively, using a chained builder pattern to enforce structure: providers, state, actions, side effects, children, and templates. It generates self-contained HTML+JS with bindings for reactivity, avoiding heavy frameworks like React by focusing on direct templating and semantic enforcement for simpler, type-safe UI creation.',
		image: Moo2,
		repo: 'Code-Milker/moomoo.js',
		branch: 'master',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/moomoo.js')]
	},
	{
		title: 'Golden Calf',
		slug: 'golden-calf',
		description:
			'Golden Calf is a blockchain-based game on the DeSo protocol where players participate in weekly cycles by submitting offerings (bets) and making sacrifices (tips or transfers) for decentralized rewards and interactions.',
		image: GoldenCalf,
		repo: 'Code-Milker/golden-calf',
		branch: 'main',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/golden-calf')]
	},
	{
		title: 'Iron Fox',
		slug: 'iron-fox',
		description:
			'A prototype CLI tool for tracing stolen crypto funds from phishing attacks, uncovering paths to fiat off-ramps with smart caching and manual overrides for complex trails.',
		image: IronFox,
		repo: 'Code-Milker/iron-fox',
		branch: 'main',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/iron-fox')]
	}
];
const staticArticles: StaticArticle[] = [
	{
		title: 'Resume',
		slug: 'resume',
		description: 'Resume for Tyler Fischer',
		image: me,
		fullContent: resumeMd,
		icons: [backIcon]
	},
	{
		title: 'Deso',
		slug: 'deso',
		description:
			'While serving as a developer advocate at deso I solely created the inital implemenation of deso.js.',
		image: Deso,
		// repo: 'deso-protocol/deso-workspace',
		// branch: '66d616bd480b1dfbf597b2db10b4c227fde4fee9',
		fullContent: desoMd,
		icons: [backIcon, getGithubIcon('deso-protocol/deso-workspace')]
	},
	{
		title: 'Prompting 101',
		slug: 'prompting-101',
		description:
			'Thoughts on a generalized approach to leveraging AI efficiently and securely across any environment, emphasizing controlled access, precise prompting, output verification, and future safeguards to mitigate risks like hallucinations, biases, and privacy breaches while maximizing productivity.',
		image: WhaleComputer,
		fullContent: aiMd,
		icons: [backIcon]
	}
];
export const articles = writable<(StaticArticle | RepoArticle)[]>([
	...staticArticles,
	...repoArticles
]);
export interface StaticArticle extends Omit<ContentPreviewType, 'url'> {
	slug: string;
	fullContent: string;
	icons: IconProps[];
}
export interface RepoArticle extends Omit<ContentPreviewType, 'url'> {
	slug: string;
	repo: string;
	fullContent?: string;
	interactiveContent?: string;
	branch: string;
	file: string;
	interactiveFile?: string;
	showPrototype?: boolean;
	icons: IconProps[];
}
export async function fetchRepoContent(
	repo: string,
	branch: string,
	file: string
): Promise<string> {
	if (!file) return '';
	try {
		const response = await fetch(
			`https://raw.githubusercontent.com/${repo}/${branch}/${file}`
		);
		if (response.ok) {
			return await response.text();
		}
		return `Failed to fetch ${file} from GitHub. It may not exist or the repo is private.`;
	} catch (e) {
		return 'Error fetching content: ' + (e as Error).message;
	}
}
