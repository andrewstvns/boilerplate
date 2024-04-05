import { Home, Detail } from 'pages';

const AppRoutes = [
  {
    id: 0,
    path: '/',
    element: <Home/>
  },
  {
    id: 1,
    path: '/detail',
    element: <Detail />
  }
];

export default AppRoutes;