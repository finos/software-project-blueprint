module.exports = {
  mainSidebar: {
    'Getting Started': ["what-is-odp", "project-collaboration", "finos-maintainers-cheatsheet"],
    'Development Infrastructure': [
      {
        type: 'category',
        label: 'Continuous Integration',
        items: [
          "development-infrastructure/continuous-integration/csharp"
        ]
      },
      {
        type: 'category',
        label: 'Code Validations',
        items: [
        "development-infrastructure/code-validation/intro",
        "development-infrastructure/code-validation/bithound",
        "development-infrastructure/code-validation/codeclimate",
        "development-infrastructure/code-validation/coverityscan",
        "development-infrastructure/code-validation/nodesecurity",
        "development-infrastructure/code-validation/sonarcloud",
        "development-infrastructure/code-validation/whitesource"
        ]
      }
    ],
    'About ODP': ["contributing","team","roadmap"],
  },
}