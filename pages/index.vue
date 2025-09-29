<template>
	<div class="site">
		<SiteHeader :is-page-title="true" />
		<main class="site--body">
			<div class="container">
				<SlideShowVueCarousel />

				<section class="accordion_list_section">
					<header class="accordion_list_section--header">
						<h2>アコーディオンリスト</h2>
					</header>
					<div class="accordion_list_section--body">
						<AccordionList title-text="リスト1">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
						</AccordionList>
						<AccordionList title-text="リスト2" :duration="'400'">
							<li>6</li>
							<li>7</li>
							<li>8</li>
							<li>9</li>
							<li>10</li>
						</AccordionList>
					</div>
				</section>
			</div>
		</main>
		<SiteFooter />
	</div>
</template>

<style lang="scss" scoped>
/*
Sass変数を使用する場合は、各コンポーネントに@useを記述する。
@use "~/assets/sass/_variables.scss" as vars
（mixinも同様）
*/
.wrapper ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
.wrapper li {
	margin-bottom: 1em;
}
</style>
