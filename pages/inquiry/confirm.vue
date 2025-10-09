<template>
	<div class="confirm">
		<div class="confirm--header">
			<h1>確認画面</h1>
		</div>
		<div class="confirm--body">
			<form @submit.prevent="submitForm">
				<div class="confirm-group">
					<label>名前</label>
					<p>{{ inquiryStore.formData.name }}</p>
				</div>

				<div class="confirm-group">
					<label>年齢</label>
					<p>{{ inquiryStore.formData.age || '入力なし' }}</p>
				</div>

				<div class="confirm-group">
					<label>メールアドレス</label>
					<p>{{ inquiryStore.formData.email }}</p>
				</div>

				<div class="confirm-group">
					<label>性別</label>
					<p>{{ inquiryStore.formData.gender }}</p>
				</div>

				<div class="confirm-group">
					<label>都道府県名</label>
					<p>{{ inquiryStore.formData.prefecture }}</p>
				</div>

				<div class="confirm-group">
					<label>メッセージ</label>
					<p>{{ inquiryStore.formData.message || '入力なし' }}</p>
				</div>

				<div class="confirm-group">
					<label>個人情報保護方針</label>
					<p>
						{{ inquiryStore.formData.privacyPolicy ? '同意済み' : '未同意' }}
					</p>
				</div>

				<div class="confirm-group">
					<label>サイト利用規約</label>
					<p>{{ inquiryStore.formData.termsOfUse ? '同意済み' : '未同意' }}</p>
				</div>

				<div>
					<label>アップロード画像</label>
					<img v-if="inquiryStore.formData.base64Image" :src="inquiryStore.formData.base64Image" alt="アップロード画像" class="uploaded-image" />
					<p v-else>入力なし</p>
				</div>

				<div class="button-group">
					<button type="button" @click="goBack" class="back-button">戻る</button>
					<button type="submit" class="submit-button">送信</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useInquiryStore } from '~/stores/inquiryStore'

const router = useRouter()
const inquiryStore = useInquiryStore()

const goBack = () => {
	router.push('/inquiry')
}

const submitForm = () => {
	// 本番環境ではサーバーにデータを送信する処理を追加
	router.push('/inquiry/completed')
}
</script>

<style lang="scss" scoped>
.confirm {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	font-family: Arial, sans-serif;

	h1 {
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 20px;
	}

	.confirm-group {
		margin-bottom: 15px;

		label {
			font-weight: bold;
			display: block;
			margin-bottom: 5px;
		}

		p {
			margin: 0;
			padding: 8px;
			background-color: #f9f9f9;
			border: 1px solid #ddd;
			border-radius: 4px;
		}
	}

	.uploaded-image {
		max-width: 100%;
		height: auto;
		display: block;
		margin-top: 10px;
	}

	.button-group {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;

		button {
			padding: 10px 20px;
			font-size: 1rem;
			border: none;
			border-radius: 4px;
			cursor: pointer;

			&.back-button {
				background-color: #6c757d;
				color: white;

				&:hover {
					background-color: #5a6268;
				}
			}

			&.submit-button {
				background-color: #007bff;
				color: white;

				&:hover {
					background-color: #0056b3;
				}
			}
		}
	}
}
</style>
