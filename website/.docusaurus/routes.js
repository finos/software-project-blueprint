
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','1cb'),
    routes: [
      {
        path: '/docs/home',
        component: ComponentCreator('/docs/home','0dd'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/roadmap',
        component: ComponentCreator('/docs/roadmap','b44'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/team',
        component: ComponentCreator('/docs/team','335'),
        exact: true,
        'sidebar': "mainSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
