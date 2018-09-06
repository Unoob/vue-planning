import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { INCREMENT } from './MutationTypes';

const store = new Vuex.Store({
    state: {
        count: 0,
        users: [],
        user: {},
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
            state.isLogged = isLog;
        },
        updateUser(state, user) {
            state.user = user;
        },
        updateUsers(state, users) {
            console.log(users);
            state.users = users;
        },
        userJoined(state, user) {
            state.users.push(user);
        }
    }
});

export default store;
