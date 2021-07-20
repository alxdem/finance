const routes = [
  {
    path: '/',
    name: 'Dashboard',
    meta: {
      layout: 'MainLayout',
      auth: true
    },
    component: () => import('../views/DashboardPage')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'EmptyLayout'
    },
    component: () => import('../views/Login')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {
      layout: 'EmptyLayout'
    },
    component: () => import('../views/Registration')
  },
  {
    path: '/operations',
    name: 'Operations',
    meta: {
      layout: 'MainLayout',
      auth: false
    },
    component: () => import('../views/OperationsPage')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      layout: 'MainLayout',
      auth: false
    },
    component: () => import('../views/CategoriesPage')
  },
];

export default routes;
