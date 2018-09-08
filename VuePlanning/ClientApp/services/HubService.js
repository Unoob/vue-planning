import { HubConnectionBuilder } from '@aspnet/signalr';
import HubEvents from '../store/HubEvents';
import { store } from '../store/Store';

const HUBS = {
    PLANNING: '/PlanningHub'
};

let pokerHub;


export function start() {
    pokerHub = new HubConnectionBuilder().withUrl(HUBS.PLANNING).build();
    pokerHub.start().catch(function (err) {
        return console.error(err.toString());
    });
    // pokerHub.on(HubEvents.Connected, handleConnected);
    // pokerHub.on(HubEvents.Disconnected, handleDisconnected);
    pokerHub.on(HubEvents.UpdateUser, handleUpdateUser);
    // pokerHub.on(HubEvents.Send, handleSend);
    // pokerHub.on(HubEvents.UsersJoined, handleUserJoined);
    // pokerHub.on(HubEvents.NewGame, handleNewGame);
    // pokerHub.on(HubEvents.ShowCards, handleShowCards);
    // pokerHub.on(HubEvents.JoinGroup, handleConnected);
}
export function join(playerName, groupId) {
    const message = { playerName, groupId };
    pokerHub.invoke(HubEvents.JoinGroup, message);
    store.commit('setlogged', true);
}

export function createGroup(name, groupId) {
    const message = { PlayerName: name, groupId };
    console.log('before invoke')
    pokerHub.invoke(HubEvents.CreateGroup, message);
    store.commit("setlogged", true);
}


function handleConnected(usersOnline) {
    store.commit("updateUsers", usersOnline);
}
function handleDisconnected(usersOnline) {
    store.commit("updateUsers", []);
    store.commit("setlogged", false);
}

function handleUserJoined(user) {
    store.commit("userJoined", user);
}

function handleUpdateUser(user) {
    store.commit("updateUser", user);
    console.log('after update')
}