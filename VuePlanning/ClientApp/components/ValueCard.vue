<template>
        <v-card
        @click.native="onValueCardClicked" 
        class="card elevation-4"
        >
            <v-card-text>
                <v-layout>
                    <v-flex text-xs-center class="display-2">
                        {{card.text}}
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
</template>

<script>
export default {
  name: "ValueCard",
  props: {
    card: {
      type: Object,
      required: true,
      validator: function(object) {
        if (!object.text) return false;

        return true;
      }
    }
  },
  methods: {
    onValueCardClicked: function() {
      this.$emit("onValueCardClicked", this.card);
    }
  }
};
</script>

<style scoped>
.card {
  background: linear-gradient(to bottom right, #e0e0e0, #bdbdbd);
  cursor: pointer;
}
</style>