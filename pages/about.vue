<template>
	<div>
		<SiteHeader />
		<main>
			<PageTitle title-text="DI-KITについて" />
		</main>
		<SiteFooter />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'AboutPage',
	head: {
		title: 'DI-KITについて',
	},
})
</script>
