export const getters = {
    isLogged: state => state.isLogged,
    currentUser: state => state.user,
    users: state => state.users,
    avg: state => {
        return (
            state.users.reduce((p, c) => {
                p = +c.selectValue + p;
                return p;
            }, 0) / (state.users.length || 1)
        );
    },
};
