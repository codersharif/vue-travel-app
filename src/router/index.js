import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const linkExactActiveClass="vue-link-active-class";
const mode="history"; // remove hash (#)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/details/:slug",
    name:"DestinationDetails",
    component: () =>
    import(/* webpackChunkName: "DestinationDetails" */"../views/DestinationDetails")
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass,
  mode
});

export default router
