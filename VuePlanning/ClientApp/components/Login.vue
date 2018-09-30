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
                        <v-btn @click="onCreateRoom" color="primary">Stwórz</v-btn>                    
                        <v-btn @click="onJoinRoom" color="secondary">Dołącz</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
 
<script>
import router from "vue-router";
import { createGroup, joinGroup } from "../services/HubService.js";
export default {
  name: "Login",
  props: ["room"],
  data: function() {
    return {
      login: "",
      roomCode: this.room || ""
    };
  },
  methods: {
    onCreateRoom: function() {
      if (!(this.login || this.roomCode)) return;
      createGroup(this.login, this.roomCode);
      this.$router.push("question");

      console.log("onCreateRoom");
    },
    onJoinRoom: function() {
      if (!(this.login || this.roomCode)) return;
      joinGroup(this.login, this.roomCode);
      this.$router.push("group");
      console.log("onJoinRoom");
    }
  }
};
</script>