import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'qetra-secondary': '#D9D9D9',
				'qetra-success': '#C3E600',
				'qetra-success-border': '#D1FF03',
				'qetra-card': '#24222A',
			},
			padding: {
				'34': '136px',
			},
			height: {
				'34': '136px',
			},
			rotate: {
				'9': '9deg',
				'10': '10deg',
				'20': '20deg',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
