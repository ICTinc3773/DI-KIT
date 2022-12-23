<template>
	<div class="gnav_pc">
		<ul>
			<li><NuxtLink to="/"><font-awesome-icon icon="house" /><span>TOP</span></NuxtLink></li>
			<li><NuxtLink to="/about"><font-awesome-icon icon="building" /><span>ABOUT</span></NuxtLink></li>
			<li><NuxtLink to="/jquery">jQuery</NuxtLink></li>
			<li><NuxtLink to="/inquiry"><font-awesome-icon icon="envelope" /><span>CONTACT US</span></NuxtLink></li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'GnavPc',
})
</script>

<style lang="scss" scoped>
ul {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin: 0;
	padding: 0;
	list-style: none;
}
li {
	flex: 1;

	& + li {
		border-left: 1px solid #fff;
	}
}
a {
	display: block;
	padding: 0.6em 0.4em;
	text-align: center;
	background: #ccc;
	color: #333;
	text-decoration: none;

	&.nuxt-link-exact-active {
		background: #fcc;
	}

	& > span {
		margin-left: 0.2em;
	}
}
</style>
