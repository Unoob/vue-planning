<template>
    <div id="app-root">
        <v-app>
            <Login v-if="logged"></Login>
            <MasterPage v-else></MasterPage>
            <v-btn @click="logged=!logged">Toggle</v-btn>
        </v-app>
    </div>

</template>

<script>
    import { HubConnectionBuilder } from '@aspnet/signalr';
    import MasterPage from './MasterPage.vue';
    import Login from './Home.vue';
    import HubEvents from '../store/HubEvents';
    const HUBS = {
        PLANNING: '/PlanningHub'
    };
export default {
        name: "App",
        components: {
            MasterPage,
            Login
        },
        data:()=> {
            return {
                logged: false,
                pokerHub: {}
                
            };
        },
        computed: {
            connectionId: function() {
                return new Date().getMilliseconds();
            }
        },
        mounted: function () {
            this.pokerHub = new HubConnectionBuilder().withUrl(HUBS.PLANNING).build();
            this.pokerHub.start().catch(function (err) {
                return console.error(err.toString());
            });
            this.pokerHub.on(HubEvents.Connected, this.handleConnected);
            this.pokerHub.on(HubEvents.Disconnected, this.handleDisconnected);
            this.pokerHub.on(HubEvents.UpdateUser, this.handleUpdateUser);
            this.pokerHub.on(HubEvents.Send, this.handleSend);
            this.pokerHub.on(HubEvents.UsersJoined, this.handleUserJoined);
            this.pokerHub.on(HubEvents.NewGame, this.handleNewGame);
            this.pokerHub.on(HubEvents.ShowCards, this.handleShowCards);
            this.pokerHub.on(HubEvents.JoinGroup, this.handleJoinGroup); 
        },

        methods: {
            handleConnected: function (usersOnline) {
                console.log(this);
                this.$store.commit("decrement");
                this.$store.commit("updateusers", usersOnline);
                this.$store.commit("setlogged", true);
            },
            handleDisconnected: function (usersOnline) {
                this.$store.commit("updateusers", []);
                this.$store.commit("setlogged", false);
                //this.handleConnected(usersOnline);
            },

            join : function (playerName) {
                //this.pokerHub.invoke(HubEvents.JoinUser, playerName);
            },

            handleUpdateUser: function (usersOnline) {
                this.$store.commit("updateusers", usersOnline);
                this.$store.commit("setlogged", true);
            }
        }
};
</script>

<style lang="scss"></style>