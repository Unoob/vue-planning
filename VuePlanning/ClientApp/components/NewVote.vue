<template>
    <v-container>
        <v-layout column>
            <v-flex>
                <v-text-field autofocus
                              clearable
                              label="Temat"
                              v-model="title"
                              @keyup.enter="confirm"></v-text-field>
                
            </v-flex>
            <v-flex text-xs-center>
                <v-btn @click="confirm" 
                       color="success">Zatwierdź</v-btn>
            </v-flex>
        </v-layout>
        <!-- {{users}} -->
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
              <v-flex xs12 sm6 md3 v-for="user in users" :key="user.connectionId">
                  <!--<user-card :user="user"></user-card>-->
                  <FlippedCard :card="user"></FlippedCard>
              </v-flex>
          </v-layout>
        </v-container>
    </v-container>
</template>
<script>
    import UserCard from './UserCard.vue';
    import FlippedCard from "../components/FlippedCard.vue";

export default {
  name: "NewVote",
  components:{
      UserCard, FlippedCard
  },
  data: () => {
    return {
      title: "",
      answers: []
    };
  },
  computed: {
    users: function() {
      return this.$store.state.users;
      // return [
      //   { connectionId: 0, name: "Konrad" },
      //   { connectionId: 1, name: "Paweł" },
      //   { connectionId: 2, name: "Jarek" },
      //   { connectionId: 3, name: "Piotrek" },
      //   { connectionId: 4, name: "Łukasz" },
      //   { connectionId: 5, name: "Arek" }
      // ];
    }
  },
  methods: {
    confirm: function() {
      console.log("click");
    }
  }
};
</script>