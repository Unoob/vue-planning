import Vue from 'vue';
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
const app = new Vue({router}).$mount('#app-root');