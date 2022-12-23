<!--
Hooperを用いたスライドショー
==================================================

hooperの各種設定方法は https://baianat.github.io/hooper/api.html を参照。
nuxt-imgの各種設定方法は https://image.nuxtjs.org/api/options を参照。
-->
<template>
	<div class="slideshow-hooper">
		<hooper :settings="hooperSettings">
			<slide><img src="/images/SlideShowHooper/slide1.png" alt="" /></slide>
			<slide><img src="/images/SlideShowHooper/slide2.png" alt="" /></slide>
			<slide><img src="/images/SlideShowHooper/slide3.png" alt="" /></slide>
			<slide><img src="/images/SlideShowHooper/slide4.png" alt="" /></slide>
			<slide><img src="/images/SlideShowHooper/slide5.png" alt="" /></slide>
			<slide><img src="/images/SlideShowHooper/slide6.png" alt="" /></slide>
			<slide><img src="/images/SlideShowHooper/slide7.png" alt="" /></slide>
			<slide><img src="/images/SlideShowHooper/slide8.png" alt="" /></slide>
			<slide><img src="/images/SlideShowHooper/slide9.png" alt="" /></slide>
		</hooper>
	</div>
</template>

<script type="ts">
// import Hooper
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
	name: 'SlideshowHooper',
	components: {
		Hooper,
		Slide,
	},
	data() {
		return {
			hooperSettings: {
				infiniteScroll: true,
				wheelControl: false,
				centerMode: true,
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
				}
			}
		}
	},
}
</script>

<style lang="scss" scoped>
::v-deep {
	.hooper {
		height: auto;

		.hooper-slide {
			border: 1px solid #ccc;

			img {
				max-width: 100%;
				height: auto;
			}
		}
	}
}
</style>
