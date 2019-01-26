import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

let store = new Vuex.Store({
    state: {
        users: [],
        user: {},
        isLogged: false,
        question: '',
    },
    mutations,
    actions,
    getters,
});

store.subscribe((m, state) => {
    
});

export default store;
