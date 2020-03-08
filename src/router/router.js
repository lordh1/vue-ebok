import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/login/Login";
import {tokenService} from "../services/tokenService";
import Account from "../components/account/Account";
import Invoices from "../components/invoices/Invoices";
import Error404 from "../components/error404/Error404";
import Contact from "../components/contact/Contact";
import Bank from "../components/bank/Bank";
import Gdpr from "../components/gdpr/Gdpr";

Vue.use(Router);

const authMiddleware = async (to, from, next) => {
  let token = await tokenService.getToken();
  if (!token || !token.length) {
    return next('/')
  }

  return next()
};

const preventIfAuthenticated = async (to, from, next) => {
  let token = await tokenService.getToken();
  if (token && token.length) {
    return next('/account')
  }

  return next()
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      beforeEnter: preventIfAuthenticated
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      beforeEnter: authMiddleware
    },
    {
      path: '/account/invoices',
      name: 'invoices',
      component: Invoices,
      beforeEnter: authMiddleware
    },
    {
      path: '/account/contact',
      name: 'contact',
      component: Contact,
      beforeEnter: authMiddleware
    },
    {
      path: '/account/bank',
      name: 'bank',
      component: Bank,
      beforeEnter: authMiddleware
    },
    {
      path: '/account/gdpr',
      name: 'gdpr',
      component: Gdpr,
      beforeEnter: authMiddleware
    },
    {
      path: '*',
      name: 'error404',
      component: Error404,
    },
  ]
})
