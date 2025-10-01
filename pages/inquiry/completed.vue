<template>
	<div class="site">
		<main class="site--body">
			<div class="completed">
				<div class="container">
					<div class="completed--header">
						<h1>送信完了</h1>
					</div>
					<div class="completed--body">
						<NuxtLink to="/">トップページへ戻る</NuxtLink>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'お問い合わせ 送信完了',
})
</script>

<style lang="scss" scoped></style>
