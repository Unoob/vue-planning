<template>
    <div id="app-root">
        <v-app>
            <router-view></router-view>
        </v-app>
    </div>

</template>

<script>
    import {start} from '../services/HubService.js';

export default {
        name: "App",
        components: {
        },
        data:()=> {
            return {
                
            };
        },
        computed: {
        },
        mounted: function () {
            start();
        },
        methods: {
        }
};
</script>

<style lang="scss"></style>