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
                connectionHub: {},
                logged: false
            };
        },
        computed: {
            connectionId: function() {
                return new Date().getMilliseconds();
            }
        },
        mounted: function () {
            this.connectionHub = new HubConnectionBuilder().withUrl(HUBS.PLANNING).build();
            this.connectionHub.start();
        }
};
</script>

<style lang="scss"></style>