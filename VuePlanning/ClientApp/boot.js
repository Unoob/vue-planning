import 'babel-polyfill'
import Vue from 'vue';

import store from './store/store';

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './components/App.vue';

const routes = [
    { path: '/', component: App }
];
const router = new VueRouter({
    routes,
    mode: 'history'
});
const app = new Vue({ router, store }).$mount('#app-root');