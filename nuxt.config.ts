// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'DI_KIT',
			htmlAttrs: {
				lang: 'ja',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: '' },
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},
	css: ['normalize.css', '@/assets/sass/global.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
	modules: ['vue3-carousel-nuxt', '@nuxtjs/google-fonts', '@nuxtjs/html-validator', '@vesp/nuxt-fontawesome', '@pinia/nuxt'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	},
	fontawesome: {
		icons: {
			solid: ['house', 'building', 'envelope', 'scroll'],
			regular: [],
			brands: [],
		},
	},
	googleFonts: {
		families: {
			// Questrial: true,
			'Noto+Sans+JP': [100, 300, 400, 500, 700, 900],
			// Raleway: {
			// 	wght: [100, 400],
			// 	ital: [100]
			// }
		},
	},
	plugins: [],
})
