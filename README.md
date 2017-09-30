# project-blueprint
Legal blueprint for new Foundation-hosted projects.

## How to use this repository

1. Copy the `LICENSE`, `LICENSE.spdx`, and `NOTICE` files, as well as the entire `.github` directory, to your own repository (do _not_ copy this `README.md` file, unless you don't have one).
2. Search and replace the following tokens in the newly copied files:

  | Token                       | Replace with                                                      |
  | --------------------------- | ----------------------------------------------------------------- |
  | `{project name}`            | The name of the GitHub repository the project resides in.         |
  | `{yyyy}`                    | The year you started working on the code.                         |
  | `{name of copyright owner}` | The copyright owner of the code (typically you or your employer). |

3. Open the `NOTICE` file in a text editor and [add attributions if required by your code's dependencies](https://symphonyoss.atlassian.net/wiki/display/FM/License+Categories).
4. Add the [Apache license header to all of your source files](https://symphonyoss.atlassian.net/wiki/display/FM/Legal+Requirements#LegalRequirements-Sourcecodelicenseheaders).
5. Commit all of your changes.

## License

Copyright © 2017 Symphony Software Foundation

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
