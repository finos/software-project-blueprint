export default {
  "title": "Software Project Blueprint",
  "tagline": "Delivering Docusaurus microsites for the Fintech Open Source Foundation",
  "url": "https://blueprint.finos.org",
  "baseUrl": "/",
  "favicon": "img/favicon/favicon-odp.ico",
  "projectName": "software-project-blueprint",
  "organizationName": "finos",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "themeConfig": {
    "navbar": {
      "title": "Software Project Blueprint",
      "logo": {
        "alt": "FINOS Logo",
        "src": "img/favicon/favicon-finos.ico"
      },
      "items": [
        {
          "to": "docs/what-is-odp",
          "label": "Docs",
          "position": "right"
        },
        {
          "to": "docs/roadmap",
          "label": "Roadmap",
          "position": "right"
        },
        {
          "to": "docs/team",
          "label": "Team",
          "position": "right"
        },
        {
          "href": "https://github.com/finos/software-project-blueprint",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "copyright": "Copyright © 2020 - Software Project Blueprint - FINOS - The Fintech Open Source Foundation",
      "logo": {
        "alt": "FINOS Logo",
        "src": "img/favicon/favicon-finos.ico",
        "href": "https://finos.org"
      },
      "style": "dark",
      "links": [
        {
          "title": "FINOS Initiatives",
          "items": [
            {
              "label": "FINOS Projects on GitHub",
              "to": "https://github.com/finos"
            },
            {
              "label": "Engage the FINOS Community",
              "to": "https://www.finos.org/engage-with-our-community"
            },
            {
              "label": "FINOS News and Events",
              "to": "https://www.finos.org/news-and-events"
            }
          ]
        },
        {
          "title": "Quick links",
          "items": [
            {
              "label": "Join a Project Meeting",
              "to": "https://github.com/finos/open-developer-platform/issues?q=label%3Ameeting+"
            },
            {
              "label": "Browse Good First Issues",
              "to": "https://github.com/finos/open-developer-platform/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
            },
            {
              "label": "Ask a Question",
              "to": "https://github.com/finos/open-developer-platform/issues/new?assignees=&labels=&template=Support_question.md&title="
            }
          ]
        },
        {
          "title": "FINOS Community",
          "items": [
            {
              "label": "FINOS Community Handbook",
              "to": "https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook"
            },
            {
              "label": "FINOS Community Governance",
              "to": "https://github.com/finos/community/tree/master/governance"
            },
            {
              "label": "FINOS on LinkedIn",
              "to": "https://www.linkedin.com/company/finosfoundation"
            }
          ]
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../docs",
          "editUrl": "https://github.com/finos/open-developer-platform/edit/master/website/",
          "sidebarPath": "/Users/jamesmcleod/Projects/FINOS/software-project-blueprint/website/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/jamesmcleod/Projects/FINOS/software-project-blueprint/website/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};