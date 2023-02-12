import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthGuard} from './authGuard'
// import { isAuthenticated } from "./authGuard";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    // beforeEnter: isAuthenticated,
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    
  },
  {
    path: "/signup",
    name: "signup",
    // beforeEnter: useAuthGuard,
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
  },
  {
    path: "/new-password",
    name: "new-password",
    component: () =>
      import(
        /* webpackChunkName: "new-password" */ "../views/PasswordView.vue"),
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
    beforeEnter: useAuthGuard,
    component: () =>
      import(/* webpackChunkName: "private" */ "../views/PrivateView.vue"),
  },
  {
    path: "/unsubscribe",
    name: "unsubscribe",
    beforeEnter: useAuthGuard,
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
  // {
  //   path: "/public-test",
  //   name: "publictests",
  //   component: () =>
  //     import(/* webpackChunkName: "public" */ "../views/PublicTestView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
