export const actions = {
    setUserAnswer({ commit }, user) {
        commit('userAnswer', user);
    },
    userUpdate({ commit }, user) {
        commit('updateUser', user);
    },
    userJoin({ commit }, user) {
        user.selectValue = '';
        commit('userJoined', user);
    },
    userLeave({ commit }, user) {
        commit('userLeaved', user);
    },
    setQuestion({ commit }, question) {
        commit('newGame', question);
    }
}