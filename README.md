# Spirit Volleyball Edmonton

Website for the Spirit Volleyball Edmonton girls' volleyball development
program.

## Local Development

Use Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
npm run lint
npm audit --omit=dev
```

## Current Hosting Build

The existing deployment uses the vinext/Sites build:

```bash
npm run build
```

## GitHub Pages Build

GitHub Pages hosts static files, so this project includes a separate static
export build:

```bash
npm run build:github
```

That command creates the `out/` folder that GitHub Pages deploys.

## Deploying On GitHub Pages

1. Create a GitHub repository.
2. Push this project to the repository's `main` branch.
3. In GitHub, open **Settings > Pages**.
4. Set **Build and deployment > Source** to **GitHub Actions**.
5. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.

The workflow file is `.github/workflows/github-pages.yml`.

Optional but recommended: add a repository variable named `SITE_URL` with the
final public URL, such as `https://example.com`. The build uses it for social
sharing metadata.

## Custom Domain

After buying or choosing a domain:

1. In GitHub, open **Settings > Pages**.
2. Enter the custom domain.
3. Follow GitHub's DNS instructions at your domain provider.
4. Wait for DNS verification and HTTPS provisioning.

If you know the final domain before deployment, add it as `public/CNAME` with
only the domain name inside the file.
