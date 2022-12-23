<template>
	<div class="gnav_mb">
		<div id="js-screen_menu--overlay" class="container">

			<div class="menu_btn menu_btn-open" @click="menuOpen">
				<span class="menu_border menu_border-1"></span>
				<span class="menu_border menu_border-2"></span>
				<span class="menu_border menu_border-3"></span>
			</div>

			<div id="js-screen_menu" class="screen_menu">

				<div class="header">
					<div class="logo">
						<span>DI-KIT</span>
					</div>
					<div class="menu_btn menu_btn-close" @click="menuClose">
						<span class="menu_border menu_border-1"></span>
						<span class="menu_border menu_border-2"></span>
						<span class="menu_border menu_border-3"></span>
					</div>	
				</div>

				<div class="body">
					<nav>
						<ul>
							<li><NuxtLink to="/"><span class="text">TOP</span></NuxtLink></li>
							<li><NuxtLink to="/about"><span class="text">ABOUT</span></NuxtLink></li>
							<li><NuxtLink to="/jquery"><span class="text">jQuery</span></NuxtLink></li>
						</ul>
					</nav>
				</div>

			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'GnavMb',
	data() {
		return {
			// ios15 safari バグ対応
			safariBugSupport: {
				scrollPositionY: 0,
			},
		}
	},
	mounted() {
		// ios15 safari バグ対応
		document.querySelector('body').style.position = 'static';
		document.querySelector('body').style.overflow = 'visible';
		document.querySelector('body').style.top = 'auto';
		document.querySelector('html').style.height = 'auto';
		// ios15 safari バグ対応 ここまで 
	},
	methods: {
		menuOpen() {
			this.openWithSafariBugSupport();

			document.querySelector('#js-screen_menu').classList.add('is-open');
			document.querySelector('#js-screen_menu--overlay').classList.add('is-active');
		},
		menuClose() {
			this.closeWithSafariBugSupport();
			
			document.querySelector('#js-screen_menu').classList.remove('is-open');
			document.querySelector('#js-screen_menu--overlay').classList.remove('is-active');
		},
		// ios15 safari バグ対応
		openWithSafariBugSupport() {
			this.safariBugSupport.scrollPositionY = window.scrollY;

			document.querySelector('body').style.position = 'fixed';
			document.querySelector('body').style.zIndex = '-1';
			document.querySelector('body').style.overflow = 'hidden';
			document.querySelector('body').style.top = '-' + this.safariBugSupport.scrollPositionY + 'px';
			document.querySelector('html').style.height = '100vh';
		},
		closeWithSafariBugSupport() {
			document.querySelector('body').style.position = 'static';
			document.querySelector('body').style.overflow = 'visible';
			document.querySelector('body').style.top = 'auto';
			document.querySelector('html').style.height = 'auto';

			window.scrollBy(0, this.safariBugSupport.scrollPositionY);
		}
		// ios15 safari バグ対応 ここまで 
	},
}
</script>

<style lang="scss" scoped>
//////////////////////////////////////////////////////
// スクリーンメニュー
.screen_menu {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	right: -100%;
	z-index: 80;
	background-color: #fff;
	transition: all 400ms 0s ease-in;
	@media screen and (min-width: 468px) {
		width: 80%;
	}
	@media screen and (min-width: 600px) {
		width: 70%;
	}
	@media screen and (min-width: 768px) {
		width: 400px;
	}

	&.is-open {
		right: 0;
		transition: all 500ms 0s ease;
	}
}
.header {
	min-height: 58px;
	padding: 0 5%;
	margin: 0 0 30px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.body {
	padding: 0 5%;

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		row-gap: 1em;
		list-style: none;
	}
	li {
		border-bottom: 1px solid #ccc;
	}
	a {
		text-decoration: none;
		display: block;
		color: #333;
		line-height: 1.5;
		&.nuxt-link-exact-active {
			color: #5E96B2;
		}
	}
}
//////////////////////////////////////////////////////
// メニューボタン
.menu_btn {
	cursor: pointer;
	display: flex;
	width: 32px;
	height: 32px;
	position: relative;

	.menu_border {
		display: inline-block;
		width: 100%;
		height: 2px;
		background-color: #8B8989;
		position: absolute;
	}
}
.menu_btn-open {
	.menu_border-1 {
		top: 20%;
		right: 0;
		transform: translateY(-50%);
	}
	.menu_border-2 {
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}
	.menu_border-3 {
		top: 80%;
		right: 0;
	}
}
.menu_btn-close {
	.menu_border-1 {
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
	}
	.menu_border-2 {
		opacity: 0;
	}
	.menu_border-3 {
		top: 50%;
		transform: translateY(-50%) rotate(-45deg);
	}
}
//////////////////////////////////////////////////////
// オーバーレイ
.container {
	cursor: initial;
	&.is-active {
		&::before {
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			background: rgba($color: #8f8f8f, $alpha: .4);
			z-index: 30;
			position: fixed;
			top: 0;
			right: 0;
		}
	}
}
</style>