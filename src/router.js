import Vue from "vue";
import Router from "vue-router";
import InvoiceCreate from "./views/InvoiceCreate.vue";
import InvoiceList from "./views/InvoiceList.vue";
import LoginPage from "./views/LoginPage.vue";
import Home from "./views/Home.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/invoice/create",
      name: "invoice-create",
      component: InvoiceCreate
    },
    {
      path: "/invoice/list",
      name: "invoice-list",
      component: InvoiceList
    },
    {
      path: "/",
      name: "login-page",
      component: LoginPage
    },
    {
      path: "/home",
      name: "home",
      component: Home
    }
  ]
})
