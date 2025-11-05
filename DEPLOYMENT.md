# GitHub Pages Deployment Guide

## Quick Setup

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Repository configuration:**
   - This repository (`synirgy-workshop.github.io`) deploys to the root domain
   - The `basePath` and `assetPrefix` are set to empty strings `''` in `next.config.js`
   - **Note:** Root domain repos (named `orgname.github.io` or `username.github.io`) always use empty basePath
   - **For subdirectory repos:** If your repo is named differently (e.g., `my-workshop`), you need:
     ```js
     basePath: process.env.NODE_ENV === 'production' ? '/my-workshop' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/my-workshop' : '',
     ```

3. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy your site
   - The site will be available at: `https://synirgy-workshop.github.io/`

## Important Notes

- **Root domain repos** (`orgname.github.io` or `username.github.io`): Set `basePath` and `assetPrefix` to `''`
- **Subdirectory repos** (e.g., `orgname.github.io/repo-name`): Set both to `'/repo-name'`
- The deployment workflow runs automatically on every push to `main`
- You can manually trigger it from the Actions tab

## Troubleshooting

### 404 Errors
- Ensure `basePath` matches your repository name exactly
- Check that the GitHub Actions workflow completed successfully
- Verify that Pages is enabled in repository settings

### Build Failures
- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility (20+)

### Styling Issues
- Clear browser cache
- Ensure CSS files are being loaded correctly
- Check browser console for 404 errors on assets

