<template>
  <div>
    <div v-show="authenticated">
      <div @click="goTo(item.path)" :key="key" v-for="(item, key) in routes">
        {{item.name}}
      </div>
    </div>

    <div @click="doLogout" v-show="authenticated">
      Logout
    </div>
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
