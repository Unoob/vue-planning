<template>
        <v-card
        @click.native="onValueCardClicked" 
        class="card elevation-4"
        :class="{'selected-class':isActive}"
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
    name: 'ValueCard',
    props: {
        card: {
            type: Object,
            required: true,
            validator: function(object) {
                if (!object.text) return false;

                return true;
            },
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onValueCardClicked: function() {
            this.$emit('onValueCardClicked', this.card);
        },
    },
};
</script>

<style scoped>
.card {
    background: linear-gradient(to bottom right, #e0e0e0, #bdbdbd);
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.selected-class {
    background: #4caf50 !important;
}
</style>