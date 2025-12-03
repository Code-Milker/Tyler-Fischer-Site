// src/lib/articles.ts
import type { IconProps } from '$lib/types';

import me from '$lib/images/me.jpeg';
import Deso from '$lib/images/DesoLogo.jpeg';
import WhaleComputer from '$lib/images/whale-computer.jpg';
import Chainlink from '$lib/images/chainlinkSymbol.png';
import SubSpark from '$lib/images/subspark.jpg';
import RWA from '$lib/images/rwa.png';
import Bip39 from '$lib/images/bip39new.png';
import EffectLess from '$lib/images/effectless-new.jpeg';
import SurfPunk from '$lib/images/surfpunk.avif';
import ThisSite from '$lib/images/svelte-logo.svg';
import Moo2 from '$lib/images/moo2.jpeg';
import GoldenCalf from '$lib/images/calf.png';
import IronFox from '$lib/images/ironfox.jpg';
import BlendinPlugins from '$lib/images/blendin-ai.jpeg';

import aiMd from '$lib/content/ai.md?raw';
import desoMd from '$lib/content/deso.md?raw';
import resumeMd from '$lib/content/resume.md?raw';

import githubIcon from '$lib/images/github.png';
import backArrow from '$lib/images/back-arrow.png';

export interface Article {
	title: string;
	slug: string;
	description: string;
	image: string;
	icons: (IconProps & { type?: 'back' })[];
	fullContent?: string;
	interactiveContent?: string;
	repo?: string;
	branch?: string;
	file?: string;
	interactiveFile?: string;
	showPrototype?: boolean;
}

export const articlesList: Article[] = [
	{
		title: 'Resume',
		slug: 'resume',
		description:
			'A comprehensive overview of my professional experience, skills, and achievements in software engineering, blockchain, Web3, and full-stack development.',
		image: me,
		fullContent: resumeMd,
		icons: [{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' }]
	},
	{
		title: 'Deso Advocte Portfolio',
		slug: 'deso',
		description:
			'While serving as a developer advocate at deso I solely created the inital implemenation of deso.js.',
		image: Deso,
		fullContent: desoMd,
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/deso-protocol/deso-workspace/tree/66d616bd480b1dfbf597b2db10b4c227fde4fee9',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
	},
	{
		title: 'Prompting 101',
		slug: 'prompting-101',
		description:
			'Thoughts on a generalized approach to leveraging AI efficiently and securely across any environment, emphasizing controlled access, precise prompting, output verification, and future safeguards to mitigate risks like hallucinations, biases, and privacy breaches while maximizing productivity.',
		image: WhaleComputer,
		fullContent: aiMd,
		icons: [{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' }]
	},
	{
		title: 'Chainlink Token Vault',
		slug: 'chainlink-demo',
		description:
			'A prototype RWA Token Vault contract integrated with Chainlink Automations',
		image: Chainlink,
		repo: 'Code-Milker/chainlink-demo',
		branch: 'main',
		file: 'README.md',
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/chainlink-demo/tree/main',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
	},
	{
		title: 'Sub Spark',
		slug: 'sub-spark',
		description:
			'Sub Spark is a React Native app linking users to local businesses via maps, listings, coupons, and payments, showcasing full-stack expertise in a production prototype.',
		image: SubSpark,
		repo: 'Code-Milker/VentureWisconsinMobile',
		branch: 'main',
		file: 'readme.md',
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/VentureWisconsinMobile/tree/main',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
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
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/tokenVault/tree/master',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
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
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/bip-39/tree/master',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
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
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/effect-less/tree/main',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
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
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/surf-punks-v2/tree/master',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
	},
	{
		title: 'This Site',
		slug: 'this-site',
		description:
			'Built with only Svelte and tailwind and uses standard best web app practices',
		image: ThisSite,
		repo: 'Code-Milker/Tyler-Fischer-Site',
		branch: 'master',
		file: 'README.md',
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/Tyler-Fischer-Site/tree/master',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
	},
	{
		title: 'MooMoo.js',
		slug: 'moomoo-js',
		description:
			'MooMoo.js is a lightweight TypeScript library for declaratively building web components via a chained builder pattern that enforces structure: providers, state, actions, side effects, children, and templates. It generates self-contained HTML+JS with reactivity bindings, avoiding heavy frameworks like React through direct templating and semantic enforcement for simpler, type-safe UIs.',
		image: Moo2,
		repo: 'Code-Milker/moomoo.js',
		branch: 'master',
		file: 'README.md',
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/moomoo.js/tree/master',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
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
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/golden-calf/tree/main',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
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
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/iron-fox/tree/main',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
	},
	{
		title: 'Blendin Plugins',
		slug: 'blendin-plugins',
		description:
			'Plugins developed for Blendin AI to enable multi-language support and documentation localization in Docusaurus and GitBook.',
		image: BlendinPlugins,
		repo: 'Code-Milker/blendin-plugins',
		branch: 'main',
		file: 'README.md',
		icons: [
			{ type: 'back', src: backArrow, alt: 'back', tooltip: 'Back' },
			{
				href: 'https://github.com/Code-Milker/blendin-plugins/tree/main',
				src: githubIcon,
				alt: 'github',
				tooltip: 'GitHub'
			}
		]
	}
];
