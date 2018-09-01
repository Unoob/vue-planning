<template>
    <div id="app-root">
        <v-app>
            <MasterPage></MasterPage>
        </v-app>
    </div>

</template>

<script>
    import { HubConnectionBuilder } from '@aspnet/signalr';
    import MasterPage from './MasterPage.vue';
    const HUBS = {
        PLANNING: '/PlanningHub'
    };
export default {
        name: "App",
        components: {
            MasterPage
        },
        data:()=> {
            return {
                connectionHub: {}
                
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