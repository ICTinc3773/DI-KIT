import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInquiryStore = defineStore('inquiry', () => {
	// フォームデータの型を定義
	interface InquiryFormData {
		name: string
		age: string
		email: string
		gender: string
		prefecture: string
		message: string
		privacyPolicy: boolean
		termsOfUse: boolean
		image: File | null
		base64Image: string
	}

	// フォームデータの状態
	const formData = ref<InquiryFormData>({
		name: '',
		age: '',
		email: '',
		gender: '',
		prefecture: '',
		message: '',
		privacyPolicy: false,
		termsOfUse: false,
		image: null,
		base64Image: '',
	})

	/**
	 * フォームデータを部分更新する
	 * @param data 更新するデータ
	 */
	function setFormData(data: Partial<InquiryFormData>) {
		formData.value = { ...formData.value, ...data }
	}

	/**
	 * フォームデータをリセットする
	 */
	function resetFormData() {
		formData.value = {
			name: '',
			age: '',
			email: '',
			gender: '',
			prefecture: '',
			message: '',
			privacyPolicy: false,
			termsOfUse: false,
			image: null,
			base64Image: '',
		}
	}

	return {
		formData,
		setFormData,
		resetFormData,
	}
})
