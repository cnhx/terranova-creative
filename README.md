# Terranova Creative — Website

Static website for Terranova Creative, a cultural strategy & institutional advisory firm.

## Stack
- Pure HTML / CSS / Vanilla JS
- No build tools required
- Deployed via GitHub Pages

## Structure
```
├── index.html        # Home
├── practice.html     # Practice (5 areas)
├── about.html        # About
├── contact.html      # Contact + Form
├── css/style.css     # All styles
└── js/main.js        # Animations, nav, form
```

## Before Launch — Complete These Placeholders

1. **Contact form**: Sign up at [formspree.io](https://formspree.io), create a form, replace `YOUR_FORM_ID` in `contact.html` line with your actual form ID.
2. **Email address**: Replace `hello@terranovacreative.com` in `contact.html` with the actual email.
3. **Logo**: If a real SVG logo file is provided, replace the inline SVG in each page's `<header>`.
4. **Custom domain** (optional): Add a `CNAME` file with your domain (e.g., `terranovacreative.com`), then configure DNS.

## GitHub Pages Deployment

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Your site will be live at `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Local Preview

Open any `.html` file directly in a browser, or use a local server:
```bash
npx serve .
# or
python3 -m http.server 8080
```
