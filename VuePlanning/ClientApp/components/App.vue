<template>
    <div id="app-root">
        <v-app>
            <router-view></router-view>
        </v-app>
    </div>

</template>

<script>
import { start } from '../services/HubService.js'

export default {
    name: 'App',
    components: {},
    data: () => {
        return {}
    },
    computed: {},
    mounted: function() {
        start()
    },
    methods: {},
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>