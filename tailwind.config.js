/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#020a12',
				secondary: '#183D3D',
				secondaryComplement: '#3d1818',
				tertiary: '#6A9A85', // Adjusted for better link contrast and harmony
				quaternary: '#A0C3B5', // Softened to warmer light teal for cohesion
				text: '#ccc'
			},
			typography: () => ({
				DEFAULT: {
					css: {
						// Base typography overrides for tighter spacing
						maxWidth: 'full', // Keeps content readable but constrained
						fontSize: '1rem', // Slightly smaller base font for compactness
						lineHeight: '1.75', // Reduced from default ~1.75 for less vertical space
						'--tw-prose-body': '#020a12', // primary dark
						'--tw-prose-headings': '#183D3D', // secondary
						'--tw-prose-lead': '#6A9A85', // updated tertiary
						'--tw-prose-links': '#3d1818', // secondaryComplement (swapped for variety)
						'--tw-prose-bold': '#020a12',
						'--tw-prose-code': '#183D3D',
						'--tw-prose-pre-code': '#A0C3B5', // updated quaternary
						'--tw-prose-pre-bg': '#020a12',
						// Dark mode inverted styles with softer gray (#cccccc) for less stark contrast
						'--tw-prose-invert-body': '#cccccc', // Softer gray for body text
						'--tw-prose-invert-headings': '#A0C3B5', // updated quaternary for headings
						'--tw-prose-invert-lead': '#cccccc', // Match body
						'--tw-prose-invert-links': '#6A9A85', // updated tertiary for links
						'--tw-prose-invert-bold': '#cccccc', // Match body
						'--tw-prose-invert-code': '#90b0a5', // Slightly desaturated quaternary
						'--tw-prose-invert-pre-code': '#cccccc', // Match body
						'--tw-prose-invert-pre-bg': 'rgb(2 10 18 / 50%)',
						// Custom spacing reductions
						p: {
							marginTop: '1.25em', // Tighter than default 1.25em
							marginBottom: '0.75em'
						},
						'h1, h2, h3, h4, h5, h6': {
							marginTop: '1em', // Reduced from default ~1.5-2em
							marginBottom: '0.5em'
						},
						ul: {
							marginTop: '0.75em',
							marginBottom: '0.75em'
						},
						ol: {
							marginTop: '0.75em',
							marginBottom: '0.75em'
						},
						li: {
							marginTop: '0.25em', // Tighter list items
							marginBottom: '0.25em'
						},
						table: {
							marginTop: '1em',
							marginBottom: '1em'
						},
						'thead th': {
							paddingTop: '0.25em',
							paddingBottom: '0.25em'
						},
						'tbody tr': {
							borderBottomWidth: '1px' // Keep thin borders for separation without extra space
						},
						'tbody td': {
							paddingTop: '0.5em',
							paddingBottom: '0.5em'
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
