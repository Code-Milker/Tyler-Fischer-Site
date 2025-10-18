import type { ContentPreviewType, IconProps } from '$lib/types.ts';
import { writable } from 'svelte/store';
import Resume from '$lib/images/resume.jpeg';
import WhaleComputer from '$lib/images/whale-computer.jpg';
import Moo2 from '$lib/images/moo2.jpeg';
import RWA from '$lib/images/rwa.png';
import GoldenCalf from '$lib/images/calf.png';
import Bip39 from '$lib/images/bip39new.png';
import Poomy from '$lib/images/poomy2.jpg';
import EffectLess from '$lib/images/effectless-new.jpeg';
import SurfPunk from '$lib/images/surfpunk.avif';
import Deso from '$lib/images/DesoLogo.jpeg';
import ThisSite from '$lib/images/svelte-logo.svg';
import IronFox from '$lib/images/ironfox.jpg';
import aiMd from '$lib/content/ai.md?raw';
import resumeMd from '$lib/content/resume.md?raw';
import github from '$lib/images/github.png';
import gear from '$lib/images/gear.png';
import backArrow from '$lib/images/back-arrow.png';

export const selectedArticle = writable<StaticArticle | RepoArticle | null>(
	null
);

const backIcon: IconProps = {
	onClick: () => selectedArticle.set(null),
	src: backArrow,
	alt: 'back',
	tooltip: 'Back'
};

const getDemoIcon = (): IconProps => ({
	onClick: () => {
		selectedArticle.update((a) => {
			if (a && 'repo' in a) {
				a.showPrototype = !a.showPrototype;
			}
			return a;
		});
	},
	src: gear,
	alt: 'prototype',
	tooltip: 'Demo'
});

const getGithubIcon = (repo: string): IconProps => ({
	href: `https://github.com/${repo}`,
	src: github,
	alt: 'github',
	tooltip: 'GitHub'
});

const repoArticles: RepoArticle[] = [
	{
		title: 'Poomy',
		description: 'A single file web page that generates private keys',
		image: Poomy,
		repo: 'Code-Milker/VentureWisconsinMobile',
		branch: 'main',
		file: 'readme.md',
		interactiveFile: 'index.html',
		icons: [
			backIcon,
			getDemoIcon(),
			getGithubIcon('Code-Milker/VentureWisconsinMobile')
		]
	},
	{
		title: 'RWA ERC-7540',
		description:
			'Token Vault contract for bridging real world assets for chatuea capital',
		image: RWA,
		repo: 'Code-Milker/tokenVault',
		branch: 'master',
		file: 'README.md',
		interactiveFile: 'index.html',
		icons: [backIcon, getDemoIcon(), getGithubIcon('Code-Milker/tokenVault')]
	},
	{
		title: 'BIP39',
		description: 'A single file web page that generates private keys',
		image: Bip39,
		repo: 'Code-Milker/bip-39',
		branch: 'master',
		file: 'README.md',
		interactiveFile: 'index.html',
		icons: [backIcon, getDemoIcon(), getGithubIcon('Code-Milker/bip-39')]
	},
	{
		title: 'Effect-Less',
		description:
			"Struggling with TypeScript's flexibility causing inconsistent code, runtime errors, and endless debates? Effect-less enforces a stricter dialect via custom lint rules, Go-like error handling, Zod-derived types, immutable structures, and pure functions—boosting reliability and focus on business logic.",
		image: EffectLess,
		repo: 'Code-Milker/effect-less',
		branch: 'main',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/effect-less')]
	},
	{
		title: 'Surf Punks v2',
		description: 'first gig in blockchain, based on x blah blah',
		image: SurfPunk,
		repo: 'Code-Milker/surf-punks-v2',
		branch: 'main',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/surf-punks-v2')]
	},
	{
		title: 'This Site',
		description:
			'Built with Svelte and tailwind, this site features a custom markdown generator blah blah',
		image: ThisSite,
		repo: 'Code-Milker/Tyler-Fischer-Site',
		branch: 'master',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/Tyler-Fischer-Site')]
	},
	{
		title: 'Deso.js',
		description:
			'While serving as a developer advocate at deso I solely created the inital implemenation of deso.js, https://build.deso.com/main/welcome',
		image: Deso,
		repo: 'deso-protocol/deso-workspace',
		branch: '66d616bd480b1dfbf597b2db10b4c227fde4fee9',
		file: 'libs/deso-protocol/README.md',
		icons: [backIcon, getGithubIcon('deso-protocol/deso-workspace')]
	},
	{
		title: 'MooMoo.js',
		description:
			'A JavaScript project from the MooMoo.js GitHub repository. Details will be fetched dynamically from the README if available, though the repository appears to lack a detailed description.',
		image: Moo2,
		repo: 'Code-Milker/moomoo.js',
		branch: 'main',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/moomoo.js')]
	},
	{
		title: 'Golden Calf',
		description: 'Prediction Market app prototype for the Deso Blockchain',
		image: GoldenCalf,
		repo: 'Code-Milker/golden-calf',
		branch: 'main',
		file: 'README.md',
		icons: [backIcon, getGithubIcon('Code-Milker/golden-calf')]
	},
	{
		title: 'Iron Fox',
		description: 'crypto anylatics that automatically detect mixers blah blah',
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
		description: 'Resume for Tyler Fischer',
		image: Resume,
		filename: '/resume.md',
		fullContent: resumeMd,
		icons: [backIcon]
	},
	{
		title: 'Prompting 101',
		description:
			'Thoughts on a generalized approach to leveraging AI efficiently and securely across any environment, emphasizing controlled access, precise prompting, output verification, and future safeguards to mitigate risks like hallucinations, biases, and privacy breaches while maximizing productivity.',
		image: WhaleComputer,
		filename: '/ai.md',
		fullContent: aiMd,
		icons: [backIcon]
	}
];

export const articles = writable<(StaticArticle | RepoArticle)[]>([
	...repoArticles,
	...staticArticles
]);

export interface StaticArticle extends Omit<ContentPreviewType, 'url'> {
	filename: string;
	fullContent: string;
	icons: IconProps[];
}
export interface RepoArticle extends Omit<ContentPreviewType, 'url'> {
	repo: string;
	fullContent?: string;
	interactiveContent?: string;
	branch: string;
	file: string;
	interactiveFile?: string;
	showPrototype?: boolean;
	icons: IconProps[];
}
