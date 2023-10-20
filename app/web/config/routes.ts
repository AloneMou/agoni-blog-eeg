import {IRoute} from "@umijs/core";

export const routes: IRoute[] = [
  {
    path: '/',
    redirect: '/',
    routes: [
      {
        path: '/',
        redirect: '/index',
      },
      {
        path: '/index',
        component: '@/layouts/BasicLayout',
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    routes: [
      {
        path: '/home',
        redirect: '/home/index',
      },
      {
        name: '首页',
        path: '/home/index',
        component: '@/pages/home',
      },
    ]
  },
  {
    name: '个人中心',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/info',
      },
      {
        name: '个人资料',
        path: '/account/info',
        component: '@/pages/index',
      },
      {
        name: '我的收藏',
        path: '/account/favour',
        component: '@/pages/me',
      }
    ]
  }

]
