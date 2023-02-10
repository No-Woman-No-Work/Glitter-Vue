import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { isAuthenticated } from './authGuard'

// import guard from './authGuard.js'
// beforeEnter: [haveAuthGuard] --> should be used in those routes that require authentication

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
  },
  {
    path: "/new-password",
    name: "new-password",
    component: () =>
      import(
        /* webpackChunkName: "new-password" */ "../views/PasswordView.vue"
      ),
  },
  {
    path: "/public",
    name: "public",
    component: () =>
      import(/* webpackChunkName: "public" */ "../views/PublicView.vue"),
  },
  {
    path: "/private",
    name: "private",
    component: () =>
      import(/* webpackChunkName: "private" */ "../views/AreaPrivada.vue"),
  },
  {
    path: "/unsubscribe",
    name: "unsubscribe",
    component: () =>
      import(
        /* webpackChunkName: "unsubscribe" */ "../views/UnsubscribeView.vue"
      ),
  },
  {
    path: "/oldpublic",
    name: "oldpublic",
    component: () =>
      import(/* webpackChunkName: "public" */ "../views/OldPublicView.vue"),
  },
  {
    path: "/tests",
    name: "tests",
    component: () =>
      import(/* webpackChunkName: "public" */ "../views/TweetTest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
