<template>
    <v-container fluid>
        <v-layout row justify-space-around>
            <v-flex xs12 sm6 lg4>
                <v-text-field v-model="login" label="Login" placeholder="Login" solo></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row justify-space-around>
            <v-flex xs12 sm6 lg4>
                <v-text-field v-model="roomCode" label="RoomCode" placeholder="Nr pokoju" solo></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs12 sm6 lg4>
                <v-layout row justify-space-around>
                        <v-btn v-on:click="onCreateRoom">Stwórz</v-btn>                    
                        <v-btn v-on:click="onJoinRoom">Dołącz</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
 
<script>
import router from "vue-router";
import { createGroup, join } from "../services/HubService.js";
export default {
  name: "Login",
  data: function() {
    return {
      login: "",
      roomCode: ""
    };
  },
  methods: {
    onCreateRoom: function() {
      createGroup(this.login, this.roomCode)
        this.$router.push("question");
      
      console.log("onCreateRoom");
    },
    onJoinRoom: function() {
      if (!(this.login || this.roomCode)) return;
      join(this.login, this.roomCode);
      console.log("onJoinRoom");
    }
  }
};
</script>