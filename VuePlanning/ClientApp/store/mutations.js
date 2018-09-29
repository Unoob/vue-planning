export const mutations = {
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
    userJoined(state, user) {
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
