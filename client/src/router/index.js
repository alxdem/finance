import routes from '@/routes';
import {createWebHistory, createRouter} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    if(localStorage.getItem('jwt') == null) {
      console.log('localStorage.getItem(\'jwt\')', localStorage.getItem('jwt'))
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
    console.log('to', to);
    console.log('from', from);
    console.log('next', next);
    // console.log('auth.loggedIn()', auth.loggedIn());
    // console.log('record', record);
  }
});

export default router;