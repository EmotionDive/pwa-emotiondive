/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
		},
	},
	plugins: [
		react(),
		svgr(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,woff}'],
			},
			manifest: {
				name: 'EmotionDive',
				short_name: 'EmotionDive',
				description:
					'El lugar perfecto para prácticar y desarrollar tu Inteligencia Emocional.',
				start_url: '/',
				display: 'minimal-ui',
				theme_color: '#f8f8f8',
				background_color: '#f8f8f8',
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/android-chrome-384x384.png',
						sizes: '384x384',
						type: 'image/png',
					},
				],
			},
		}),
	],
})
