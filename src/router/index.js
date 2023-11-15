// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/login',
    name: "login",
    component: () => import('@/components/login/Login.vue'),
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "PubFeed",
        name: "Public_Feed",
        component: () => import("@/views/Public_Feed.vue"),
      },
      {
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
        path: 'DM', name: 'DirectMessage', component: () => import(/* webpackChunkName: "home" */ '@/components/DirectMessage.vue')
      },
      {
        path: 'Alert', name: 'Notifications', component: () => import(/* webpackChunkName: "home" */ '@/components/Notifications.vue')
      },
      {
        path: 'Notice', name: 'Notice', component: () => import(/* webpackChunkName: "home" */ '@/components/Notice.vue')
      },
      {
        path: 'MySetting', name: 'MySetting', component: () => import(/* webpackChunkName: "home" */ '@/components/MySetting.vue')
      },
      {
        path: 'PlanWrite', name: 'PlanWrite', component: () => import(/* webpackChunkName: "home" */ '@/components/PlanWrite.vue')
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
