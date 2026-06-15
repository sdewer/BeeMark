# BeeMark — GitHub Pages Setup Instructions

## What This Package Does

This folder contains everything needed to host BeeMark on GitHub Pages at:

  **https://sdewer.github.io/BeeMark/**

Every time you push a change to your GitHub repository, GitHub automatically
rebuilds and publishes the app for you. No Netlify account needed.

---

## ONE-TIME SETUP (do this once, takes about 10 minutes)

### Step 1 — Add your app code

Before doing anything else, paste your BeeMark app into `src/App.jsx`:

1. Open the `src/App.jsx` file inside this folder
2. Select all the text and delete it
3. Open your current `Beemark.jsx` file
4. Select all and copy
5. Paste into `src/App.jsx` and save

### Step 2 — Replace your existing beemark-deploy folder

This folder **replaces** your existing `beemark-deploy` folder. The easiest way:

1. Rename your old `C:\Users\sdewe\Downloads\beemark-deploy\` folder to
   `beemark-deploy-OLD` (just in case)
2. Rename this folder to `beemark-deploy`
3. Move it to `C:\Users\sdewe\Downloads\`

Your folder should look like this:
```
beemark-deploy/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← tells GitHub how to build
├── public/
│   ├── favicon-192.png       ← app icon
│   ├── favicon-512.png       ← app icon
│   ├── manifest.json         ← PWA settings
│   └── sw.js                 ← service worker
├── src/
│   ├── App.jsx               ← YOUR APP CODE GOES HERE
│   └── main.jsx              ← don't touch this
├── index.html                ← don't touch this
├── package.json              ← don't touch this
└── vite.config.js            ← don't touch this
```

### Step 3 — Push to GitHub for the first time

Open Command Prompt, navigate to your folder, then run these commands
**one at a time**:

```
cd C:\Users\sdewe\Downloads\beemark-deploy
git init
git remote add origin https://github.com/sdewer/BeeMark.git
git add .
git commit -m "Migrate to GitHub Pages"
git push origin main --force
```

> **Note:** If git asks for your GitHub username and password, enter them.
> For password, use a GitHub Personal Access Token (not your account password).
> You can create one at: https://github.com/settings/tokens
> Choose "Classic token" → tick "repo" → Generate.

### Step 4 — Enable GitHub Pages

1. Go to https://github.com/sdewer/BeeMark
2. Click **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under "Source", select **Deploy from a branch**
5. Under "Branch", select **gh-pages** from the dropdown
6. Leave the folder as **/ (root)**
7. Click **Save**

### Step 5 — Wait for the build (about 2–3 minutes)

1. Go to https://github.com/sdewer/BeeMark/actions
2. You'll see a workflow running — wait for the green tick ✓
3. Then visit: **https://sdewer.github.io/BeeMark/**

---

## UPDATING THE APP (every time you have a new version)

This is exactly the same as before — just replace the app file and push:

1. Copy your new `Beemark.jsx` content
2. Open `src/App.jsx` and replace everything with the new content
3. Open Command Prompt in the `beemark-deploy` folder:

```
git add .
git commit -m "Update app - describe what changed here"
git push origin main
```

4. Wait ~2 minutes for GitHub to rebuild
5. Refresh https://sdewer.github.io/BeeMark/

That's it. GitHub does the build and publish automatically every time.

---

## INSTALLING AS A PWA (on your phone)

1. Visit **https://sdewer.github.io/BeeMark/** in Chrome on your phone
2. Tap the three-dot menu (⋮) in the top right
3. Tap **"Add to Home screen"** or **"Install app"**
4. Tap **Add**

The app will appear on your home screen and work offline.

---

## TROUBLESHOOTING

### The site shows an old version on my phone

The service worker may have cached an old version.

**Fix:**
1. On your phone, open Chrome
2. Go to Settings → Site Settings → All Sites → sdewer.github.io
3. Tap "Clear & reset"
4. Reopen the app

### The GitHub Action failed (red ✗ in Actions tab)

1. Click on the failed action to see the error
2. Most common cause: the `gh-pages` branch doesn't exist yet.
   This fixes itself after the first successful push — just push again.

### I see "404 - File not found" on GitHub Pages

Make sure you completed Step 4 (enabling GitHub Pages from the gh-pages branch).
It can take a few minutes after enabling before the site appears.

### The build fails with a React error

Make sure `src/App.jsx` does NOT start with:
  `import React from 'react'`
  `import ReactDOM from 'react-dom'`

It should only have:
  `import { useState, useEffect, useRef } from "react"`

---

## DIFFERENCES FROM NETLIFY

| Feature | Netlify | GitHub Pages |
|---------|---------|--------------|
| URL | beemark.netlify.app | sdewer.github.io/BeeMark/ |
| Build trigger | git push | git push |
| Build time | ~1 min | ~2 min |
| Cost | Free tier | Always free |
| PWA support | ✓ | ✓ |

The app URL has changed from `beemark.netlify.app` to `sdewer.github.io/BeeMark/`.
Everything else works the same way.

