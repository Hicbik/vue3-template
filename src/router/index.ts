import * as VueRouter from "vue-router";
import Home from "../pages/home.vue";

const routes = [{ path: "/", component: Home }];

const route = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default route;
