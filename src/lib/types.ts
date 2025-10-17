export interface ContentPreviewType {
	title: string;
	description: string;
	url: string;
	image: string;
}
export interface LinksType {
	href: string;
	src: string;
	alt: string;
}

export interface IconProps {
	src: string;
	alt: string;
	href?: string;
	onClick?: () => void;
}
