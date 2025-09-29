<template>
	<header class="site_header">
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
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
	isPageTitle: {
		type: Boolean,
		required: false,
		default: false,
	},
})
</script>

<style lang="scss" scoped>
.site_title h1,
.site_title p {
	margin: 0.67em 0;
	font-size: 2em;
	font-weight: bold;
	line-height: 1.2;
}
</style>
