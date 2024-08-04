import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        serif: ['Orbitron Variable', ...defaultTheme.fontFamily.serif],
        play: ['Play', ...defaultTheme.fontFamily.serif],
        inter: ['Inter Variable', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'custom-dark-blue': 'rgba(14, 8, 55, 0.6)',
        'custom-pink': 'rgba(215, 20, 98, 0.6)',
      },
    },
	},
	plugins: [],
}
