<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs10>
                <v-text-field autofocus
                              clearable
                              label="Temat"
                              v-model="title"
                              @keyup.enter="confirm"></v-text-field>
                
            </v-flex>
            <v-flex xs2>
                <v-btn 
                       block
                       @click="confirm" color="success">Zatwierdź</v-btn>
            </v-flex>
        </v-layout>
        {{users}}
    </v-container>
</template>
<script>
export default {
  name: "NewVote",
  data: () => {
    return {
      title: "",
      answers: []
    };
  },
  computed: {
    users: function() {
      return JSON.stringify(this.$store.state.users);
    }
  },
  methods: {
    confirm: function() {
      console.log("click");
    }
  }
};
</script>