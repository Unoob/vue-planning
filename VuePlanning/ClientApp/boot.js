import 'babel-polyfill';
import Vue from 'vue';

import store from './store/store';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './components/App.vue';
import Home from './components/Home.vue';

const routes = [
    { path: '/', component: Home }
];
const router = new VueRouter({
    routes,
    mode: 'history'
});
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-root');