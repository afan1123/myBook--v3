const Index = () => import('../pages')
const Home = () => import('../pages/home')
const Staff = () => import('../pages/staff')

import { StaffRoute } from './staffRoute.js'

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        redirect: {
          name: 'home',
        },
      },
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
      {
        path: 'staff',
        name: 'staff',
        component: Staff,
        children: StaffRoute,
      },
    ],
  },
]
export default routes
