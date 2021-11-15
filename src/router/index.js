import VueRouter from 'vue-router';
import Vue from 'vue';

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import(/* webpackChunkName: "home" */ "./../components/Home.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () =>
          import(
            /* webpackChunkName: "project" */ "./../components/Home.vue"
          )
      },{
        path: "project",
        name: "Project",
        component: () =>
          import(
            /* webpackChunkName: "project" */ "./../components/Project.vue"
          )
      },
      {
        path: "payments",
        name: "Payments",
        component: () =>
          import(
            /* webpackChunkName: "project" */ "./../components/Payments.vue"
          )
      },
      {
        path: "activity",
        name: "Activity",
        component: () =>
          import(
            /* webpackChunkName: "project" */ "./../components/Activity.vue"
          )
      },
      {
        path: "settings",
        name: "Settings",
        component: () =>
          import(
            /* webpackChunkName: "project" */ "./../components/Settings.vue"
          )
      }
    ]
  }
];
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

export default router;
