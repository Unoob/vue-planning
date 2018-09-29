import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { mutations } from './mutations';
import { actions } from './actions';

export default new Vuex.Store({
    state: {
        users: [],
        user: {},
        isLogged: false,
        question: ""
    },
    mutations,
    actions,
    getters: {
        isLogged(state) {
            return state.isLogged;
        }
    },
});
