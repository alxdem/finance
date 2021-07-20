import routes from '@/routes';
import {createWebHistory, createRouter} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // console.log(to + from);
  // console.log('to.matched', to.matched.some(record => {
  //     return record.meta.auth;
  //   }));

  if(to.matched.some(record => record.meta.auth)) {
    router.push('/login');
    console.log('i')
  }

  next();
  // if(to.matched.some(record => {
  //   return record.meta.auth;
  // })) {
  //
  //   if(localStorage.getItem('jwt') == null) {
  //     next({name: 'Login'})
  //   }
  // } else {
  //   next()
  // }
});

export default router;