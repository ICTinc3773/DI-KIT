<template>
	<div>
		<div v-for="(error, index) in errors" id="errorMessage" :key="index">
			<p class="error_message">{{error.message}}</p>
		</div>

		<validationObserver tag="div" ref="form">
			<form @submit.prevent="onSubmit" method="post">

				<!-- 1行テキスト：必須 -->
				<div class="form_group">
					<label for="name">名前</label>
					<validation-provider
						v-slot="{ errors }"
						rules="required"
						name="名前">
						<input
							id="name"
							v-model="inquiry.data.name"
							type="text"
							name="name"
							autocomplete="true"
							placeholder="名前を入力してください">
						<span class="error_message">{{ errors[0] }}</span>
					</validation-provider>
				</div>

				<!-- 1行テキスト：任意：数字のみ -->
				<div class="form_group">
					<label for="age">年齢</label>
					<validation-provider
						v-slot="{ errors }"
						rules="numeric"
						name="年齢">
						<input
							id="age"
							v-model="inquiry.data.age"
							type="text"
							name="age"
							autocomplete="true"
							placeholder="20">
						<span class="error_message">{{ errors[0] }}</span>
					</validation-provider>
				</div>

				<!-- 1行テキスト：必須：メールアドレス -->
				<div class="form_group">
					<label for="email">メールアドレス</label>
					<validation-provider
						v-slot="{ errors }"
						rules="required|email"
						name="メールアドレス">
						<input
							id="email"
							v-model="inquiry.email"
							type="email"
							name="email"
							autocomplete="true"
							placeholder="返信先メールアドレスを入力してください">
						<span class="error_message">{{ errors[0] }}</span>
					</validation-provider>
				</div>

				<!-- ラジオボタン：いずれか必須 -->
				<div class="form_group">
					<fieldset>
						<legend>性別</legend>
						<validation-provider
							v-slot="{ errors }"
							rules="required"
							name="性別">

							<input
								id="male"
								v-model="inquiry.data.gender"
								type="radio"
								name="gender"
								value="男性">
							<label for="male">男性</label>

							<input
								id="female"
								v-model="inquiry.data.gender"
								type="radio"
								name="gender"
								value="女性">
							<label for="female">女性</label>

							<input
								id="other"
								v-model="inquiry.data.gender"
								type="radio"
								name="gender"
								value="その他">
							<label for="other">その他</label>

							<span class="error_message">{{ errors[0] }}</span>
						</validation-provider>
					</fieldset>
				</div>

				<!-- セレクトボックス：必須 -->
				<div class="form-g">
					<label for="prefName">都道府県名</label>
					<validation-provider
						v-slot="{ errors }"
						rules="required"
						name="都道府県名">
						<select
							id="prefName"
							v-model="inquiry.data.prefName"
							name="prefName">
							<option value="" selected disabled>都道府県を選択</option>
							<option value="北海道">北海道</option>
							<option value="青森県">青森県</option>
							<option value="岩手県">岩手県</option>
							<option value="宮城県">宮城県</option>
							<option value="秋田県">秋田県</option>
							<option value="山形県">山形県</option>
							<option value="福島県">福島県</option>
							<option value="茨城県">茨城県</option>
							<option value="栃木県">栃木県</option>
							<option value="群馬県">群馬県</option>
							<option value="埼玉県">埼玉県</option>
							<option value="千葉県">千葉県</option>
							<option value="東京都">東京都</option>
							<option value="神奈川県">神奈川県</option>
							<option value="新潟県">新潟県</option>
							<option value="富山県">富山県</option>
							<option value="石川県">石川県</option>
							<option value="福井県">福井県</option>
							<option value="山梨県">山梨県</option>
							<option value="長野県">長野県</option>
							<option value="岐阜県">岐阜県</option>
							<option value="静岡県">静岡県</option>
							<option value="愛知県">愛知県</option>
							<option value="三重県">三重県</option>
							<option value="滋賀県">滋賀県</option>
							<option value="京都府">京都府</option>
							<option value="大阪府">大阪府</option>
							<option value="兵庫県">兵庫県</option>
							<option value="奈良県">奈良県</option>
							<option value="和歌山県">和歌山県</option>
							<option value="鳥取県">鳥取県</option>
							<option value="島根県">島根県</option>
							<option value="岡山県">岡山県</option>
							<option value="広島県">広島県</option>
							<option value="山口県">山口県</option>
							<option value="徳島県">徳島県</option>
							<option value="香川県">香川県</option>
							<option value="愛媛県">愛媛県</option>
							<option value="高知県">高知県</option>
							<option value="福岡県">福岡県</option>
							<option value="佐賀県">佐賀県</option>
							<option value="長崎県">長崎県</option>
							<option value="熊本県">熊本県</option>
							<option value="大分県">大分県</option>
							<option value="宮崎県">宮崎県</option>
							<option value="鹿児島県">鹿児島県</option>
							<option value="沖縄県">沖縄県</option>
						</select>
						<span class="error_message">{{ errors[0] }}</span>
					</validation-provider>
				</div>

				<!-- テキストエリア：任意 -->
				<div class="form_group">
					<label for="message">メッセージ</label>
					<textarea
						id="message"
						v-model="inquiry.data.message"
						name="message"
						cols="30"
						rows="10">
					</textarea>
				</div>

				<!-- チェックボックス：すべて必須 -->
				<div class="form_group">
					<fieldset>
						<legend>同意確認</legend>
						<validation-provider
							v-slot="{ errors }"
							rules="required"
							name="個人情報方針の同意">
							<input
								id="privacy"
								v-model="inquiry.data.agreements.privacy"
								type="checkbox"
								name="agreements"
								value="個人情報保護方針に同意する">
							<label for="privacy">個人情報保護方針に同意する</label>
							<span class="error_message">{{ errors[0] }}</span>
						</validation-provider>

						<validation-provider
							v-slot="{ errors }"
							rules="required"
							name="サイト利用規約の同意">
							<input
								id="regal"
								v-model="inquiry.data.agreements.regal"
								type="checkbox"
								name="agreements"
								value="サイト利用規約に同意する">
							<label for="regal">サイト利用規約に同意する</label>
							<span class="error_message">{{ errors[0] }}</span>
						</validation-provider>
					</fieldset>
				</div>

				<!-- ファイルアップロード：任意：画像ファイルのみ -->
				<div class="form_group">
					<label for="file">画像ファイル</label>
						<validation-provider
							ref="file"
							v-slot="{ errors }"
							rules="mimes:image/*"
							name="画像ファイル">
							<input
								id="file"
								type="file"
								name="file"
								@change="onFileUpload">
							<span class="error_message">{{ errors[0] }}</span>
						</validation-provider>
				</div>

				<div class="form_submit">
					<button id="submit" type="submit">確認画面へ</button>
				</div>
			</form>
		</validationObserver>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

