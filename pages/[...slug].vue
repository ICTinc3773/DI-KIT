<template>
	<section class="error">
		<div class="container">
			<header class="error--header">
				<h1><img src="/public/images/contents/error/image-404.webp" alt="404 Page is not found" /></h1>
			</header>
			<div class="error--body">
				<p>ご訪問ありがとうございます。<br />大変申し訳ありませんが、<br class="sp_only" />お探しのページは見つかりませんでした。</p>
			</div>
			<div class="error--footer">
				<NuxtLink to="/"><span class="text">トップページへ戻る</span><font-awesome class="icon" :icon="['fas', 'chevron-right']" /></NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
setResponseStatus(404)
</script>

<style lang="scss" scoped>
@use '/assets/sass/bp';
@use '/assets/sass/color';

.error {
	padding: 90px 0;
	text-align: center;

	@media (max-width: #{bp.$bp-ui_change}) {
		padding: 50px 0;
	}
}
.error--body {
	margin-top: 66px;

	@media (max-width: #{bp.$bp-ui_change}) {
		margin-top: 28px;
	}

	p {
		font-size: 20px;
		font-weight: bold;

		@media (max-width: #{bp.$bp-ui_change}) {
			font-size: 16px;
		}
	}
}
.error--footer {
	margin-top: 30px;

	@media (max-width: #{bp.$bp-ui_change}) {
		margin-top: 28px;
	}

	a {
		color: #{color.$secondary};
		font-size: 20px;
		font-weight: bold;
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}

		@media (max-width: #{bp.$bp-ui_change}) {
			font-size: 16px;
		}
	}
}
</style>
