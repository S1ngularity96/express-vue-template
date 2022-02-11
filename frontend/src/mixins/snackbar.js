export default {
	data() {},
	methods: {
		pushSuccessToSnackbar: function(msg) {
			this.$store.commit('pushMsgToSnackbar', msg);
			this.$store.commit('changeSnackbarType', 'success');
			this.$store.commit('showSnackbar');
		},
		pushInfoToSnackbar: function(msg) {
			this.$store.commit('pushMsgToSnackbar', msg);
			this.$store.commit('changeSnackbarType', 'info');
			this.$store.commit('showSnackbar');
		},
		pushErrorToSnackbar: function(msg) {
			this.$store.commit('pushMsgToSnackbar', msg);
			this.$store.commit('changeSnackbarType', 'error');
			this.$store.commit('showSnackbar');
		},
		printErrorServerConntection: function() {
			this.$store.commit('pushMsgToSnackbar', 'Connection to server failed');
			this.$store.commit('changeSnackbarType', 'error');
			this.$store.commit('showSnackbar');
		},
		printMissingFeature: function(){
			this.$store.commit('pushMsgToSnackbar', 'The setting or action is not available');
			this.$store.commit('changeSnackbarType', 'error');
			this.$store.commit('showSnackbar');
		},
		snackbarHandleErrorMessage: function(err){
			if( typeof err.message !== 'undefined'){
				this.pushErrorToSnackbar(err.message)
			}else{
				this.printErrorServerConntection()
			}
		}
	}
};
