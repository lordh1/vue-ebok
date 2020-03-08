import {tokenService} from "../services/tokenService";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    gdpr: {
      name: "",
      company: ""
    }
  },
  mutations: {
    setGdpr (state, val) {
      state.gdpr = {
        name: val.name,
        company: val.company
      }
    }
  },
  actions: {
    apiGetGdpr (context) {
      const token = tokenService.getToken();

      const options = {
        url: process.env.VUE_APP_API_URL + '/rodo',
        method: 'GET',
        headers: {'Authorization': "Bearer " + token}
      };

      axios(options)
        .then(response => context.commit('setGdpr', response.data))
        .catch(error => {
          throw (error)
        })
    },
    apiSaveGdpr () {
      const token = tokenService.getToken();

      const confirm = { confirm: true };

      const options = {
        url: process.env.VUE_APP_API_URL + '/rodo',
        method: 'POST',
        headers: {'Authorization': "Bearer " + token},
        data: confirm
      };

      axios(options)
        .then(response => console.log(response.data))
        .catch(error => {
          throw (error)
        })
    }
  }
}
