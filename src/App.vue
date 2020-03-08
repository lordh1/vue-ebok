<template>
  <v-app>
    <MenuBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import MenuBar from "./components/menuBar/MenuBar";

export default {
  name: 'App',

  components: {
    MenuBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

body {
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.toasted {
  height: 50px !important;
}

</style>
