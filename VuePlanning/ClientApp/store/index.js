import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { INCREMENT } from './MutationTypes';

export default new Vuex.Store({
    state: {
        count: 0,
        users: [],
        user: {},
        isLogged: false,
        question: ""
    },
    getters: {
        isLogged(state) {
            return state.isLogged;
        }
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
        userAnswer(state, userAnswer) {
            let user = state.users.find((u) => u.connectionId === userAnswer.connectionId);
            if (user) {
                user.selectValue = userAnswer.answer;
            }
        },
        updateUser(state, user) {
            state.user = user;
        },
        updateUsers(state, users) {
            console.log(users);
            state.users = users;
        },
        userJoined(state, user) {
            user.selectValue = '';
            state.users.push(user);
        },
        userLeaved(state, user) {
            state.users = state.users.filter(function (usr) {
                return usr.connectionId !== user.connectionId;
            });
        },
        newGame(state, question) {
            state.users.forEach((u) => u.selectValue = '');
            state.question = question;
        }
    }
});
