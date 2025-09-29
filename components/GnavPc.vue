<template>
	<div class="gnav_pc">
		<ul>
			<li>
				<NuxtLink to="/">
					<font-awesome :icon="['fas', 'house']" />
					<span>TOP</span>
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/about">
					<font-awesome :icon="['fas', 'building']" />
					<span>ABOUT</span>
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/jquery">
					<font-awesome :icon="['fas', 'scroll']" />
					<span>with jQuery</span>
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/inquiry">
					<font-awesome :icon="['fas', 'envelope']" />
					<span>CONTACT US</span>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
// No additional logic is needed as this is a simple presentational component.
</script>

<style scoped>
.gnav_pc ul {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	gap: 1em;
}
.gnav_pc li {
	display: inline-block;
}
.gnav_pc a {
	text-decoration: none;
	color: inherit;
	display: flex;
	align-items: center;
	gap: 0.5em;
}
</style>

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
