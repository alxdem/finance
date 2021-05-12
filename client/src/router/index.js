import routes from '@/routes';
import {createWebHistory, createRouter} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => {
    return record.meta.auth;
  })) {

    if(localStorage.getItem('jwt') == null) {
      next({name: 'Login'})
    }
  } else {
    next()
  }
});

export default router;