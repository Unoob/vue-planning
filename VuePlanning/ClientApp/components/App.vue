<template>
    <div id="app-root">
        <router-view />
    </div>

</template>

<script>
    import { HubConnectionBuilder } from '@aspnet/signalr';
    const HUBS = {
        PLANNING: '/PlanningHub'
    };
export default {
        name: "App",
        data:()=> {
            return {
                connectionHub: {}
            };
        },
        mounted: function () {
            this.connectionHub = new HubConnectionBuilder().withUrl(HUBS.PLANNING).build();
            this.connectionHub.start();
        }
};
</script>

<style lang="scss"></style>