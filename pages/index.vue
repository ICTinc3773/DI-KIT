<template>
	<div>
		<SiteHeader :is-page-title="true" />
		<main>
			<h2>DI-KITについて</h2>

			<SlideShowHooper />

			<div class="wrapper">
				<ul>
					<li>
						<AccordionList title-text="リスト1">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
						</AccordionList>
					</li>
					<li>
						<AccordionList title-text="リスト2" duration="400">
							<li>6</li>
							<li>7</li>
							<li>8</li>
							<li>9</li>
							<li>10</li>
						</AccordionList>
					</li>
				</ul>
			</div>

		</main>
		<SiteFooter />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'IndexPage',
})
</script>

<style lang="scss" scoped>
.wrapper {
	margin: 50px 0;
}
::v-deep .list_title {
	color: green;
}
li {
	color: red;
}
</style>