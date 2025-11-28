<template>
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
</template>

<script setup lang="ts">
const pageTitle = 'お問い合わせ 送信完了'

definePageMeta({
	breadcrumb: pageTitle,
})

useHead({
	title: pageTitle,
})
</script>

<style lang="scss" scoped></style>
