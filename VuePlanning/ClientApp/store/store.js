import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { INCREMENT } from './MutationTypes';

const store = new Vuex.Store({
    state: {
        count: 0,
        users: [],
        isLogged: false
    },
    mutations: {
        [INCREMENT](state, n) {
            state.count += n;
        },
        decrement(state) {
            console.log(state.count);
            state.count--;
        },
        setlogged(state, isLog) {
            console.log(isLog);
            state.isLogged = isLog;
        },
        updateusers(state, users) {
            console.log(users);
            state.users = users;
        }
    }
});

export default store;
