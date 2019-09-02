/**
 * read me: router组件
 * Created by pengtao on 2019/8/15
 */
import { lazy } from 'react';

export default [
  {
    path: '/basic',
    // component: lazy(() => import('')),
    redirect: '/basic/partD',
    exact: true
  },
  {
    path: '/basic/partD',
    component: lazy(() => import('@/components/indexLayout/partD/partD'))
  },
  {
    path: '/basic/partE',
    component: lazy(() => import('@/components/indexLayout/partE/partE'))
  },
  {
    path: '/partA',
    component: lazy(() => import('@/components/partA'))
  },
  {
    path: '/partB',
    component: lazy(() => import('@/components/partB'))
  },
  {
    path: '/partC',
    redirect: '/partA',
    // component: lazy(() => import('@/components/partC'))
  }
];