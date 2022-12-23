<template>
	<div class="page_title">
		<header>
			<h1>
				<slot>{{ titleText }}</slot>
			</h1>
		</header>
	</div>
</template>

<script>
export default {
	name: 'PageTitle',
	props: {
		titleText: {
			type: String,
			required: false,
			default: '',
		},
	},
}
</script>
