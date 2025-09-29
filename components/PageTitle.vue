<template>
	<div class="page_title">
		<h1>
			<slot>{{ titleText }}</slot>
		</h1>
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
