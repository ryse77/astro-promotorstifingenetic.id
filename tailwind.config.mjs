/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#e6f7f3',
					100: '#ccefe6',
					200: '#99dfcd',
					300: '#66cfb4',
					400: '#33bf9b',
					500: '#00af82',
					600: '#0d5f4e',
					700: '#0a4d3e',
					800: '#083b2f',
					900: '#05291f',
				},
				secondary: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Poppins', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
