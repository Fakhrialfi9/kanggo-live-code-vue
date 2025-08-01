import Vue from "vue";
import VueRouter from "vue-router";
import adminComponents from "@/main/layout/admin.vue";

Vue.use(VueRouter);
// get userProfile from localStorage

// get user role from userProfile

// Buat router dinamis berdasarkan current user role, good luck.

const routes = [
  {
    path: "/",
    redirect: "/admin", // Buat ini dinamis dari dari data userRole
  },
  {
    path: "/admin",
    name: "adminComponent",
    component: adminComponents,
    meta: { requiresRole: "admin" },
    children: [
      {
        // Pages Admin
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
