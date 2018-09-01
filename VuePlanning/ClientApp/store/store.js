import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { INCREMENT } from './mutation-types';

const store = new Vuex.Store({
    state: {
        count: 0,
        users: []
    },
    mutations: {
        [INCREMENT](state, n) {
            state.count += n;
        },
        decrement(state) {
            state.count--;
        }
    }
})

export default store;
