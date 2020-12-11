import Vue from "vue";
import Vuex from "vuex";
import {loginService} from "../src/services/loginService";
import router from "./router";
//import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    invoices:[],
    isLogin: false,
    token:null,
    user:null,
  },
  mutations: {
    LOGIN_REQUEST(state, user) {
      state.isLogin=true;
      state.token=null;
      state.user=user;
    },
    LOGOUT_REQUEST (state) {
      state.isLogin=false;
      state.token=null;
      state.user=null;
    },
    ADD_INVOICE(state, invoice) {
      state.invoices.push(invoice);
    }
  },
  actions: {
    async createInvoice({commit}, invoice) {
      commit("ADD_INVOICE", invoice);
      router.push("/invoice/list");
    },
    login({commit}, { username, password }) {
      commit("LOGIN_REQUEST", { username });
      let result = loginService.login(username, password);
      if(result){
          router.push("/home");
      }
    },
    logout({commit}) {
      commit("LOGOUT_REQUEST");
      router.push("/");
    },
  },
  //plugins: [createPersistedState()]
})
