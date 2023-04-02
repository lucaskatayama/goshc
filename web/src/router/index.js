import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/card",
    name: "card",
    component: () => import("@/views/CardView"),
  },
  {
    path: "/qrcode",
    name: "qrcode",
    component: () => import("@/views/QRCodeView"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
