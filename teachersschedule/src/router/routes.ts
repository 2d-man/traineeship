import MainLayout from '../layouts/MainLayout.vue'

export const routes = [
  {
    path: '/',
    name: 'main',
    component: import('../views/main/MainPage.vue'),
    meta: {
      title: 'Главная',
    },
  },
  {
    path: '/courses',
    name: 'courses',
    component: import('../views/courses/CoursesPage.vue'),
    meta: {
      title: 'Курсы',
      layout: MainLayout,
    },
  },
  {
    path: '/users',
    name: 'users',
    component: import('../views/users/id/UsersPage.vue'),
    meta: {
      title: 'Пользователи',
    },
  },
  {
    path: '/users/:userID',
    name: 'user',
    component: import('../views/users/id/UsersPage.vue'),
    meta: {
      title: 'Пользователь',
    },
  },
]
