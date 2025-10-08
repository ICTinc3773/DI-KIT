<template>
	<section class="inquiry">
		<div class="container">
			<header class="inquiry--header">
				<header>
					<PageTitle title-text="フォーム画面サンプル" />
					<p>このページはDI-KIT内でBootstrap5を使用し、CSS命名規則を混在させても安全であることを示すサンプルです。</p>
					<p>
						不要な場合に削除しやすいようBootstrapのコアファイルはCDNで読み込んでいますが、実際に使用する場合は<a href="https://www.npmjs.com/package/bootstrap/v/5.0.0-alpha1">npm install</a
						>を推奨しています。
					</p>
				</header>
			</header>
			<div class="inquiry--body">
				<!-- フォーム全体 -->
				<form @submit.prevent="onSubmit">
					<!-- 名前フィールド -->
					<div class="form-group">
						<label for="name">名前<span class="required">*</span></label>
						<!-- 入力フィールド -->
						<Field name="name" type="text" id="name" class="form-control" />
						<!-- バリデーションエラー表示 -->
						<ErrorMessage name="name" class="error-message" />
					</div>

					<!-- 年齢フィールド -->
					<div class="form-group">
						<label for="age">年齢</label>
						<!-- 数値入力用フィールド -->
						<Field name="age" type="text" id="age" class="form-control" />
						<!-- バリデーションエラー表示 -->
						<ErrorMessage name="age" class="error-message" />
					</div>

					<!-- メールアドレスフィールド -->
					<div class="form-group">
						<label for="email">メールアドレス<span class="required">*</span></label>
						<!-- メール入力フィールド -->
						<Field name="email" type="email" id="email" class="form-control" />
						<!-- バリデーションエラー表示 -->
						<ErrorMessage name="email" class="error-message" />
					</div>

					<!-- 性別フィールド -->
					<div class="form-group">
						<label>性別<span class="required">*</span></label>
						<div class="inline-group">
							<!-- 男性選択 -->
							<Field name="gender" type="radio" value="男性" id="male" />
							<label for="male">男性</label>
							<!-- 女性選択 -->
							<Field name="gender" type="radio" value="女性" id="female" />
							<label for="female">女性</label>
						</div>
						<!-- バリデーションエラー表示 -->
						<ErrorMessage name="gender" class="error-message" />
					</div>

					<!-- 都道府県選択 -->
					<div class="form-group">
						<label for="prefecture">都道府県名<span class="required">*</span></label>
						<!-- ドロップダウン選択 -->
						<Field name="prefecture" as="select" id="prefecture" class="form-control">
							<option value="" disabled>選択してください</option>
							<!-- 各都道府県の選択肢 -->
							<option value="北海道">北海道</option>
							<!-- 以下省略 -->
						</Field>
						<!-- バリデーションエラー表示 -->
						<ErrorMessage name="prefecture" class="error-message" />
					</div>

					<!-- メッセージフィールド -->
					<div class="form-group">
						<label for="message">メッセージ</label>
						<!-- テキストエリア -->
						<Field name="message" as="textarea" id="message" class="form-control" />
						<!-- バリデーションエラー表示 -->
						<ErrorMessage name="message" class="error-message" />
					</div>

					<!-- 同意確認フィールド -->
					<fieldset class="form-group">
						<legend>同意確認<span class="required">*</span></legend>
						<div class="inline-group">
							<!-- プライバシーポリシーの同意チェック -->
							<Field name="privacyPolicy" type="checkbox" id="privacyPolicy" :value="true" :unchecked-value="false" />
							<label for="privacyPolicy">個人情報保護方針に同意する</label>
						</div>
						<div class="inline-group">
							<!-- 利用規約の同意チェック -->
							<Field name="termsOfUse" type="checkbox" id="termsOfUse" :value="true" :unchecked-value="false" />
							<label for="termsOfUse">サイト利用規約に同意する</label>
						</div>
						<!-- バリデーションエラー表示 -->
						<ErrorMessage name="privacyPolicy" class="error-message" />
						<ErrorMessage name="termsOfUse" class="error-message" />
					</fieldset>

					<!-- 画像ファイルアップロード -->
					<div class="form-group">
						<label for="image">画像ファイル</label>
						<!-- ファイル選択 -->
						<Field name="image" type="file" id="image" class="form-control" @change="(e) => validateFile(e)" />

						<!-- 選択済みファイル名と削除ボタン -->
						<div v-if="getUploadedFileName()">
							<p>選択済みファイル： {{ getUploadedFileName() }}</p>
							<button @click="removeFile">削除</button>
						</div>

						<!-- バリデーションエラー表示 -->
						<ErrorMessage name="image" class="error-message" />
					</div>

					<!-- 送信ボタン -->
					<div class="form-group">
						<button type="submit" class="submit-button">確認画面へ</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useInquiryStore } from '@/stores/inquiryStore'
