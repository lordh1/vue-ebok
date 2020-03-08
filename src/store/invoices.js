import {tokenService} from "../services/tokenService";

export default {
  namespaced: true,
  state: {
    invoices: []
  },
  mutations: {
    setInvoices (state, val) {
      state.invoices = val
    }
  },
  actions: {
    apiGetInvoices (context) {

      const token = tokenService.getToken();

      const options = {
        method: 'GET',
        headers: {'Authorization': "Bearer " + token}
      };

      fetch(process.env.VUE_APP_API_URL + '/invoices', options)
        .then(response => response.json())
        .then(invoices => context.commit('setInvoices', invoices))
        .catch(error => {
          throw (error)
        })
    }
  }
}
