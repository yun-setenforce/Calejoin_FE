// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/login/Login.vue"),
  },
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
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
        component: () => import("@/components/Feed/Public_Feed.vue"),
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
        path: "dm",
        name: "DirectMessage",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/DirectMessage.vue"
          ),
      },
      {
        path: "UserFeed",
        name: "User_Feed",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/Feed/User_Feed.vue"
          ),
      },
      {
        path: "UserFeedDetail",
        name: "User_Feed_Detail",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/Feed/User_Feed_Detail.vue"
          ),
      },

      {
        path: "dmView",
        name: "DirectMessageView",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/DirectMessageView.vue"
          ),
      },
      {
        path: "PlanWrite",
        name: "PlanWrite",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/PlanWrite.vue"),
      },
      {
        path: "Test",
        name: "Test",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/Feed/Test.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
