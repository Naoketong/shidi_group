import Vue from "vue";
import Router from "vue-router";
import BasicLayout from "./components/BasicLayout.vue";
import Home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    {
      path: "/",
      component: BasicLayout,
      children: [
        {
          path: "/about",
          name: "Home",
          component: BasicLayout
        },
       
      ]
    }
  ]
});
