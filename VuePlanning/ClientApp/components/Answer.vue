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
        <v-layout row wrap>
            <v-flex v-for="card in answers" :key="card.text">
                <ValueCardComponent :card="card" @onValueCardClicked="onValueCardClicked"></ValueCardComponent>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ValueCardComponent from "../components/ValueCard.vue";

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
      ]
    };
  },
  computed: {
    question: function() {
      return this.$store.state.question;
    }
  },
  methods: {
    onValueCardClicked: function(object) {
      console.log("clicked parent!");
      var arrayElement = this.answers.find(function(item) {
        return item === object;
      });
      this.clearSelectedValue();
      arrayElement.selected = !arrayElement.selected;
    },
    clearSelectedValue: function() {
      var arrayElement = this.answers.find(function(item) {
        return item.selected === true;
      });
      arrayElement = arrayElement || {};
      arrayElement.selected = !arrayElement.selected;
    }
  }
};

function CardViewModel(text) {
  this.text = text;
  this.selected = false;
}
</script>
