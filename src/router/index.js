import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import UserList from '../components/User/UserList.vue'
import AddUser from '../components/User/AddUser.vue'

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'User',
    component: User,
    children: [
      {
        path: '',
        name: 'UserList',
        component: UserList
      },
      {
        path: 'create',
        name: 'AddUser',
        component: AddUser
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
