import Vue from 'vue';
import Vuex from 'vuex';
import { tokenService } from "../services/tokenService";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    token: null,
    authenticated: tokenService.checkAuthenticated()
  },
  getters: {
    getAuthenticated(state) {
      if(state.authenticated !== null) return state.authenticated;
      else return tokenService.checkAuthenticated();
    }
  },
  mutations: {
    async setToken(state, val) {
      await tokenService.setToken(val.token);
      state.token = val;
    },
    setTokenReceived(state, val) {
      state.tokenReceived = val
    },
    setAuthenticated(state, val) {
      state.authenticated = val;
    }
  },
  actions: {
    async apiAuthenticate (context, params) {
      let credentials = {
        id: params.id,
        password: params.password
      };

      let options = {
        method: 'POST',
        body: JSON.stringify(credentials)
      };

      const request = await fetch(process.env.VUE_APP_API_URL + "/auth", options);
      const data = await request.json();

      if(data.error) {
        return false;
      }
      else {
        await context.commit('setToken', data);
        context.commit('setAuthenticated', true);
        params.router.push('/account');
      }
    },
    async apiGetSessionId () { // temporary not in use
      let options = {
        method: 'GET'
      };

      const request = fetch(process.env.VUE_APP_REGISTRATION_AUTHORIZE_ENDPOINT, options);
      await request.json();
    },
    logout(context) {
      context.commit('setAuthenticated', false);
      tokenService.destroyToken();
    }
  }
};