// 問い合わせデータのTypeScript型定義
interface InquiryData {
	inquiry: {
		email: string,
		subject: string,
		sender: string | null,
		recaptchaToken: string,
		data: {
			name: string,
			age: 0 | null,
			gender: string,
			agreements: {
				privacy: [],
				regal: []
			},
			prefName: string
			message: string,
		},
		fileKey?: string,
		file: string | Blob
	},
	errors: []
}

export default Vue.extend({
	name: 'InquiryInputPage',
	components: {
		ValidationProvider,
		ValidationObserver
	},
	data(): InquiryData {
		return {
			inquiry: {
				email: '',
				subject: '',
				sender: '',
				recaptchaToken: '',
				data: {
					name: '',
					age: null,
					gender: '',
					agreements: {
						privacy: [],
						regal: []
					},
					message: '',
					prefName: ''
				},
				fileKey: '',
				file: ''
			},
			errors: []
		}
	},
	head: {
		title: 'お問い合わせ',
	},
	async mounted() {
		this.inquiry = this.$store.getters['inquiry/inquiry'].length > 0 ? this.$store.getters['inquiry/inquiry'] : this.inquiry;
		this.errors = this.$store.getters['inquiry/errors'];

		try {
			await (this as any).$recaptcha.init();
			(this.$refs.observer as InstanceType<typeof ValidationObserver>);
		} catch(error) {
			console.error(error);
		}
	},
	beforeDestroy() {
		(this as any).$recaptcha.destroy();
	},
	methods: {
		/**
		 * 送信後に各フォームの内容をリセットさせる処理
		 */
		resetForm() {
			// data内で不定形に変化する入力フォームの内容をリセット（適宜編集）
			this.inquiry.data.name = this.inquiry.data.gender = this.inquiry.data.prefName = this.inquiry.data.message = '';
			this.inquiry.data.age = null;
			this.inquiry.data.agreements.privacy = this.inquiry.data.agreements.regal = [];

			// 以下変更不可（subjectとsenderは常時定数の想定のためクリアしない）
			this.inquiry.email = this.inquiry.recaptchaToken =  this.inquiry.file= '';
			this.$nextTick()
				.then(() => {
					(this.$refs.form as InstanceType<typeof ValidationObserver>).reset();
				});
		},
		/**
		 * 画像アップロード時に実行するイベントハンドラ
		 */
		async onFileUpload(event:any) {
			// this.$refs.file の末尾「file」は <validation-provider ref=""> で指定したrefの値と一致させる
			const { valid }:any = await (this.$refs.file as InstanceType<typeof ValidationObserver>).validate(event);

			// バリデーション通過後の処理
			if (valid) {
				this.inquiry.file = event.target.files[0];
			}
		},
		/**
		 * 添付ファイルのアップロード処理
		 */
		fileSave() {
			const formData = new FormData();
			formData.append('file', this.inquiry.file);

			return this.$axios.post(
				'/api/uploadAttachedFile',
				// 'http://test5.ictinc.co.jp/api/testFileUpload.php',
				formData,
				{
					headers: {
						'content-type': 'multipart/form-data'
					}
				}
			)
				.then((response: {data: {fileKey:string}}) => {
					// 送信成功時の処理
					console.log(response);

					this.inquiry.fileKey = response.data.fileKey;
				})
				.catch((error) => {
					throw error.response;
				});
		},
		/**
		 * フォーム送信時に実行するイベントハンドラ
		 */
		onSubmit() {
			try {
				(this.$refs.form as InstanceType<typeof ValidationObserver>).validate().then(async success => {
					// バリデーション失敗時の挙動
					if (!success) {
						return;
					}

					/**
					 * reCAPTCHAのトークン
					 */
					this.inquiry.recaptchaToken = await (this as any).$recaptcha.execute('login');

					await this.fileSave()
						.then(async () => {
							await this.$store.dispatch('inquiry/setInquiry', this.inquiry);
							await this.$router.push('/inquiry/confirm');
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

					/**
					 * @todo 送信後に各フォームの内容をリセットさせる処理の実行は送信完了処理の後に移動させる
					 */
					// 送信後に各フォームの内容をリセット
					// await this.resetForm();
				});

			} catch (error) {
				console.error(error);
			}
		},
	},
});
</script>

<style lang="scss" scoped>
.form_group {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}
.error_message {
	color: red;
}
</style>
