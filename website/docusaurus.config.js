// Docs at https://docusaurus.io/docs

// Search-and-replace tokens. {PROJECT_SITE_URL} is the real preview URL below
// because `url` must stay a valid absolute https URL for this blueprint to build.
// Adopters: replace that value with the project's site URL. See README.md.
const projectName = '{PROJECT_NAME}'
const projectSlug = '{PROJECT_SLUG}'
const copyrightOwner = '{NAME_OF_COPYRIGHT_OWNER}'
const projectSiteUrl = 'https://project-blueprint.finos.org'

module.exports = {
  title: `FINOS ${projectName}`,
  tagline: `FINOS ${projectName}`,
  url: projectSiteUrl,
  baseUrl: '/',
  trailingSlash: false,
  // https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },
  onBrokenLinks: 'throw',
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: `FINOS ${projectName}`,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  themeConfig: {
    navbar: {
      title: `FINOS ${projectName}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
      },
      items: [
        {to: 'docs/home', label: 'Docs', position: 'right'},
        {to: 'docs/roadmap', label: 'Roadmap', position: 'right'},
        {to: 'docs/team', label: 'Team', position: 'right'},
        {
          href: `https://github.com/finos/${projectSlug}`,
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    metadata: [
      {name: 'description', content: 'FINOS project documentation website blueprint.'},
      {property: 'og:title', content: `FINOS ${projectName}`},
      {property: 'og:description', content: 'FINOS project documentation website blueprint.'},
      {property: 'og:image', content: `https://raw.githubusercontent.com/finos/${projectSlug}/main/website/static/img/feature/feature-img.png`},
      {property: 'og:url', content: `${projectSiteUrl}/`},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: `FINOS ${projectName}`},
      {name: 'twitter:description', content: 'FINOS project documentation website blueprint.'},
      {name: 'twitter:image', content: `https://raw.githubusercontent.com/finos/${projectSlug}/main/website/static/img/feature/feature-img.png`},
    ],
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/home',
            },
            {
              label: 'Roadmap',
              to: 'docs/roadmap',
            },
            {
              label: 'Team',
              to: 'docs/team',
            }
          ]
        },
        {
          title: 'FINOS',
          items: [
            {
              label: 'FINOS Website',
              href: 'https://www.finos.org/',
            },
            {
              label: 'Community Handbook',
              href: 'https://community.finos.org/',
            },
            {
              label: 'FINOS Projects',
              href: 'https://landscape.finos.org',
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              href: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              href: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              href: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl: ({versionDocsDirPath, docPath}) => {
            // versionDocsDirPath is relative to website/ (../docs). Drop the
            // leading ../ so the GitHub path is docs/<file> on the main branch.
            const repoDir = versionDocsDirPath.replace(/^\.\.\//, '');
            return `https://github.com/finos/${projectSlug}/edit/main/${repoDir}/${docPath}`;
          },
          sidebarPath: require.resolve('./sidebars.js')
        },
        // This blueprint has no blog. Remove this line and add a blog/ directory to enable one.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
