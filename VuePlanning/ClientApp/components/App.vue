<template>
<div>
    <h1>Vue app!so hot</h1>
    <label>{{count}}</label>
    <div>
    <v-btn @click="increment(1)" color="success">Success</v-btn>
    <v-btn @click="increment(2)" color="error">Error</v-btn>
    <v-btn @click="increment(3)" color="warning">Warning</v-btn>
    <v-btn @click="increment(5)" color="info">Info</v-btn>
  </div>
  <v-layout justify-space-around>
    <v-icon large color="green darken-2">business</v-icon>

    <v-icon large color="blue darken-2">chat</v-icon>

    <v-icon large color="purple darken-2">dialpad</v-icon>

    <v-icon large color="teal darken-2">email</v-icon>

    <v-icon large color="blue-grey darken-2">call_split</v-icon>

    <v-icon large color="orange darken-2">present_to_all</v-icon>
  </v-layout>
</div>
    
</template>

<script>
import { INCREMENT } from "../store/mutation-types";
export default {
  name: "Home",
  computed: {
    count: function() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment: function(number) {
      this.$store.commit(INCREMENT, number);
    }
  }
};
</script>

<style lang="scss"></style>