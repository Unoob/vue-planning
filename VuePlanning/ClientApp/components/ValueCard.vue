<template>
        <v-card @click.native="onValueCardClicked" :class="{'selected-class' : card.selected, 'card' : true}" active-class="card">
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

<style> 
    /*TODO: dostosować graficznie, narazie wygląda jeszcze przeciętnie*/

    .card {
        align-items: center;
        background: linear-gradient(to bottom right, #CCC, #AAA);
        padding: 110px 5px;
        color: white;
        width: 150pt;
        font-size: 40pt;
        cursor: pointer;
        border-radius: 9px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        justify-content: center;
        display: flex;
    }

    .selected-class {
        background: #068d00 !important;
    }

</style>