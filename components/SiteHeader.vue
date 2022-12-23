<template>
	<div class="site_header">
		<header>
			<div class="d-flex">
				<div class="site_title">
					<h1 v-if="isPageTitle">DI-KIT</h1>
					<p v-else>DI-KIT</p>
				</div>
				<GnavMb />
			</div>
			<GnavPc />
		</header>
	</div>
</template>

<script>
export default {
	name: 'SiteHeader',
	props: {
		isPageTitle: {
			type: Boolean,
			required: false,
			default: false,
		}
	}
}
</script>

<style lang="scss" scoped>
.d-flex {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>