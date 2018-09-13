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
                <v-list-tile v-for="item in items"
                             :key="item.title"
                             @click="false">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
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
            <v-toolbar-title>Vue Planning</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon v-on:click="onLogoutClick" class="logoutButton">
                <v-icon>close</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <router-view />
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>
<script>
import { leaveGroup } from "../services/HubService.js";
    export default {
        name: "MasterPage",
        data: () => {
            return {
                items: [
                    { title: "Home", icon: "dashboard" },
                    { title: "About", icon: "question_answer" }
                ],
                drawer: null
            };
        },
        methods: {
            onLogoutClick: function () {
                console.log("logout click");
                leaveGroup();
                this.$router.push("login");
            }
        },
        computed: {
            user: function () {
                return this.$store.state.user;
            },
            avatar: function () {
                return (
                    "https://api.adorable.io/avatars/80/" + (this.user.connectionId || '').substring(0, 8) + ".png"
                );
            }
        }
    };
</script>
<style>
    .logoutButton:hover {
        transform: rotate(360deg);
    }
</style>