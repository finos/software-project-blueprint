
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','3c6'),
  
  routes: [
{
  path: '/docs/development-infrastructure/code-validation/bithound',
  component: ComponentCreator('/docs/development-infrastructure/code-validation/bithound','9b3'),
  exact: true,
},
{
  path: '/docs/development-infrastructure/code-validation/codeclimate',
  component: ComponentCreator('/docs/development-infrastructure/code-validation/codeclimate','baf'),
  exact: true,
},
{
  path: '/docs/development-infrastructure/code-validation/coverityscan',
  component: ComponentCreator('/docs/development-infrastructure/code-validation/coverityscan','61b'),
  exact: true,
},
{
  path: '/docs/development-infrastructure/code-validation/intro',
  component: ComponentCreator('/docs/development-infrastructure/code-validation/intro','53e'),
  exact: true,
},
{
  path: '/docs/development-infrastructure/code-validation/nodesecurity',
  component: ComponentCreator('/docs/development-infrastructure/code-validation/nodesecurity','310'),
  exact: true,
},
{
  path: '/docs/development-infrastructure/code-validation/sonarcloud',
  component: ComponentCreator('/docs/development-infrastructure/code-validation/sonarcloud','556'),
  exact: true,
},
{
  path: '/docs/development-infrastructure/code-validation/whitesource',
  component: ComponentCreator('/docs/development-infrastructure/code-validation/whitesource','88f'),
  exact: true,
},
{
  path: '/docs/development-infrastructure/continuous-integration/csharp',
  component: ComponentCreator('/docs/development-infrastructure/continuous-integration/csharp','84c'),
  exact: true,
},
{
  path: '/docs/team',
  component: ComponentCreator('/docs/team','811'),
  exact: true,
},
{
  path: '/docs/what-is-odp',
  component: ComponentCreator('/docs/what-is-odp','7e1'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
