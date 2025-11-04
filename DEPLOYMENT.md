# GitHub Pages Deployment Guide

## Quick Setup

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Update repository name in `next.config.js`:**
   - If your repository is NOT named `synirgy-website`, update the `basePath` and `assetPrefix` values
   - For example, if your repo is `my-workshop`, change:
     ```js
     basePath: process.env.NODE_ENV === 'production' ? '/my-workshop' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/my-workshop' : '',
     ```

3. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy your site
   - The site will be available at: `https://yourusername.github.io/repository-name/`

## Important Notes

- The `basePath` and `assetPrefix` MUST match your repository name for GitHub Pages
- If your repository is in the root (not a subdirectory), set both to empty strings: `''`
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

