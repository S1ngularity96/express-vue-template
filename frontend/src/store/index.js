import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isMobile: true,
		isLoggedIn: false,
		snackbarmsg: '',
		snackbartype: '',
		displaySnackbar: false,
		powerOff : {
			dialog : false,
			cmd : ''
		}
	},

	mutations: {
		changeSreenSize(state, screen) {
			state.isMobile = screen;
		},
		changeLoginState(state, loginStatus) {
			state.isLoggedIn = loginStatus;
		},
		pushMsgToSnackbar(state, msg) {
			state.snackbarmsg = msg;
		},
		changeSnackbarType(state, type) {
			state.snackbartype = type;
		},
		showSnackbar(state) {
			state.displaySnackbar = true;
		},
		closeSnackbar(state) {
			state.displaySnackbar = false;
		},
		triggerPowerOff(state, poweroff) {
			state.powerOff.cmd = poweroff.cmd;
			state.powerOff.dialog = poweroff.dialog;
		}
	},
	getters: {
		isMobile: (state) => {
			return state.isMobile;
		},
		isLoggedIn: (state) => {
			return state.isLoggedIn;
		},
		snackbarMessage: (state) => {
			return state.snackbarmsg;
		},
		snackbarType: (state) => {
			return state.snackbartype;
		},
		snackbarDisplay: (state) => {
			return state.displaySnackbar;
		},
		powerOff : (state) => {
			return {dialog : state.powerOff.dialog, cmd : state.powerOff.cmd}
		}
	},
	actions: {},
	modules: {}
});
