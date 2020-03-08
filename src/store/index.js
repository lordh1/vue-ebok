import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication'
import invoices from './invoices'
import contact from './contact'
import bank from './bank'
import gdpr from './gdpr'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    invoices,
    contact,
    bank,
    gdpr
  }
})
