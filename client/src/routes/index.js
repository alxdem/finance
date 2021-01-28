const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/DashboardPage')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration')
  },
  {
    path: '/operations',
    name: 'Operations',
    component: () => import('../views/OperationsPage')
  },
];

export default routes;
