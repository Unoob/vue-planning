<template>
    <v-container grid-list-lg>
        <v-layout row wrap fill-height>
            <v-flex xs12 sm6 md4 v-for="n in answers" :key="n">
                <v-card>
                    <v-card-text>
                        <v-layout align-center>
                            <v-flex text-xs-center>
                                {{n}}
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name:"Answer",
    data(){
        return {
            answers:['1/2','1','2','3','5','8','13','21','34','55']
        }
    }
}
</script>
