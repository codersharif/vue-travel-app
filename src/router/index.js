import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js";


Vue.use(VueRouter);

const linkExactActiveClass = "vue-link-active-class";
const mode = "history"; // remove hash (#)
const scrollBehavior=(to, from, savedPosition)=> {
  if (savedPosition) {
    return savedPosition;
  } else {
    const position = {};
    if (to.hash) {
      position.selector = to.hash;
      if(to.hash === "#experience"){
        position.offset = {y:90};
      }
      if (document.querySelector(to.hash)) {
        return position;
      }
      return false;
    }
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
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
    path: "/destination/:slug",
    props: true,
    name: "DestinationDetails",
    component: () =>
      import(/* webpackChunkName: "DestinationDetails" */"../views/DestinationDetails"),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(/* webpackChunkName: "ExperienceDetails" */"../views/ExperienceDetails")
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exists) {
        next()
      } else {
        next({ name: "notFound" });
      }
    }
  },
  {
   path:"/user",
   name:"user",
   component: () => import(
      /* webpackChunkName: "user" */ 
      "../views/User"),
    meta: {requiresAuth:true}
  },
  {
   path:"/invoices",
   name:"invoices",
   component: () => import(
      /* webpackChunkName: "invoices" */ 
      "../views/Invoices"),
      meta: {requiresAuth:true}
  },
  {
    path:"/login",
    name:"login",
    component: () => import(
      /* webpackChunkName: "login" */ 
      "../views/Login"
    )
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () => import(
      /* webpackChunkName: "NotFound" */
      "../views/NotFound"
    )
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass,
  mode,
  scrollBehavior
});

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.user){
     next({
       name:"login",
       query:{redirect: to.fullPath}
     });
    }else{
     next();
    }
  }else{
   next()
  }
 
});

export default router
