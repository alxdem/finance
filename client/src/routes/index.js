import OperationsPage from '@/views/OperationsPage';
import DashboardPage from '@/views/DashboardPage';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/operations',
    name: 'Operations',
    component: OperationsPage
  },
];

export default routes;
