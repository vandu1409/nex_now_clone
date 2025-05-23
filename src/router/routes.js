import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import HomePage from '../views/HomePage.vue';
import SearchPage from '../views/SearchPage.vue';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LoginWithEmail from '../views/LoginWithEmail.vue';


const routes = [
  {
    path: '/',
    component: MainLayout, 
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,

      },
      {
        path: '/search',
        name: 'search',
        component: SearchPage,
      
      },
    ],
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
        // meta: { requiresAuth: false },
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
        // meta: { requiresAuth: false },
      },
      {
        path: '/login/email',
        name: 'LoginWithEmail',
        component: LoginWithEmail,
        // meta: { requiresAuth: false },
      },
    ],
  },
];

export default routes