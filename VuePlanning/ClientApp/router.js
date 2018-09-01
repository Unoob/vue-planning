import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vote from './components/NewVote.vue';

const routes = [
    { path: '/', component: Vote }
];
const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;