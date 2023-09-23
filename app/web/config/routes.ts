import {IRoute} from "@umijs/core";

export const routes: IRoute[] = [
  {
    path: '/',
    layout: false,
    routes: [
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        routes: [
          {
            name: '首页',
            path: '/',
            component: '@/pages/home',
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
                path: './info',
                component: '@/pages/index',
              },
              {
                name: '我的收藏',
                path: './favour',
                component: '@/pages/me',
              }
            ]
          }
        ],
      }
    ]
  },
]
