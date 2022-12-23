<template>
	<div id="inquiryConfirm">
		<table v-if="'email' in inquiry">
			<tbody>
				<tr>
					<th>名前</th>
					<td id="name">{{inquiry.data.name}}</td>
				</tr>
				<tr>
					<th>年齢</th>
					<td id="age">{{inquiry.data.age}}</td>
				</tr>
				<tr>
					<th>メールアドレス</th>
					<td id="email">{{inquiry.email}}</td>
				</tr>
				<tr>
					<th>性別</th>
					<td id="gender">{{inquiry.data.gender}}</td>
				</tr>
				<tr>
					<th>都道府県名</th>
					<td id="prefName">{{inquiry.data.prefName}}</td>
				</tr>
				<tr>
					<th>メッセージ</th>
					<td id="message">{{inquiry.data.message}}</td>
				</tr>
				<tr>
					<th>添付ファイル</th>
					<td id="file">{{inquiry.file.name}}</td>
				</tr>
			</tbody>
		</table>
		<button id="submit" type="button" @click="submitInquiry">Submit</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'InquiryConfirmPage',
	head: {
		title: 'お問い合わせ 送信内容のご確認',
	},
	computed: {
		inquiry() {
			return this.$store.getters['inquiry/inquiry'];
		}
	},
	methods: {
		async submitInquiry() {
			await this.$store.dispatch('inquiry/submitInquiry')
				.then(async (response) => {
					console.dir(response);

					if (response.status === 200) {
						this.$router.push('/inquiry/completed');
					}
					else if(response.status === 202) {
						await this.$store.commit('inquiry/errors', response.data.errors);
						await this.$router.back();
					}
					else {
						for(let i=0; i<response.data.errors.length; i++) {
							this.$nuxt.error({
								statusCode:response.data.errors[i].status,
								message:response.data.errors[i].message
							});
						}
					}
				})
				.catch((error:{status:number,data: {errors: [{message: string}]}}) => {
					if (error.status === 404) {
						this.$nuxt.error({
							statusCode: error.status,
							message:'APIのエンドポイントが存在しないかパスの指定を間違えています'
						});
					} else {
						this.$nuxt.error({
							statusCode: error.status,
							message: error.data.errors[0].message ? error.data.errors[0].message : 'APIが正常に応答しませんでした'
						});
					}
				});
		}
	}
});
</script>

<style lang="scss" scoped>
	td {
		white-space: pre;
	}
</style>
