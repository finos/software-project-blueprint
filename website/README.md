[This website](https://project-blueprint.finos.org/) was created with [Docusaurus v3](https://docusaurus.io/docs/3.7.0).

In order to start working with Docusaurus, please read the [Getting Started guide](https://docusaurus.io/docs/configuration) and browse through the following folders and files:
- `website` - contains the Node/React code to build the website
- `website/docusaurus.config.js` - contains the Docusaurus configuration; you'll need to edit this file.
- `website/static` - contains images, PDF and other static assets used in the website; if you add a `file.pdf` in this folder, it will be served as `https://<your_host>/file.pdf`.
- `docs` - contains the `.md` and `.mdx` files that are served as `https://<your_host>/<file_id>` ; the `file_id` is defined at the top of the file.

## Local run

Running Docusaurus locally is very simple, just follow these steps:
- Make sure `node` version is 18 or higher, using `node -v` ; you can use [nvm](https://github.com/nvm-sh/nvm) to install different node versions in your system.
- `cd website ; npm install ; npm run start`

The command should open your browser and point to `http://localhost:3000`.

## Deployment

[Netlify](https://www.netlify.com/) is the default way to serve FINOS websites publicly. Find docs [here](https://docs.netlify.com/configure-builds/get-started/).

You can configure Netlify using your own GitHub account, pointing to a personal repository (or fork); when adding a new site, please use the following configuration:
- Working directory: `website`
- Build command: `yarn build`
- Build directory: `website/build`

If you want to serve your website through `https://{PROJECT_SLUG}.finos.org`, please email [help@finos.org](mailto:help@finos.org). To check a preview, visit https://project-blueprint.finos.org .

## Website dependency updates

Website dependencies are excluded from OSV scans by default. If not, vulnerabilities negatively impact the health of the project as shown in [LFX Insights](https://insights.linuxfoundation.org) and [OSSF Scorecard](https://scorecard.dev/) even though the website is never actually shipped to the users.

Note that [Docusaurus](https://github.com/facebook/docusaurus) patches often get published weeks or months after the vulnerable dependencies are detected. This means that automated dependency management tools like Dependabot are unable to quickly fix them and improve the project health score.

Although not recommended, if you prefer to include website vulnerabilities in third-party scans, you can do this by deleting the [`osv-scanner.toml`](./osv-scanner.toml) file in the website root directory.
