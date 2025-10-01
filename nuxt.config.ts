// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'DI_KIT',
			htmlAttrs: {
				lang: 'ja',
			},
			meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},

	htmlValidator: {
		options: {
			rules: {
				'heading-level': 'off',
				'unique-landmark': 'off',
				'element-required-attributes': 'off', // 画像のlazyloadでsrcが空になるため、除外
			},
		},
	},

	css: ['normalize.css', '@/assets/sass/global.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
	modules: ['vue3-carousel-nuxt', '@nuxtjs/google-fonts', '@nuxtjs/html-validator', '@vesp/nuxt-fontawesome', '@pinia/nuxt'],

	runtimeConfig: {
		public: {
			gtmId: 'GTM-T82B2XBL',
			organization: {
				url: 'https://www.sample.co.jp',
				name: 'サンプル企業名',
				logo: 'https://www.sample.co.jp/images/sample_logo.webp',
				address: {
					'@type': 'PostalAddress',
					postalCode: '111-1111',
					addressCountry: 'JP',
					addressRegion: 'サンプル都道府県',
					addressLocality: 'サンプル市',
					streetAddress: 'サンプル町1-1-1 サンプルビル2F',
				},
				contactPoint: [
					{
						'@type': 'ContactPoint',
						contactType: 'sales',
						email: 'info@sample.co.jp',
						telephone: '050-1111-2222',
						areaServed: 'JP',
						availableLanguage: 'Japanese',
					},
				],
			},
			recaptchaSiteKey: '',
		},
		recaptchaSecretKey: '',
	},
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
