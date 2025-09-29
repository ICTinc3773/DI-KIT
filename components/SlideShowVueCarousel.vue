<template>
	<section class="carousel">
		<div class="carousel--header">
			<header>
				<h2 class="carousel--heading">VueCarouselを用いたスライドショー</h2>
				<p>実装、カスタマイズに関する詳細は<a href="https://ssense.github.io/vue-carousel/">VueCarouselのGitHubページ</a>を参照。</p>
			</header>
		</div>
		<div class="carousel--body">
			<Carousel :config>
				<Slide v-for="(image, index) in slides" :key="index">
					<img :src="image" alt="" />
				</Slide>
			</Carousel>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

const config = ref({
	wrapAround: true,
	snapAlign: 'center',
	breakpointMode: 'carousel',
	breakpoints: {
		1537: {
			itemsToShow: 4,
		},
		1281: {
			itemsToShow: 2.5,
		},
		1025: {
			itemsToShow: 2.5,
		},
		769: {
			itemsToShow: 2.5,
		},
		641: {
			itemsToShow: 1.5,
		},
		0: {
			itemsToShow: 1,
		},
	},
})

const slides = ref([
	'/images/SlideShowVueCarousel/slide1.png',
	'/images/SlideShowVueCarousel/slide2.png',
	'/images/SlideShowVueCarousel/slide3.png',
	'/images/SlideShowVueCarousel/slide4.png',
	'/images/SlideShowVueCarousel/slide5.png',
	'/images/SlideShowVueCarousel/slide6.png',
	'/images/SlideShowVueCarousel/slide7.png',
	'/images/SlideShowVueCarousel/slide8.png',
	'/images/SlideShowVueCarousel/slide9.png',
])
</script>

<style lang="scss" scoped>
.carousel {
	height: auto;
}
.carousel--header {
	text-align: left;
}
.carousel-slide {
	border: 1px solid #ccc;

	img {
		max-width: 100%;
		height: auto;
	}
}
</style>
