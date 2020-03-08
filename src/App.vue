<template>
  <div>
    <MenuBar />
    <div>
      <router-view />
    </div>
  </div>
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
