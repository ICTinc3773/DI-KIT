<template>
	<div class="site">
		<header class="site--header">
			<div class="container">
				<div class="container-flex">
					<div class="site_title">
						<h1 v-if="isPageTitle"><NuxtLink to="/">DI-KIT</NuxtLink></h1>
						<p v-else><NuxtLink to="/">DI-KIT</NuxtLink></p>
					</div>
					<GnavMb />
				</div>
				<GnavPc />
			</div>
		</header>

		<main class="site--body">
			<slot />
		</main>
		<footer class="site--footer">
			<div class="copyright">
				<div class="content_wrapper">
					<p>&copy;2024 ICT inc.</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const runtimeConfig = useRuntimeConfig()
const gtmId = runtimeConfig.public.gtmId
const organization = runtimeConfig.public.organization

useHead({
	script: [
		// 構造化データ 組織（Organization）を全ページに出力
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Organization',
				name: organization.name,
				url: organization.url,
				logo: organization.logo,
				address: organization.address,
				contactPoint: organization.contactPoint,
			}),
		},
		// dataLayer 初期化＋gtm.js 読み込み
		{
			children: `(function(w,d,s,l,i){
				w[l]=w[l]||[];
				w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
				var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
				j.async=true;
				j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
				f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','${gtmId}');`,
		},
	],
})

const route = useRoute()

const isPageTitle = computed(() => route.meta.isPageTitle === true)

/**
 * Google reCAPTCHAバッジの表示切り替え
 */
function toggleRecaptchaBadge(show: boolean) {
	const badge = document.querySelector('.grecaptcha-badge') as HTMLElement
	if (badge) {
		badge.style.visibility = show ? 'initial' : 'hidden'
	}
}

/**
 * Google reCAPTCHAバッジを表示するフォームパスのチェック
 */
function isFormRoute() {
	if (route.path.startsWith('/message_us') || route.path.startsWith('/recruit/entry')) {
		return true
	}
	return false
}

onMounted(() => {
	// 初期化時に一度実行
	let isShow = false
	if (route.path.startsWith('/message_us') || route.path.startsWith('/recruit/entry')) {
		isShow = true
	}
	toggleRecaptchaBadge(isFormRoute())

	// ルート変更時の監視
	watch(
		() => route.path,
		() => {
			toggleRecaptchaBadge(isFormRoute())
		},
	)
})
</script>

<style lang="scss" scoped>
@use '/assets/sass/bp';
@use '/assets/sass/variables';

.site--body {
	padding-top: #{variables.$siteHeaderHeightPc};

	@media (max-width: #{bp.$bp-ui_change}) {
		padding-top: #{variables.$siteHeaderHeightSp};
	}
}

.container {
	max-width: 1980px;

	@media (min-width: 1981px) {
		margin: auto;
	}
}

.site_title h1,
.site_title p {
	margin: 0.67em 0;
	font-size: 2em;
	font-weight: bold;
	line-height: 1.2;
}

.copyright {
	background: #ccc;
	text-align: center;
	padding: 0.6em;
}
</style>
