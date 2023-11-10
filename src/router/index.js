// Composables
<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
=======
import { createRouter, createWebHistory } from 'vue-router'
// import JoinShowTimes from "../components/JoinShowTimes.vue";


const routes = [
  {
    path: '/login',
    name: "login",
    component: () => import('@/components/login/Login.vue'),
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
>>>>>>> cb16213d58495f64b182d3fbab873bf0231f4554
    children: [
      {
        path: "",
        name: "Home",
<<<<<<< HEAD
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
=======
>>>>>>> cb16213d58495f64b182d3fbab873bf0231f4554
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
<<<<<<< HEAD
        path: "PubFeed",
        name: "Public_Feed",
        component: () => import("@/views/Public_Feed.vue"),
=======
        path: "showtime",
        name: "JoinShowTimes",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/JoinShowTimes.vue"
          ),
      },
      {
        path: "scheduleStatus",
        name: "scheduleStatus",
        component: () => import("@/components/scheduleStatus.vue"),
      },
      {
        path: "partyCreate",
        name: "partyCreate",
        component: () => import("@/components/partyCreate.vue"),
      },
      {
        path: 'dm', name: 'DirectMessage', component: () => import(/* webpackChunkName: "home" */ '@/components/DirectMessage.vue')
>>>>>>> cb16213d58495f64b182d3fbab873bf0231f4554
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
