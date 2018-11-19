import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import store from './store/index';

function load(name) {
    return () => import(/* webpackChunkName: "v-[request]" */`./components/${name}.vue`);
}

const routes = [
    { path: '/login', component: load('Login')},
    {
        path: '/', component: load('Home/MasterPage'),
        beforeEnter: (to, from, next) => {
            if (store.getters.isLogged) {
                next();
            } else {
                next('/login');
            }
        },
        children: [
            { path: 'question', component: load('Request/NewVote') },
            { path: 'group', component: load('Response/Answer') },
        ]
    },
    { path: '/:room', component: load('Login'), props: true },
    { path: '*', redirect: '/login' }
];
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
});

export default router;