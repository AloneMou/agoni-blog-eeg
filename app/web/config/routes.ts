import {IRoute} from "@umijs/core";

export const routes: IRoute[] = [
  {
    path: '/',
    routes: [
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/home',
          },
          {
            title: '首页',
            name: '首页',
            path: '/home',
            component: '@/pages/home',
          },
          {
            title: '面试题',
            name: '面试题',
            path: '/interview/list',
            component: '@/pages/interview/index',
          },
          {
            title: '问答',
            name: '问答',
            path: '/question/list',
            component: '@/pages/question/index',
          },
          {
            title: '开源项目推荐',
            name: '开源项目推荐',
            path: '/github/repository',
            component: '@/pages/common/github',
          },
          {
            title: '归档',
            name: '归档',
            path: '/archives',
            component: '@/pages/common/archives',
          },
          {
            title: '关于我',
            name: '关于我',
            path: '/about',
            component: '@/pages/common/about',
          },
          {
            title: '文章',
            name: '文章',
            hideInMenu: true,
            path: '/article/:id',
            component: '@/pages/article/index',
          }
        ]
      },

    ]
  },
  // {
  //   path: '/',
  //   redirect: '/index',
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   routes: [
  //     {
  //       path: '/home',
  //       redirect: '/home/index',
  //     },
  //     {
  //       name: '首页',
  //       path: '/home/index',
  //       component: '@/pages/home',
  //     },
  //   ]
  // },
  // {
  //   name: '个人中心',
  //   path: '/account',
  //   routes: [
  //     {
  //       path: '/account',
  //       redirect: '/account/info',
  //     },
  //
  //   ]
  // }

]
