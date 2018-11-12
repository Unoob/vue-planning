<template>
    <v-dialog
        v-model="dialog"
        fullscreen>
        <slot name="activator" slot="activator"></slot>
        <v-card>
            <v-card-title primary-title class="primary">
                <label class="display-2 white--text">Nazwa pokoju: {{value}}</label>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap justify-center align-center>
                    <VueQrcode :value="url" :options={size:480}></VueQrcode>
                </v-layout>                                
            </v-card-text>
            <v-card-actions>
                <v-btn block color="primary" @click="dialog=false" dark>Zamknij</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import VueQrcode from '@xkeshi/vue-qrcode';
export default {
    name: 'QrCode',
    props: ['value'],
    components: { VueQrcode },
    data() {
        return {
            dialog: false,
        };
    },
    computed: {
        url() {
            return `${window.location.host}/${this.value}`;
        },
    },
};
</script>
