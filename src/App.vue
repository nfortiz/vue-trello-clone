<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <h1>Trello Clone</h1>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/nfortiz/"
        target="_blank"
        text
      >
        <span class="mr-2">nfortiz</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="overflow-x-auto">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
a h1 {
  text-decoration: none;
  color: white;
}
</style>
