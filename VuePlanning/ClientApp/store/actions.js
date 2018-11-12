export const actions = {
    setUserAnswer({ commit }, user) {
        commit('userAnswer', user);
    },
    userUpdate({ commit }, user) {
        commit('updateUser', user);
        commit('setlogged', true);
    },
    userJoin({ commit }, user) {
        user.selectValue = '';
        commit('userJoined', user);
        commit('setlogged', true);
    },
    userLeave({ commit }, user) {
        commit('userLeaved', user);
    },
    setQuestion({ commit }, question) {
        commit('newGame', question);
    },
    newGame({ commit }) {
        commit('resetSelect');
    },
};
