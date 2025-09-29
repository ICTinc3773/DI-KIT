<template>
	<div class="accordion_list">
		<button type="button" class="accordion_list--title" @click="listToggle">
			{{ titleText }}
		</button>
		<ul ref="list" class="accordion_list--list">
			<slot>
				<li>&lt;li&gt;タグを内包して使用します</li>
			</slot>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

// Props
const props = defineProps({
	titleText: {
		type: String,
		required: true,
	},
	duration: {
		type: [String, Number],
		required: false,
		default: '200',
	},
})

// References
const list = ref<HTMLUListElement | null>(null)

// Methods
function listToggle(event: Event) {
	if (!list.value) return

	const animateDuration = parseInt(props.duration as string) // props.duration を参照
	let listHeight = 0

	if (list.value.classList.contains('is-open')) {
		list.value.classList.remove('is-open')

		listHeight = list.value.offsetHeight
		list.value.style.height = '0'

		list.value.animate([{ height: `${listHeight}px` }, { height: '0' }], {
			duration: animateDuration,
		})
	} else {
		list.value.classList.add('is-open')

		list.value.style.height = 'auto'
		listHeight = list.value.offsetHeight
		list.value.style.height = '0'

		list.value.animate([{ height: '0' }, { height: `${listHeight}px` }], {
			duration: animateDuration,
		})
		list.value.style.height = 'auto'
	}
}
</script>

<style lang="scss" scoped>
.accordion_list {
	height: 100%;
}
.accordion_list--title {
	width: 100%;
	height: 100%;
	padding: 0;
	background-color: #fff;
	font-size: 1em;
	text-align: left;
	border-radius: 6px;
	padding: 0.6em;
	position: relative;
	cursor: pointer;
}
:deep(.accordion_list--list) {
	height: 0;
	padding: 0;
	overflow: hidden;
	transition: all 1000ms 0ms ease;

	li {
		padding: 0.4em;
		margin-bottom: 0.2em;
		border-bottom: 1px dashed #ccc;
	}
}
</style>
