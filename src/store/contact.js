import axios from 'axios';
import {tokenService} from "../services/tokenService";

export default {
  namespaced: true,
  state: {
    contact: {
      tel1: "",
      tel2: "",
      email: ""
    }
  },
  mutations: {
    setContact (state, val) {
      state.contact = val
    }
  },
  actions: {
    apiGetContact (context) {

      const token = tokenService.getToken();

      const options = {
        url: process.env.VUE_APP_API_URL + '/contact',
        method: 'GET',
        headers: {'Authorization': "Bearer " + token}
      };

      axios(options)
        .then(response => context.commit('setContact', response.data))
        .catch(error => {
          throw (error)
        })
    },
    apiSaveContact (context, params) {
      const token = tokenService.getToken();

      const contact = {tel1: params.tel1, tel2: params.tel2, email: params.email};

      const options = {
        url: process.env.VUE_APP_API_URL + '/contact',
        method: 'POST',
        headers: {'Authorization': "Bearer " + token},
        data: contact
      };

      axios(options)
        .then(response => console.log(response.data))
        .catch(error => {
          throw (error)
        })
    }
  }
}
