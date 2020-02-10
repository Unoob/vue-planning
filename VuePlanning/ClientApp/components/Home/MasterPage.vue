<template>
    <div>
        <Toolbar></Toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <router-view />
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>
<script>
import Toolbar from './Toolbar.vue';

export default {
    name: 'MasterPage',
    components: { Toolbar }
};
</script>