import { useRouter } from 'vue-router'

// ストアとルーターのセットアップ
const inquiryStore = useInquiryStore()
const router = useRouter()

// ファイル削除関数
const removeFile = () => {
	setFieldValue('image', null)
	const fileInput = document.getElementById('image') as HTMLInputElement
	if (fileInput) {
		fileInput.value = '' // <input type="file> の値をリセット
	}
}

// スキーマ定義（バリデーション用）
const schema = yup.object({
	name: yup.string().required('名前は必須項目です。'),
	age: yup
		.number()
		.nullable()
		.transform((value, originalValue) => {
			return originalValue === '' ? null : value
		})
		.typeError('年齢は数字で入力してください。'),
	email: yup.string().required('メールアドレスは必須項目です。').email('正しいメールアドレスを入力してください。'),
	gender: yup.string().required('性別を選択してください。'),
	prefecture: yup.string().required('都道府県を選択してください。'),
	message: yup.string(),
	privacyPolicy: yup.boolean().oneOf([true], '個人情報保護方針に同意してください。'),
	termsOfUse: yup.boolean().oneOf([true], 'サイト利用規約に同意してください。'),
	image: yup
		.mixed()
		.nullable()
		.test('fileType', '画像ファイルのみアップロード可能です。', (value) => {
			if (!value || !(value instanceof File)) return true
			const fileType = value.type
			return fileType.startsWith('image/')
		}),
})

// フォームセットアップ
const { handleSubmit, values, setFieldValue } = useForm({
	validationSchema: schema,
	initialValues: inquiryStore.formData,
})

// ファイル名取得関数
const getUploadedFileName = () => {
	const file = values.image
	if (file instanceof File) {
		return file.name
	}
	return null
}

// ファイルをBase64に変換
async function convertFileToBase64(file: Blob) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				resolve(reader.result)
			} else {
				reject(new Error('File is not image'))
			}
		}
		reader.onerror = (error) => reject(error)
		reader.readAsDataURL(file)
	})
}

// フォーム送信処理
const onSubmit = handleSubmit(async (validatedValues) => {
	let submitData = validatedValues

	// 画像ファイルをBase64に変換
	if (validatedValues.image) {
		const base64Image = await convertFileToBase64(validatedValues.image)
		if (typeof base64Image === 'string') {
			submitData = {
				...validatedValues,
				base64Image: base64Image,
			}
		}
	} else {
		submitData = {
			...submitData,
			image: null,
			base64Image: '',
		}
	}

	// ストアにデータを保存し確認画面へ遷移
	inquiryStore.setFormData(submitData)
	router.push('/inquiry/confirm')
})

// ファイル検証関数
const validateFile = (event: Event) => {
	const file = (event.target as HTMLInputElement)?.files?.[0]
	// ファイルが画像でない場合の警告
	if (file && !file.type.startsWith('image/')) {
		alert('画像ファイルのみアップロード可能です。')
	}
}
</script>

<style lang="scss" scoped>
.inquiry {
	h1 {
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 20px;
	}

	.form-group {
		margin-bottom: 15px;

		label {
			display: block;
			font-weight: bold;
			margin-bottom: 5px;
		}

		.required {
			color: red;
		}

		.form-control {
			width: 100%;
			padding: 8px;
			border: 1px solid #ccc;
			border-radius: 4px;
			font-size: 16px;
			box-sizing: border-box;

			&:focus {
				border-color: #007bff;
				outline: none;
			}
		}

		.error-message {
			color: red;
			margin-top: 5px;
		}
	}

	.inline-group {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
		cursor: pointer;

		* {
			cursor: pointer;
		}

		input {
			margin: 0;
		}

		label {
			margin: 0;
		}
	}

	fieldset {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 10px;
		margin-bottom: 15px;

		legend {
			font-size: 16px;
			font-weight: bold;
			padding: 0 5px;
		}

		div {
			margin-bottom: 10px;
		}

		label {
			margin-left: 5px;
		}
	}

	.submit-button {
		display: block;
		width: 100%;
		padding: 10px;
		font-size: 16px;
		font-weight: bold;
		color: #fff;
		background-color: #007bff;
		border: none;
		border-radius: 4px;
		cursor: pointer;

		&:hover {
			background-color: #0056b3;
		}
	}

	@media (max-width: 768px) {
		padding: 10px;

		h1 {
			font-size: 1.25rem;
		}

		.form-control {
			font-size: 0.875rem;
		}

		.submit-button {
			font-size: 0.875rem;
		}
	}
}
</style>
