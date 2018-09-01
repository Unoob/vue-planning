<template>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12>
                <v-text-field v-model="login" label="Login" placeholder="Login" solo></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <v-text-field v-model="roomCode" label="RoomCode" placeholder="Nr pokoju" solo></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs6>
                <v-btn v-on:click="onCreateRoom">Stwórz</v-btn>
            </v-flex>
            <v-flex xs6>
                <v-btn v-on:click="onJoinRoom">Dołącz</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
 
<script>
    export default {
        name: "Home",
        data: function() {
          return {
            login: "",
            roomCode: ""
          }
        },
        methods: {
            onCreateRoom: function () {
                console.log('onCreateRoom');
            },
            onJoinRoom: function () {
                console.log('onJoinRoom');
            }
        }
    };
</script>