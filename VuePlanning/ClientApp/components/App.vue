<template>
    <div id="app-root">
        <v-app>
            <Login v-if="!logged"></Login>
            <MasterPage v-else></MasterPage>
        </v-app>
    </div>

</template>

<script>
    import MasterPage from './MasterPage.vue';
    import Login from './Login.vue';
    import {start} from '../services/HubService.js';

export default {
        name: "App",
        components: {
            MasterPage,
            Login
        },
        data:()=> {
            return {
                
            };
        },
        computed: {
            logged: function() {
                return this.$store.state.isLogged;
            }
        },
        mounted: function () {
            start();
        },
        methods: {
        }
};
</script>

<style lang="scss"></style>