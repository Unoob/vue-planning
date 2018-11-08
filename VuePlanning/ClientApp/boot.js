import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('fa', FontAwesomeIcon)

import store from './store/index'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import App from './components/App.vue'

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app-root')
