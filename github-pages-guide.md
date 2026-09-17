# GitHub Pages Guide for Your Portfolio

This portfolio is ready to be published as a GitHub Pages site.

## 1. Create a GitHub repository

1. Go to https://github.com
2. Click on New repository
3. Give it a name such as:
   - pranjul-portfolio
   - pranjul-gupta-portfolio
   - design-portfolio
4. Keep it public
5. Click Create repository

## 2. Upload the project files

Open your terminal and run:

```bash
cd "/Users/udkipg/Downloads/githhub/Portfolio"
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

Replace:
- YOUR_USERNAME with your GitHub username
- YOUR_REPOSITORY_NAME with your repo name

## 3. Enable GitHub Pages

1. Open the repository in GitHub
2. Click Settings
3. Scroll to Pages in the left menu
4. Under Source, choose Deploy from a branch
5. Select branch: main
6. Select folder: /root
7. Save

Your site will be live in a few minutes at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## 4. Custom domain (optional)

If you want your portfolio to use a custom domain like:

```text
www.pranjulgupta.design
```

then you can connect it from the GitHub Pages section in settings.

## 5. Keep it updated

Whenever you make changes:

```bash
git add .
git commit -m "Updated portfolio"
git push origin main
```

## 6. Recommended portfolio structure

Your site is simple and works well for GitHub Pages because it uses static files:
- index.html
- styles.css
- script.js

This is perfect for a designer portfolio without needing a framework.

## 7. Good next step

After publishing, add:
- your Behance profile
- email CTA
- LinkedIn link
- project thumbnails
- service list
- client testimonials

## 8. Final portfolio URL example

```text
https://pranjulgupta.github.io/pranjul-portfolio/
```

This is a clean and professional way to showcase your work online.
