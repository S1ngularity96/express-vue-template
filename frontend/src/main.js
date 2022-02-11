import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session'
import App from 'src/App.vue'
import router from 'src/router'
import store from 'src/store'
import vuetify from 'src/plugins/vuetify';
import messages from 'src/lang'
import axios from 'src/plugins/axios'
import snackbar from 'src/plugins/snackbar'
import '@/assets/global.scss'

Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.$cookies.config('1y', '', '', false, 'Lax')
Vue.use(VueSession)

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages
}
)

Vue.use(axios)
Vue.use(snackbar, { store })
Vue.use(Vuelidate)

import {getConnectionString} from './utils/connections';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

const socket = io(getConnectionString(), {transports: ["websocket"]});
Vue.use(VueSocketIOExt, socket);

const vue = new Vue({
  router,
  store,
  axios,
  i18n,
  VueCookies,
  snackbar,
  vuetify,
  render: h => h(App)
}).$mount('#app')


export default vue;



