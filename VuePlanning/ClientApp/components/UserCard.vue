<template>
    <div class="name-card">
                <v-card color="primary">
                  <v-card-text>
                    <v-layout align-center column class="ma-0">
                      <v-avatar primary></v-avatar>
                      <v-flex text-sm-center>
                        <div>{{user.name}}</div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </div>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    user: Object
  }
};
</script>
