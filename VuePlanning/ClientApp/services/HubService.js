import { HubConnectionBuilder } from '@aspnet/signalr';
import HubEvents from './HubEvents';
import store from '../store/index';

const HUBS = {
    PLANNING: '/PlanningHub',
};

let pokerHub;

export function start() {
    pokerHub = new HubConnectionBuilder().withUrl(HUBS.PLANNING).build();

    pokerHub.on(HubEvents.Disconnected, handleDisconnected);
    pokerHub.on(HubEvents.UpdateUser, handleUpdateUser);
    pokerHub.on(HubEvents.SendAnswer, handleSendAnswer);
    pokerHub.on(HubEvents.UsersJoined, handleUserJoined);
    pokerHub.on(HubEvents.NewGame, handleNewGame);
    pokerHub.on(HubEvents.LeaveGroup, handleUserLeaved);

    pokerHub.start().catch(function(err) {
        return console.error(err.toString());
    });
}

export function sendQuestion(question) {
    store.dispatch('newGame');
    pokerHub.invoke(HubEvents.NewGame, question);
}

export function sendAnswer(value) {
    pokerHub.invoke(HubEvents.SendAnswer, value);
}

export function joinGroup(playerName, groupId) {
    const message = { playerName, groupId };
    pokerHub.invoke(HubEvents.JoinGroup, message);
}

export function createGroup(playerName, groupId) {
    const message = { playerName, groupId };
    console.log('before invoke');
    pokerHub.invoke(HubEvents.CreateGroup, message);
}

export function leaveGroup() {
    console.log('before invoke');
    pokerHub.invoke(HubEvents.LeaveGroup);
    store.commit('setlogged', false);
}

function handleNewGame(question) {
    store.dispatch('setQuestion', question);
}

function handleDisconnected(user) {
    handleUserLeaved(user);
    console.log(user);
}

function handleSendAnswer(userAnswer) {
    store.dispatch('setUserAnswer', userAnswer);
}

function handleUserJoined(user) {
    store.dispatch('userJoin', user);
}

function handleUserLeaved(user) {
    store.dispatch('userLeave', user);
    console.log('after leave');
}

function handleUpdateUser(user) {
    store.dispatch('userUpdate', user);
}
