<template>
	<div class="accordion_list">
		<button type="button" class="list_title" @click="listToggle">{{ titleText }}</button>
		<ul>
			<slot>
				<li>&lt;li&gt;タグを内包して使用します</li>
			</slot>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'AccordionList',
	props: {
		titleText: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			required: false,
			default: '200',
		}
	},
	methods: {
		listToggle(event) {
			const list = event.target.nextElementSibling;
			const animateDuration = parseInt(this.duration);
			let listHeight = 0;

			if(list.classList.contains('is-open') === true) {
				list.classList.remove('is-open');

				listHeight = list.offsetHeight;
				list.style.height = 0;

				list.animate(
					[
						{ height: listHeight + 'px' },
						{ height: 0 }
						
					],
					{
						duration: animateDuration,
					}
				);
			} else {
				list.classList.add('is-open');

				list.style.height = 'auto';
				listHeight = list.offsetHeight;
				list.style.height = listHeight + 'px';

				list.animate(
					[
						{ height: 0 },
						{ height: listHeight + 'px' }
					],
					{
						duration: animateDuration,
					}
				);
				list.style.height = 'auto';
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.accordion_list {
	height: 100%;
}
button {
	width: 100%;
	height: 100%;
	padding: 0;
	background-color: #fff;
	font-size:1em;
	text-align: left;
	border: none;
	position: relative;
	cursor: pointer;
}
ul {
	height: 0;
	padding: 0;
	overflow: hidden;
	transition: all 1000ms 0ms ease;
}
</style>