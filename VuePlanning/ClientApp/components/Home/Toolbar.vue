<template>
    <div>
        <v-navigation-drawer 
            absolute
            :clipped="$vuetify.breakpoint.mdAndUp"
            app
            v-model="drawer"
                             >
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img v-bind:src="avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{user.name}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-divider></v-divider>

            <v-list dense class="pt-0">
                <QRCode :value="user.groupId">
                <v-list-tile slot="activator">
                    <v-list-tile-action>
                        <fa icon="qrcode"></fa>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Link do pokoju</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                </QRCode>
                <v-list-tile v-for="item in items"
                             :key="item.title"
                             @click="false">
                    <v-list-tile-action>
                        <fa :icon="item.icon"></fa>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar color="blue darken-3"
                  dark
                  app
                  :clipped-left="$vuetify.breakpoint.mdAndUp"
                  fixed>
                  <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
            <!-- <v-btn icon @click.stop="drawer=!drawer">
                <fa icon="bars" ></fa>
            </v-btn> -->
            <v-toolbar-title>Vue Planning</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="onLogoutClick">
                <fa icon="sign-out-alt"></fa>
            </v-btn>
        </v-toolbar>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { leaveGroup } from '../../services/HubService.js';
import QRCode from '../QrCode.vue';

export default {
    name: 'Toolbar',
    components: { QRCode },
    data() {
        return {
            items: [],
            drawer: null,
        };
    },
    methods: {
        onLogoutClick: function() {
            console.log('logout click');
            leaveGroup();
            this.$router.push('login');
        },
    },
    computed: {
        ...mapGetters({ user: 'currentUser' }),
        avatar: function() {
            return (
                'https://api.adorable.io/avatars/80/' +
                (this.user.connectionId || '').substring(0, 8) +
                '.png'
            );
        },
    },
};
</script>
