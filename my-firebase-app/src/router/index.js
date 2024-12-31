import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from "firebase/auth";
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: SignUp },
  { 
    path: '/home', 
    component: Home, 
    beforeEnter: (to, from, next) => {
      const auth = getAuth();
      const user = auth.currentUser;  

      if (user) {
        next();  
      } else {
        next('/login');  
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
