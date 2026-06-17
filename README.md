<p align="center">
  <img src="Logo.png" alt="BeeMark Hive Manager" width="220"/>
</p>

<h1 align="center">BeeMark — Hive Manager</h1>

<p align="center">
  A mobile-first beekeeping management app for tracking hives, inspections, treatments, and apiaries.<br/>
  Built with React. No server. No account. Just your bees.
</p>

<p align="center">
  <a href="https://ko-fi.com/dewberrybees"><img src="https://img.shields.io/badge/Support-Ko--fi-FF5E5B?logo=ko-fi&logoColor=white" alt="Ko-fi"/></a>
  <img src="https://img.shields.io/badge/React-JSX-61DAFB?logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Storage-IndexedDB-F7DF1E?logo=javascript&logoColor=black" alt="IndexedDB"/>
  <img src="https://img.shields.io/badge/PWA-installable-2DBD8F" alt="PWA"/>
  <img src="https://img.shields.io/badge/Android-APK-3DDC84?logo=android&logoColor=white" alt="Android APK"/>
</p>

---

## What is BeeMark?

BeeMark is a practical, no-fuss beekeeping companion designed for real-world use in the apiary. Log inspections, track treatments, manage multiple hives across multiple sites, and access quick-reference beekeeper resources — all from your phone, all stored locally.

No account required. No subscription. No data leaves your device.

Available as:
- **A web app / installable PWA** — hosted on GitHub Pages
- **An Android APK** — built with Capacitor for a native install experience

---

## Features

### Hive Management
- Add and manage **multiple hives** across multiple apiaries
- Hive types: **National, WBC, Langstroth, Warré, Top-Bar**, with **Nuc** support
- Track **brood boxes, supers, hive colour, location, source, and installation date**
- Hive status tracking: **Queenless**, **Requeening**, and **Archived**
- **Auto queenless detection** — flags a hive if the queen hasn't been seen across two consecutive inspections
- Queen tracking with **BKA colour marking chart** (year-based auto-assignment or custom override)
- **Drag-to-reorder** hive list, with order saved per device

### Inspection Logging
- Full inspection form with **Yes/No responses** for queen seen, eggs, larvae, capped brood, and queen cells
- Log **frames of brood and stores**, colony **temperament**, and free-text notes
- **Weight logging** — standalone weight-only entries that don't trigger queenless alerts
- Inline **treatment** and **action sub-forms** that auto-populate the relevant tabs
- View past inspections in a read-only detail view with badges for key events

### Treatment Tracking
- Log varroa treatments and other products with **start date and duration**
- **Countdown timers** on active treatments — overdue treatments flagged in red
- Mark treatments complete with a single tap
- Treatments logged during an inspection are automatically added to the Treatment tab

### Actions & Interventions
- Log hive actions including: **Artificial Swarm, Split, Added/Removed Queen, Added/Removed Super, Added/Removed Brood Box, Feed, Clipped Queen**, and more
- Swarm and split actions include **sub-forms** for recording old queen location and hive status after the procedure
- **Auto-creates a new Nuc hive** when a split produces a new colony, carrying forward queen information
- **Feeder tracking** — active feeders shown as a badge on hive list cards; automatically cleared when a feeder is removed

### Multi-Apiary Support
- Manage **multiple apiaries** with names, locations, notes, and optional photos
- Each apiary shows hive count, archived count, total supers, and last inspection date
- Shared 12-colour palette across hives and apiaries, with smart auto-assignment
- Quick-switch between apiaries, including an **"All Apiaries"** combined view
- BeeBase ID field for UK beekeepers registered with the National Bee Unit

### Equipment Shed
- Auto-calculates equipment **in use** from your live hive data (brood boxes, supers, queen excluders, feeders, nucs, roofs, floors, crown boards)
- Set your **total owned quantities** and instantly see how much is spare
- Queen excluder count adjusts seasonally (April–November only)

### Beekeeper Resources
Built-in reference material for the apiary:
- **Queen Marking Colours** — full BKA/BIBBA colour chart by year
- **Bee Lifecycle** — visual timeline bars for queen, worker, and drone development stages
- **UK Pollen Guide** — 65+ plant species with pollen colour swatches, sortable by season, name, or colour

### Data & Backup
- **Export** your full dataset as a dated JSON backup file
- **Import** a backup to restore or transfer your data
- All data stored locally in the browser's **IndexedDB** — nothing is sent anywhere
- Note: web (PWA) and Android app data are stored separately, since each runs in its own isolated browser context — use Export/Import to move data between them

---

## Tech Stack

| | |
|---|---|
| **Framework** | React (functional components + hooks, no classes) |
| **Build tool** | Vite |
| **Styling** | Inline styles with a consistent design token system |
| **Storage** | Browser `IndexedDB` |
| **Native shell** | Capacitor (Android) |
| **Font** | Roboto via Google Fonts |
| **Dependencies** | Minimal — single-file app core, no UI framework |

---

## Design

BeeMark uses a warm, clean Android-inspired UI throughout:

- Mint green primary (`#2DBD8F`) with warm off-white backgrounds
- Frosted glass sticky headers with subtle hex pattern backgrounds
- Rounded cards with colour accent bars and hover lift animations
- Consistent badge system for queen-seen, treatments, actions, and queen cells
- UK date formatting (DD/MM/YY) throughout

---

## Running BeeMark

### Web (PWA)

The live web app is built from `src/App.jsx` and deployed automatically to **GitHub Pages**. Visit the Pages URL for this repo, or:

1. Clone the repo and run `npm install`
2. `npm run dev` for a local dev server, or `npm run build` to produce a production build in `dist/`
3. Open it on your phone's browser and choose **"Add to Home Screen"** to install it as a PWA

### Android APK

BeeMark also ships as a native Android app via [Capacitor](https://capacitorjs.com/), built from the same `src/App.jsx`:

1. `npm run build:apk` — builds the web bundle with relative asset paths for the native shell
2. `npx cap sync` — syncs the build into the Android project
3. `npx cap open android` — opens the project in Android Studio
4. Build → **Generate App Bundles / APKs**

The Android project itself isn't tracked in this repo (it's regenerated locally via `npx cap add android`) — see [Releases](../../releases) for ready-to-install APKs.

---

## Downloads

| Platform | How to get it |
|---|---|
| **Web / PWA** | Visit the GitHub Pages site, or "Add to Home Screen" on mobile |
| **Android APK** | Download the latest `.apk` from the [Releases](../../releases) page |

---

## Support

If BeeMark is useful to you, consider buying me a coffee:

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/dewberrybees)

---

## License

MIT License

Copyright (c) 2026 dewberrybees

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
