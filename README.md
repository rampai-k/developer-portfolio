# Katlego Rampai — Developer Portfolio

A responsive, no-build personal portfolio for Katlego Rampai, a software development student and aspiring junior software engineer based in Gauteng, South Africa.

## Overview

This site introduces Katlego's development interests, current toolkit, project plans, project-development background, education, and contact details. Planned repositories are labelled as in development; repository and demo links are only shown as available when URLs have been added to the project data.

## Purpose and features

- Present a professional profile for graduate programmes, internships, and junior software engineering roles.
- Responsive navigation, section links, active-section indication, and a keyboard-operable mobile menu.
- Project cards rendered from one editable JavaScript data array.
- Clear placeholder states for unconfirmed profile links, contact details, and education specifics.
- Semantic HTML, skip link, visible keyboard focus, reduced-motion support, and a no-JavaScript content fallback.
- Static HTML, CSS, and vanilla JavaScript; no dependencies, build step, contact-form service, or credentials.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Manrope and DM Mono), with system-font fallbacks

The site itself does not require a JavaScript package manager or framework. A network connection is only needed to load the optional web fonts; local system fonts are used as a fallback.

## Screenshots

No screenshots are included yet. To add them, capture the site at a desktop and mobile viewport, save the images under `assets/images/`, and replace this placeholder with relative Markdown image links, for example:

```md
![Portfolio desktop screenshot](assets/images/portfolio-desktop.png)
![Portfolio mobile screenshot](assets/images/portfolio-mobile.png)
```

## Run locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Serve the folder using the Live Server extension, or any basic local web server.
4. Open the local URL provided by the server.

For example, with Python installed, run `python3 -m http.server 8000` from the project root and visit `http://localhost:8000`. Opening `index.html` directly may also work, but a local server is recommended.

## Publish to GitHub

Create a repository on GitHub, then from this project directory:

```sh
git init
git add .
git commit -m "Build developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/developer-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with the GitHub account name before adding the remote. Do not add secrets or credentials to this repository.

**Repository URL:** `https://rampai-k.github.io/developer-portfolio/`

## Deploy with GitHub Pages

1. Push the project to the `main` branch of the GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and the `/(root)` folder, then save.
5. Wait for the Pages deployment to finish. The published address will be shown on the Pages settings screen.

This is a static site and has no build command. Keep `index.html` at the repository root. Add the resulting URL below when deployment is complete.

**Live demo URL:** `https://YOUR-USERNAME.github.io/developer-portfolio/` (placeholder; not yet confirmed or claimed as deployed).

## Updating personal details

- Update the email address in `js/script.js` under `portfolioData.social.email` and in the visible contact copy in `index.html`.
- Add the confirmed GitHub and LinkedIn profile URLs to `portfolioData.social.github` and `portfolioData.social.linkedin` in `js/script.js`. Update the visible profile text and placeholder labels in `index.html` as needed.
- Keep the education entry in `portfolioData.education` current. Add institution and dates only after confirming the exact details.
- Edit the `experience` entries in `js/script.js` to reflect accurate, shareable project background. The NuCare Connect description intentionally avoids confidential product details and does not imply formal employment.

## Adding or updating project cards

Edit the `projects` array in `js/script.js`. Each object contains:

- `name`: repository or project name.
- `description`: concise, accurate description.
- `technologies`: array of tags.
- `repositoryUrl`: repository URL, or an empty string until one exists.
- `liveDemoUrl`: live URL, or an empty string until one exists.
- `status`: for example, `In Development` or `Portfolio Website`.

The page shows “coming soon” labels for missing repository/demo URLs. Only change a project's status or add links when its state and URLs are accurate. Project content is HTML-escaped before rendering.

## Accessibility and responsive design

The layout adapts from mobile to desktop with CSS breakpoints. It uses semantic landmarks and headings, descriptive navigation, a skip link, keyboard-accessible menu controls, visible focus indicators, and `aria-current` for the active section where browser support allows. Smooth scrolling and transitions respect the user's reduced-motion preference. Navigation remains available if JavaScript is disabled; the profile and core page content remain readable.

## Project structure

```text
.
├── assets/
│   └── images/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── .gitignore
├── LICENSE
└── README.md
```

## License

Released under the MIT License. See [LICENSE](LICENSE).
