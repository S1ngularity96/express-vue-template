var install = function (Vue, options) {
    const store = options.store;
    const methods = {
         success: function (msg) {
              store.commit('pushMsgToSnackbar', msg);
              store.commit('changeSnackbarType', 'success');
              store.commit('showSnackbar');
         },
         info: function (msg) {
              store.commit('pushMsgToSnackbar', msg);
              store.commit('changeSnackbarType', 'info');
              store.commit('showSnackbar');
         },
         error: function (msg) {
              store.commit('pushMsgToSnackbar', msg);
              store.commit('changeSnackbarType', 'error');
              store.commit('showSnackbar');
         },
         errorserverconnection: function () {
              store.commit('pushMsgToSnackbar', 'Connection to server failed');
              store.commit('changeSnackbarType', 'error');
              store.commit('showSnackbar');
         },
         missingfeature: function () {
              store.commit('pushMsgToSnackbar', 'The setting or action is not available');
              store.commit('changeSnackbarType', 'error');
              store.commit('showSnackbar');
         },
         errorhandle: function (err) {
              if (typeof err.message !== 'undefined') {
                   this.error(err.message)
              } else {
                   this.errorserverconnection()

              }
         }
    }
    Vue.prototype.$snackbar = methods;
}

export default {
    install
}
