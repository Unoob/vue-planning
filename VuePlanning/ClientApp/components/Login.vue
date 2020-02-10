<template>
    <v-container fluid>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm8 md6 lg4>
                <v-layout column>
                    <v-text-field 
                        v-model="login" 
                        label="Login"
                        :rules="[rules.required]"
                        required>
                    </v-text-field>
                    <v-text-field 
                        v-model="roomCode" 
                        label="Nr pokoju"
                        :rules="[rules.required]"
                        required>
                    </v-text-field>
                    <v-layout row justify-space-around>
                            <v-btn @click="onCreateRoom" color="primary" :disabled="loading">Stwórz</v-btn>                    
                            <v-btn @click="onJoinRoom" color="secondary" :disabled="loading">Dołącz</v-btn>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
 
<script>
import router from 'vue-router';
import { mapGetters } from 'vuex';
import { createGroup, joinGroup } from '../services/HubService.js';
export default {
    name: 'Login',
    props: ['room'],
    data: function() {
        return {
            login: '', 
            roomCode: this.room || '',
            action: '',
            rules: {
                required: value => !!value || 'Pole jest wymagane.',
            },
            loading: false,
        };
    },
    computed: {
        ...mapGetters(['isLogged']),
    },
    watch: {
        isLogged(val) {
            if (!val) return;
            this.action === 'CREATE'
                ? this.$router.push('question')
                : this.$router.push('group');
        },
    },
    methods: {
        onCreateRoom: function() {
            if (!(this.login || this.roomCode)) return;
            this.loading = true;
            createGroup(this.login, this.roomCode);
            this.action = 'CREATE';

            console.log('onCreateRoom');
        },
        onJoinRoom: function() {
            if (!(this.login || this.roomCode)) return;
            this.loading = true;
            joinGroup(this.login, this.roomCode);
            this.action = 'JOIN';
            console.log('onJoinRoom');
        },
    },
};
</script>