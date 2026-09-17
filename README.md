<img align="right" width="40%" src="https://www.finos.org/hubfs/FINOS/finos-logo/FINOS_Icon_Wordmark_Name_RGB_horizontal.png">

# FINOS Software Project Blueprint

Project blueprint is a GitHub repository template for all [Fintech Open Source Foundation (FINOS)](https://www.finos.org/) hosted GitHub repositories, contributed and maintained by FINOS.

## How to use this blueprint

Please also follow the instructions on [community.finos.org/docs/collaboration-infrastructure#finos-project-blueprint](https://community.finos.org/docs/collaboration-infrastructure#finos-project-blueprint).

1. Click **Use this template** on this repository and follow GitHub's instructions.
2. In your new repository, copy `README.template.md` to `README.md` (replacing this file).
3. Search and replace the following tokens across the copied files:

| Token | Replace with |
| ----- | ------------ |
| `{PROJECT_NAME}` | The name of the FINOS project, e.g. `Open Developer Platform` |
| `{PROJECT_SLUG}` | The GitHub repository name, e.g. `software-project-blueprint` |
| `{PROJECT_URL}` | The GitHub repository URL, e.g. `https://github.com/finos/software-project-blueprint` |
| `{PROJECT_MAILING_LIST}` | The project mailing list address, if any |
| `{YYYY}` | The year you started working on the code |
| `{CURRENT_YEAR}` | The current year |
| `{NAME_OF_COPYRIGHT_OWNER}` | The copyright owner of the code (typically you or your employer) |
| `{EMAIL_OF_COPYRIGHT_OWNER}` | The email address of the copyright owner of the code (if known) |
| `{OTHER_NOTICES}` | Additional NOTICE attributions required by dependencies, or remove this token |

4. Open the `NOTICE` file and either remove `{OTHER_NOTICES}` or add attributions if required by your code's dependencies.
5. Open `README.md` and complete the content as appropriate for your project.
6. Open `MAINTAINERS.md` and add maintainer names, GitHub usernames, and email addresses.
7. (Optional) Remove the `docs/` and `website/` folders if you do not need a project documentation website.

Placeholders use `{UPPER_SNAKE_CASE}` tokens throughout the blueprint.

## Blueprint preview

A preview of the blueprint can be found on [project-blueprint.finos.org](https://project-blueprint.finos.org)

## Governance

This blueprint implements [FINOS open source software project governance](https://community.finos.org/docs/governance/#open-source-software-projects) on community.finos.org.

## License

Copyright 2019 Fintech Open Source Foundation

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
