<template>
    <v-container grid-list-lg>
        <v-layout>
            <v-flex>
                <v-text-field
                    :value="question"
                    label="Pytanie na dziś"
                    readonly
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout justify-start row wrap>
            <v-flex v-for="card in answers" :key="card.text" xs6 md4 lg3>
                <ValueCardComponent 
                :card="card" 
                :class="{'selected-class': selected===card}"
                @onValueCardClicked="onValueCardClicked"></ValueCardComponent>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ValueCardComponent from "../components/ValueCard.vue";
import { sendAnswer } from "../services/HubService.js";
export default {
  name: "Answer",
  components: { ValueCardComponent },
  data() {
    return {
      //TODO: doda� id do obiektu, �eby w przypadku powielenia tekstu prawid�owo znajdowa� elementy (unikalno�c id)
      answers: [
        new CardViewModel("1/2"),
        new CardViewModel("1"),
        new CardViewModel("2"),
        new CardViewModel("3"),
        new CardViewModel("5"),
        new CardViewModel("8"),
        new CardViewModel("13"),
        new CardViewModel("21"),
        new CardViewModel("34"),
        new CardViewModel("55")
      ],
      selected: {}
    };
  },
  computed: {
    question: function() {
      return this.$store.state.question;
    }
  },
  methods: {
    onValueCardClicked: function(card) {
      console.log("clicked parent!");
      this.selected = card;
      sendAnswer(card.text);
    }
  }
};

function CardViewModel(text) {
  this.text = text;
}
</script>
<style>
.selected-class {
  background: #4caf50 !important;
}
</style>
