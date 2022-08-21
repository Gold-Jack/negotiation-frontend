import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import Layout from "@/layout/layout";

const routes = [
  {
    path: '/user/login',
    name: 'User-Login',
    component: () => import('@/views/login-view/Login')
  },
  {
    path: '/user/register',
    name: 'User-Register',
    component: () => import('@/views/login-view/Register')
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [
      { path: '/home', name: 'Home', component: () => import('@/views/Home') },
      { path: '/person', name: 'Person', component: () => import('@/views/Person') },
    ]
  },
  {
    path: '/do-quiz/example',
    name: 'Do-Quiz-Example',
    component: () => import('@/views/quiz-view/QuizExample')
  },
  {
    path: '/do-quiz/main',
    name: 'Do-Quiz-Main',
    component: () => import('@/views/quiz-view/QuizMain')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
