[This website](https://project-blueprint.finos.org/) was created with [Docusaurus 3.10](https://docusaurus.io/docs).

In order to start working with Docusaurus, please read the [Getting Started guide](https://docusaurus.io/docs/configuration) and browse through the following folders and files:
- `website` - contains the Node/React code to build the website
- `website/docusaurus.config.js` - contains the Docusaurus configuration. Project name, slug, and copyright owner are `{TOKEN}` constants at the top of that file. `projectSiteUrl` is a real `https://` URL so this blueprint can build; replace it with `{PROJECT_SITE_URL}`.
- `website/static` - contains images, PDF and other static assets used in the website; if you add a `file.pdf` in this folder, it will be served as `https://<your_host>/file.pdf`.
- `docs` - contains the `.md` files that are served as `https://<your_host>/<file_id>` ; the `file_id` is defined at the top of the file. Docusaurus compiles these pages as MDX. In the page body a token is written `{"{PROJECT_NAME}"}` so the site builds before search-and-replace. Searching for `{PROJECT_NAME}` still updates that sentence. Front matter can use `{PROJECT_NAME}` directly.

## Local run

The Node.js version for this site is recorded in `.node-version`. `package.json` requires that major version or newer.

```sh
cd website
npm ci
npm run start
```

The command should open your browser and point to `http://localhost:3000`.

Install and build with npm. `website/package-lock.json` is the lockfile. There is no `yarn.lock`.

## Deployment

[Netlify](https://www.netlify.com/) is the default way to serve FINOS websites publicly. Find docs [here](https://docs.netlify.com/configure-builds/get-started/).

`netlify.toml` at the repository root sets the base directory, build command, publish directory, and Node.js version. You do not need to re-enter those in the Netlify UI.

If you want to serve your website through `https://{PROJECT_SLUG}.finos.org`, please email [help@finos.org](mailto:help@finos.org). To check a preview, visit https://project-blueprint.finos.org .

## Website dependency updates

Website dependencies are excluded from OSV scans by default. If not, vulnerabilities negatively impact the health of the project as shown in [LFX Insights](https://insights.linuxfoundation.org) and [OSSF Scorecard](https://scorecard.dev/) even though the website is never actually shipped to the users.

Note that [Docusaurus](https://github.com/facebook/docusaurus) patches often get published weeks or months after the vulnerable dependencies are detected. This means that automated dependency management tools like Dependabot are unable to quickly fix them and improve the project health score.

Although not recommended, if you prefer to include website vulnerabilities in third-party scans, you can do this by deleting the [`osv-scanner.toml`](./osv-scanner.toml) file in the website root directory.
