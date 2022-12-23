import webpack from "webpack";

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
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

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['normalize.css', '@/assets/sass/global.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
		// https://html-validator.nuxtjs.org/
		'@nuxtjs/html-validator',
		// https://github.com/nuxt-community/fontawesome-module
		'@nuxtjs/fontawesome',
		// https://google-fonts.nuxtjs.org/
		'@nuxtjs/google-fonts',
		// https://github.com/mole-inc/nuxt-validate
		'@mole-inc/nuxt-validate',
	],

	// nuxt/html-validator configuration: https://html-validator.nuxtjs.org/
	htmlValidator: {
		options: {
			rules: {
				'attribute-empty-style': 'off', // 空の属性値を許可
			}
		}
	},

	// FontAwesome module configuration: https://github.com/nuxt-community/fontawesome-module
	fontawesome: {
		icons: {
			solid: true,
			regular: true,
			brands: true
		}
	},
	// GoogleFonts module configuration: https://google-fonts.nuxtjs.org/
	googleFonts: {
		families: {
			// Questrial: true,
			'Noto+Sans+JP': [100, 300, 400, 500, 700, 900],
			// Raleway: {
			// 	wght: [100, 400],
			// 	ital: [100]
			// }
		}
	},

	// @mole-inc/nuxt-validate module configuration: https://github.com/lewyuburi/nuxt-validate#configuration
	nuxtValidate: {
		lang: 'ja',
	},


	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://github.com/nuxt-community/style-resources-module/
		'@nuxtjs/style-resources',
		// https://github.com/nuxt-community/gtm-module
		// '@nuxtjs/gtm',
		// https://github.com/nuxt-community/recaptcha-module
		'@nuxtjs/recaptcha',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// style-resources Configuration: https://github.com/nuxt-community/style-resources-module/
	styleResources: {
		scss: [
			'~/assets/sass/_variables.scss',
			'~/assets/sass/_mixin.scss'
		]
	},

	// GoogleTagManager module configuration: https://github.com/nuxt-community/gtm-module
	// gtm: {
	// 	id: 'GTM-XXXXXXX'
	// },

	// reCAPTCHA module configuration: https://github.com/nuxt-community/recaptcha-module#configuration
	recaptcha: {
		hideBadge: false,
		siteKey: '6LfY-wUeAAAAAPqsTlTfx4usmgrSf_tt0yHRFCgY',
		version: 3,
		size: 'compact'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		vendor: ['jquery'],
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			})
		],
		html: {
			minify: {
				removeRedundantAttributes: false,
				removeComments: true
			}
		},
		// filenames: {
		// 	img: () => '[path][name].[ext]'
		// }
	},

	generate: {
		exclude: [
			'/inquiry/confirm',
			'/inquiry/completed'
		]
	}

	// publicRuntimeConfig: https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config/
	// publicRuntimeConfig: {
	// 	recaptcha: {
	// 		siteKey: process.env.RECAPTCHA_SITE_KEY
	// 	}
	// },

	// privateRuntimeConfig: https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config/
	// privateRuntimeConfig: {
	// },
}
