import { HubConnectionBuilder } from '@aspnet/signalr';
import HubEvents from '../store/HubEvents';
import store from '../store/index';

const HUBS = {
    PLANNING: '/PlanningHub'
};

let pokerHub;


export function start() {
    pokerHub = new HubConnectionBuilder().withUrl(HUBS.PLANNING).build();
    pokerHub.start().catch(function (err) {
        return console.error(err.toString());
    });
    
    pokerHub.on(HubEvents.Disconnected, handleDisconnected);
    pokerHub.on(HubEvents.UpdateUser, handleUpdateUser);
    pokerHub.on(HubEvents.SendAnswer, handleSendAnswer);
    pokerHub.on(HubEvents.UsersJoined, handleUserJoined);
    pokerHub.on(HubEvents.NewGame, handleNewGame);
    pokerHub.on(HubEvents.LeaveGroup, handleUserLeaved);
}

export function sendQuestion(question) {
    pokerHub.invoke(HubEvents.NewGame, question);
}

export function sendAnswer(value){
    pokerHub.invoke(HubEvents.SendAnswer, value);
}

export function joinGroup(playerName, groupId) {
    const message = { playerName, groupId };
    pokerHub.invoke(HubEvents.JoinGroup, message);
    store.commit('setlogged', true);
}

export function createGroup(playerName, groupId) {
    const message = { playerName, groupId };
    console.log('before invoke');
    pokerHub.invoke(HubEvents.CreateGroup, message);
    store.commit("setlogged", true);
}

export function leaveGroup() {
    console.log('before invoke');
    pokerHub.invoke(HubEvents.LeaveGroup);
    store.commit("setlogged", false);
}

function handleNewGame(question) {
    store.commit('newGame', question);
}

function handleConnected(usersOnline) {
    store.commit("updateUsers", usersOnline);
}
function handleDisconnected(usersOnline) {
    console.log(usersOnline);
}

function handleSendAnswer(userAnswer) {
    store.commit("userAnswer", userAnswer);
}

function handleUserJoined(user) {
    store.commit("userJoined", user);
}

function handleUserLeaved(user) {
    store.commit("userLeaved", user);
    console.log("after leave");
}

function handleUpdateUser(user) {
    store.commit("updateUser", user);
    console.log('after update');
}