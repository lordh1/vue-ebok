<template>
  <div class="MenuBar">
    <v-app-bar
      color="primary"
      dense
      dark
    >
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" v-show="authenticated">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list v-show="authenticated">
          <v-list-item @click="goTo(item.path)" :key="key" v-for="(item, key) in routes">
            {{item.name}}
          </v-list-item>
        </v-list>
      </v-menu>

      <v-toolbar-title>EBOK</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn icon @click="doLogout" v-show="authenticated" v-on="on">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Wyloguj się</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script>
import {tokenService} from "../../services/tokenService";
import { mapState, mapActions } from 'vuex';

const routesRestricted = [
  { name: "Mój profil", path: "/account"},
  { name: "Moje dane kontaktowe", path: "/account/contact"},
  { name: "Moje faktury", path: "/account/invoices"},
  { name: "Konto do opłat", path: "/account/bank"},
  { name: "Informacja RODO", path: "/account/gdpr"},
];

export default {
  name: 'MenuBar',
  props: {
    msg: String
  },
  data: () => ({
    isAuthenticated: false,
    routes: routesRestricted
  }),
  methods: {
    ...mapActions('authentication', [
      'logout'
    ]),
    goTo(path) {
      this.$router.push(path);
    },
    doLogout() {
      this.logout();
      this.$router.push("/");
    },
    async checkIsAuthenticated() {
      let token = await tokenService.getToken();
      this.isAuthenticated = token && token.length;
    }
  },
  computed: {
    ...mapState({
      authenticated: state => state.authentication.authenticated,
    })
  },
  mounted() {
    this.checkIsAuthenticated();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
