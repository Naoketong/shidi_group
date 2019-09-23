import Vue from "vue";
import Router from "vue-router";
// import BasicLayout from "./components/BasicLayout.vue";
import Home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home
        }
      ]
    }
  ]
});
