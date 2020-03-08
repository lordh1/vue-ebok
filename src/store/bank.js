import axios from 'axios';
import {tokenService} from "../services/tokenService";

export default {
  namespaced: true,
  state: {
    bank: {
      nazwa: "",
      konto: ""
    }
  },
  mutations: {
    setBank (state, val) {
      state.bank = {
        nazwa: val.nazwa,
        konto: val.konto
      }
    }
  },
  actions: {
    apiGetBank (context) {

      const token = tokenService.getToken();

      const options = {
        url: process.env.VUE_APP_API_URL + '/bank',
        method: 'GET',
        headers: {'Authorization': "Bearer " + token}
      };

      axios(options)
        .then(response => context.commit('setBank', response.data))
        .catch(error => {
          throw (error)
        })
    },
  }
}
