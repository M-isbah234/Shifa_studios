# Interactive Portfolio Clone (Shifa Studios)

A complete clone inspired by [mehak.studio](http://mehak.studio/), customized for **Shifa Studios**, featuring an infinite 2D drifting canvas field, dynamic palette adaptation, procedural Web Audio sound synthesis, fluid slide-out sheets, interactive brief builder, and dark/light modes.

---

## 🌟 Core Features Recreated

1. **Infinite Drifting Physics Field**:
   - 2D inertial coordinate canvas where project cards drift with momentum, drag physics, mouse velocity, and scroll wheel acceleration.
   - Cards wrap infinitely across screen bounds.
2. **Dynamic Palette Interpolation**:
   - As you hover over any project card, the background (`--paper`) and foreground ink (`--ink`) smoothly morph to match that project's custom color palette in real time.
3. **Procedural Web Audio Engine**:
   - Zero external audio files required. Uses Web Audio API synthesizers to dynamically produce micro-feedback blips, sweeps, and mechanical clicks on card hovers, view switches, and sheet triggers.
4. **View Switching (Drift vs. Grid)**:
   - Toggle between freeform 2D Drift mode and structured multi-column Grid mode using the dock control.
5. **Interactive Slide-Out Sheets**:
   - **About**: Bio, portrait, interactive seal ring, metrics, and background.
   - **Services**: Detailed service breakdown and interactive ledger.
   - **Process**: 4-step creative methodology.
   - **Contact & Brief Builder**: Interactive project tags that dynamically construct a client brief with one-click copy.
   - **Project Detail Modal**: High-resolution zoomable viewer with one-click color palette hex code copy to clipboard.
6. **Dark / Light Mode**:
   - Persistent theme switcher with `localStorage` memory and initial flash prevention.
7. **Tactile Film Grain Overlay**:
   - Procedurally generated canvas noise overlay simulating fine print paper texture.

---

## 🚀 Quick Start

### 1. Run the Local Server
```bash
npm start
```
*(Or simply `node server.js` - zero external dependencies required)*

Open your browser at **[http://localhost:3000](http://localhost:3000)**.

---

## 🖼️ Asset Handling (Online Streaming & Offline Mode)

- **Default (Cloud Streaming)**:
  By default, project artwork images and thumbnails stream directly from `https://mehak.studio/`, ensuring instant loading without downloading gigabytes of image files.
  
- **Full Offline Mode**:
  If you want to save all project images locally on your machine for 100% offline functionality, run:
  ```bash
  npm run download
  ```
  This will download all thumbnails and high-res images directly into `./img/t/` and `./img/f/`.
  Then in `js/app.js`, set:
  ```javascript
  const ASSET_BASE = '';
  ```

---

## 🎨 How to Customize for Your Own Portfolio

### 1. Personal Details & Branding
- **Name & Meta**: Edit `<title>` and branding tags in [`index.html`](index.html).
- **Navigation & Links**: Update your Upwork, LinkedIn, GitHub, or email links in the footer dock and Contact drawer inside [`index.html`](index.html).
- **Portrait Photo**: Replace [`img/f/mehak-portrait.webp`](img/f/mehak-portrait.webp) with your own portrait photo.

### 2. Projects & Color Schemes
All project items are configured in the `P` array in [`js/app.js`](js/app.js). Each project is defined with its metadata and color palette:

```javascript
{
  id: "my-project-slug",
  img: "my-project-image-name",
  cats: ["web-design", "branding"],
  t: "Project Title",
  f: "Field Name",
  bg: "#101820",           // Background color the screen morphs into on hover
  c: ["#FEE715", "#101820"], // Palette colors shown in detail swatches
  r: "1200/900",            // Aspect ratio
  iw: 1200,
  ih: 900,
  one: "Short punchy one-liner.",
  disc: "Design Discipline",
  for: "Client or Industry",
  del: "Deliverables (e.g. Website, Brand Guidelines)"
}
```

---

## 📁 Project Structure

```text
Portfolio/
├── index.html               # Main HTML entry point & slide-out sheets
├── css/
│   └── style.css            # Responsive layout, palette variables, keyframes
├── js/
│   └── app.js               # Drifting canvas physics, Web Audio synthesizer, routing
├── img/
│   └── f/
│       └── mehak-portrait.webp # High-res designer portrait
├── scripts/
│   └── download_assets.js   # Automated asset downloader for offline usage
├── server.js                # Zero-dependency local development server
├── package.json             # NPM scripts
├── apple-touch-icon.png     # Mobile bookmark icon
├── og-share-image-1200x630.jpg # Social preview card
└── site.webmanifest         # PWA web manifest
```
