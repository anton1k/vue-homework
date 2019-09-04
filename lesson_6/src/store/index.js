import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		info: [
			{
				name: 'Name',
				value: '',
				pattern: /^[a-zA-Z ]{2,30}$/,
				status: false
			},
			{
				name: 'Phone',
				value: '',
				pattern: /^[0-9]{7,14}$/,
				status: false
			},
			{
				name: 'Email',
				value: '',
				pattern: /.+/,
				status: false
			},
			{
				name: 'Some Field 1',
				value: '',
				pattern: /.+/,
				status: false
			},
			{
				name: 'Some Field 2',
				value: '',
				pattern: /.+/,
				status: false
			}
		],
		formSubmited: false,
		formProccess: false
	},
	getters: {
		info(state) {
			return state.info;
		},
		validCnt(state){
			let done = 0;

			for (let i = 0; i < state.info.length; i++) {
				if (state.info[i].status) {
					done++;
				}		
			}
			return done;
		},
		name(state){
			return state.info[0].status ? state.info[0].value : '';
		},
		formSubmited(state) {
			return state.formSubmited;
		},
		formProccess(state) {
			return state.formProccess;
		}
	},
	mutations: {
		setInfoValue(state, date) {
			state.info[date.i].value = date.val;		
		},
		setInfoStatus(state, date) {
			state.info[date.i].status = date.status;
		},
		startSubmit(state){
			state.formProccess = true;
		},
		submitted(state){
			state.formSubmited = true;
			state.formProccess = false;
		}
	},
	actions: {
		submit(store){
			store.commit('startSubmit');

			setTimeout(() => {
				store.commit('submitted');
			}, 1000);
		}
	},
	strict: process.env.NODE_ENV !== 'production'
});