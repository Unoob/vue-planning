<template>
        <v-card @click.native="onValueCardClicked" :class="{'selected-class' : card.selected, 'card' : true}">
            <v-card-text>
                <v-layout align-center>
                    <v-flex text-xs-center>
                        {{card.text}}
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
</template>

<script>
    export default {
        name: "ValueCard",
        data() {
            return {
                
            };
        },
        props: {
            card: {
                type: Object,
                required: true,
                validator: function (object) {
                    if (!object.text)
                        return false;
                    if (typeof object.selected !== "boolean")
                        return false;
                    if (typeof object.text !== "string" || object.text.length < 0 || object.text.length > 4)
                        return false;

                    return true;
                }
            }
        },
        methods: {
            onValueCardClicked: function () {
                this.$emit("onValueCardClicked", this.card);
            } 
        }
    };
</script>

<style lang="scss"> 
    /*TODO: dostosować graficznie, narazie wygląda jeszcze przeciętnie*/

    .card {
        background: linear-gradient(to bottom right, #CCC, #AAA);
        padding: 110px 5px;
        color: white;
        width: 200px;
        font-size: 40px;
        cursor: pointer;
               
        }

    .selected-class {
        background: green !important;
    }

</style>