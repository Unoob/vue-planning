import Vue from 'vue';

import store from './store/index';
import router from './router';
import { icons } from './icons';

import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';

Vue.use(Vuetify, icons);

import App from './components/App.vue';

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app-root');
