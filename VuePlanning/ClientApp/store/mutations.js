export const mutations = {
    setlogged(state, isLog) {
        state.isLogged = isLog;
        if (!isLog) {
            state.user = {};
            localStorage.removeItem('user');
            return;
        }
        const { name, groupId, host } = state.user;
        if (host) {
            localStorage.removeItem('user');
            return;
        }
        localStorage.setItem('user', JSON.stringify({ name, groupId }));
    },
    userAnswer(state, userAnswer) {
        let user = state.users.find(
            u => u.connectionId === userAnswer.connectionId
        );
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
        state.users = state.users.filter(function(usr) {
            return usr.connectionId !== user.connectionId;
        });
    },
    resetSelect(state) {
        state.users = state.users.map(u => {
            u.selectValue = null;
            return u;
        });
    },
    newGame(state, question) {
        state.question = question;
    },
};
