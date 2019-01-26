<template>
  <div id="app-root">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import { start, joinGroup } from '../services/HubService.js';

export default {
    name: 'App',
    mounted: function() {
        start().then(() => {
            let user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                joinGroup(user.name, user.groupId);
            }
        });
    },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>