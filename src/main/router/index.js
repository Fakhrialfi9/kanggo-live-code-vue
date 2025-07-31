import Vue from "vue";
import VueRouter from "vue-router";
import adminComponents from "@/ui/pages/admin/admin.vue";

Vue.use(VueRouter);

let userProfile = null;

// get userProfile from localStorage
try {
  userProfile = JSON.parse(localStorage.getItem("userProfile"));
} catch (e) {
  console.error("Invalid userProfile data in localStorage", e);
}

// get user role from userProfile
const userRole = userProfile.role;
console.log("userRole", userRole);

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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const profile = JSON.parse(localStorage.getItem("userProfile"));
  const requiredRole = to.meta.requiresRole;

  if (requiredRole && profile?.role !== requiredRole) {
    return next("/404");
  }

  next();
});

export default router;
