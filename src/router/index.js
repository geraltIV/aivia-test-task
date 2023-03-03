import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    redirect: () => {
      return { path: "/products" };
    },
  },
  {
    path: "/products",
    component: () => import("@/layouts/default/Default.vue"),
    beforeEnter: [guardRoute],
    children: [
      {
        path: "",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Login.vue"),
      },
    ],
  },
];

function guardRoute(to, from, next) {
  if (sessionStorage.getItem("token")) {
    next();
  } else {
    next("/login");
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
