import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { left: 0, top: 0 };
  // },
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   const isAuthenticated = !!authStore.token;
//   const userRole = authStore.user?.role || null;

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     return next({ name: 'Login' });
//   }
//   if (to.meta.role && !to.meta.role.includes(userRole)) {
//     return next({ name: 'Home'});
//   }

//   next();
// });

export default router;
