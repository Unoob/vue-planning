import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from './components/Login.vue';
import MasterPage from './components/MasterPage.vue';
import NewVote from './components/NewVote.vue';
import Answer from './components/Answer.vue';
import { store } from './store/Store';

const routes = [
    { path: '/login', component: Login },
    {
        path: '/', component: MasterPage,
        beforeEnter: (to, from, next) => {
            if (store.getters.isLogged) {
                next();
            } else {
                next('/login');
            }
        },
        children: [
            { path: 'question', component: NewVote },
            { path: 'group/:id', component: Answer },
        ]
    },
    { path: '*', redirect: '/login' }
];
const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;