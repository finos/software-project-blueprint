<img align="right" width="40%" src="https://www.finos.org/hubfs/FINOS/finos-logo/FINOS_Icon_Wordmark_Name_RGB_horizontal.png">

# project-blueprint

Legal blueprint for new [Fintech Open Source Foundation (FINOS)](https://www.finos.org/) hosted projects.

## How to use this repository

1. Clone this repository locally
2. Copy the `LICENSE`, `LICENSE.spdx`, and `NOTICE` files, as well as the entire `.github` directory, to your repository (do _not_ copy this `README.md` file).
3. Copy the `README.template.md` file to your repository, and rename it to `README.md`.
4. Search and replace the following tokens in the newly copied files:

  | Token                       | Replace with                                                      |
  | --------------------------- | ----------------------------------------------------------------- |
  | `{program name}`            | The name of the GitHub organization the project resides in.       |
  | `{project name}`            | The name of the GitHub repository the project resides in.         |
  | `{yyyy}`                    | The year you started working on the code.                         |
  | `{name of copyright owner}` | The copyright owner of the code (typically you or your employer). |

5. Open the `NOTICE` file in a text editor and either remove the `{any attributions required by your dependencies}` token, or [add attributions if required by your code's dependencies](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530255/License+Categories).
6. Add the [Apache license header to all of your source files](https://www.apache.org/licenses/LICENSE-2.0.html#apply).
7. Commit all of your changes.

## License

Copyright 2017 Fintech Open Source Foundation

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
