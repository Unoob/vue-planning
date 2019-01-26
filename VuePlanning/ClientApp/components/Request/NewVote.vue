<template>
    <v-container>
        <v-layout column>
            <v-flex>
                <v-textarea autofocus
                              clearable
                              label="Temat"
                              v-model="title"
                              rows="1"
                              auto-grow
                              @keyup.enter="confirm"></v-textarea>
                
            </v-flex>
            <v-flex text-xs-center>
                <v-btn
                  v-if="newGame"
                  @click="confirm" 
                  color="success">Wyślij pytanie</v-btn>
                <v-btn 
                v-else 
                @click="flipCard=true, newGame=true"
                color="info">Sprawdź wyniki</v-btn>
            </v-flex>
        </v-layout>
        <!-- {{avg}} -->
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
              <v-flex xs12 sm6 md3 v-for="user in users" :key="user.connectionId">
                  <FlippedCard 
                    :card="user"
                    :flipCard="!flipCard"
                  ></FlippedCard>
              </v-flex>
          </v-layout>
        </v-container>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex';
import { sendQuestion } from '../../services/HubService.js';
import FlippedCard from './FlippedCard.vue';

export default {
    name: 'NewVote',
    components: {
        FlippedCard,
    },
    data: () => {
        return {
            title: '',
            answers: [],
            newGame: true,
            flipCard: false,
        };
    },
    computed: {
        ...mapGetters(['avg', 'users']),
    },
    methods: {
        confirm: function() {
            sendQuestion(this.title);
            console.log('click');
            this.newGame = false;
            this.flipCard = false;
        },
    },
};
</script>