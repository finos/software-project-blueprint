# project-blueprint
Legal blueprint for new [FINOS](https://www.finos.org/)-hosted projects.

## How to use this repository

1. Copy the `LICENSE`, `LICENSE.spdx`, and `NOTICE` files, as well as the entire `.github` directory, to your own repository (do _not_ copy this `README.md` file, unless you don't have one).
2. Search and replace the following tokens in the newly copied files:

  | Token                       | Replace with                                                      |
  | --------------------------- | ----------------------------------------------------------------- |
  | `{program name}`            | The name of the GitHub organization the project resides in.       |
  | `{project name}`            | The name of the GitHub repository the project resides in.         |
  | `{yyyy}`                    | The year you started working on the code.                         |
  | `{name of copyright owner}` | The copyright owner of the code (typically you or your employer). |

3. Open the `NOTICE` file in a text editor and either remove the `{any attributions required by your dependencies}` token, or [add attributions if required by your code's dependencies](https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530255/License+Categories).
4. Add the Apache license header to all of your source files.
5. Commit all of your changes.

## License

Copyright © 2017 FINOS

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
