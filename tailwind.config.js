/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#020a12',
				secondary: '#183D3D',
				secondaryComplement: '#3d1818',
				tertiary: '#6A9A85',
				quaternary: '#A0C3B5',
				text: 'white'
			},
			typography: () => ({
				DEFAULT: {
					css: {
						maxWidth: 'full',
						fontWeight: '200',
						fontSize: '1rem',
						lineHeight: '1.75',
						'--tw-prose-body': '#020a12',
						'--tw-prose-headings': '#183D3D',
						'--tw-prose-lead': '#6A9A85',
						'--tw-prose-links': '#A0C3B5',

						'--tw-prose-bold': '#020a12',
						'--tw-prose-code': 'white',
						'--tw-prose-pre-code': 'white',
						'--tw-prose-pre-bg': '#020a12',
						'--tw-prose-td-borders': '#183D3D',
						'--tw-prose-invert-body': 'white',
						'--tw-prose-invert-headings': '#A0C3B5',
						'--tw-prose-invert-lead': 'white',
						'--tw-prose-invert-links': '#A0C3B5',
						'--tw-prose-invert-bold': 'white',
						'--tw-prose-invert-code': 'white',
						'--tw-prose-invert-pre-code': 'white',
						'--tw-prose-invert-pre-bg': 'rgb(2 10 18 / 50%)',
						p: {
							marginTop: '.75em',
							marginBottom: '0.75em'
						},
						strong: {
							color: '#A0C3B5'
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
							marginTop: '0.25em',
							marginBottom: '0.25em'
						},
						table: {
							marginTop: '.75em',
							marginBottom: '.75em',
							width: '100%',
							overflowX: 'auto',
							display: 'block',
							borderCollapse: 'collapse'
						},
						'thead th': {
							paddingTop: '0.25em',
							paddingBottom: '0.25em',
							paddingLeft: '0.5em',
							paddingRight: '0.5em',
							borderColor: 'var(--tw-prose-td-borders)',
							borderWidth: '0 0 1px 0',
							width: 'auto', // Allow columns to take available space
							minWidth: '100px' // Optional: set a minimum width to prevent collapse
						},

						thead: {
							minWidth: '' // Allow columns to take available space
						},
						tbody: {
							minWidth: '100%' // Allow columns to take available space
						},
						'tbody td': {
							paddingTop: '0.5em',
							paddingBottom: '0.5em',
							paddingLeft: '0.5em',
							paddingRight: '0.5em',
							borderColor: 'var(--tw-prose-td-borders)',
							borderWidth: '0 0 1px 0',
							width: 'auto', // Allow columns to take available space
							minWidth: '100px' // Optional: set a minimum width to prevent collapse
						},
						pre: {
							whiteSpace: 'pre-wrap',
							overflowWrap: 'break-word',
							padding: '0'
						},
						code: {
							wordBreak: 'break-word'
						},
						img: {
							maxWidth: '100%',
							height: 'auto'
						},
						h1: {
							fontSize: '1.75rem',
							lineHeight: '2.50rem',
							marginTop: '.75em',
							marginBottom: '0.75em'
						},
						h2: {
							fontSize: '1.25rem',
							lineHeight: '2.00rem',
							marginTop: '.75em',
							marginBottom: '0.75em'
						},

						h3: {
							fontSize: '1.00rem',
							lineHeight: '2.25rem',

							marginTop: '.75em',
							marginBottom: '0.75em'
						},

						h4: {
							fontSize: '.75rem',
							lineHeight: '2.25rem',

							marginTop: '.75em',
							marginBottom: '0.75em'
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
