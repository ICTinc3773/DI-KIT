import axios from 'axios';

export const state = () => ({
	inquiry: {
		fileKey: ''
	},
	file: '',
	errors: []
});

export const getters = {
	inquiry: (state) => {
		return state.inquiry;
	},
	errors: (state) => {
		return state.errors;
	}
}

export const mutations = {
	inquiry(state, payload) {
		state.inquiry = payload;
	},
	errors(state, payload) {
		state.errors = payload;
	}
}

export const actions = {
	setInquiry({ commit }, inquiry) {
		return new Promise((resolve) => {
			commit('inquiry', inquiry);
			resolve();
		})
	},
	submitInquiry({ state }) {
		return axios.post(
			'/api/sendEmail',
			JSON.stringify(state.inquiry),
			{
				headers: {
					'content-type': 'application.json'
				}
			}
		)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			throw error.response;
		});
	}
}
