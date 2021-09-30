const List = () => import('../pages/staff/list.vue')
const Edit = () => import('../pages/staff/edit.vue')

export const StaffRoute = [
  {
    path: '',
    redirect: {
      name: 'list',
    },
  },
  {
    path: 'list',
    name: 'list',
    component: List,
  },
  {
    path: 'edit',
    name: 'edit',
    component: Edit,
  },
]
