import 'babel-polyfill';
import Vue from 'vue';

import  store  from './store/index';
import router from './router';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import App from './components/App.vue';

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-root');