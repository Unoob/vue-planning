import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
import { INCREMENT } from './mutation-types';

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        [INCREMENT](state, n) {
            state.count += n;
        }
    }
})

export default store;
