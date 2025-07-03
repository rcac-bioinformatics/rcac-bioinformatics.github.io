# RCAC Bioinformatics Wiki

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This site provides documentation, tutorials, and workflow guides for bioinformatics tools and analyses on Purdue’s Research Computing infrastructure, maintained by the **RCAC Bioinformatics** team.

📚 [View the live site](https://rcac-bioinformatics.github.io/)

---

## 🔬 Purpose

This site helps researchers, students, and staff:

* Learn how to run bioinformatics tools on RCAC clusters (Bell, Negishi, Gilbreth, Gautschi, etc.)
* Access best practices and reproducible workflows (e.g., RNA-seq, genome assembly, variant calling)
* Get started with RCAC-supported containers, modules, and job scripts
* Troubleshoot common issues with software and data pipelines

---

## 📁 Project Structure

```text
.
├── public/                  # Static assets (favicons, robots.txt, etc.)
├── src/
│   ├── assets/              # Images, diagrams, and logos
│   ├── content/
│   │   └── docs/            # All Markdown/MDX documentation files
│   └── content.config.ts    # Sidebar/nav configuration
├── astro.config.mjs         # Astro project config
├── package.json             # NPM scripts and dependencies
├── tsconfig.json            # TypeScript settings
└── README.md                # You are here
```

All documentation lives under `src/content/docs/`. The site is built using [Astro Starlight](https://starlight.astro.build), a fast static site generator optimized for technical documentation.

---

## 🧪 Local Development

To work on this documentation site locally:

```bash
npm install         # Install dependencies
npm run dev         # Start local dev server (http://localhost:4321)
npm run build       # Build for production (output to ./dist)
npm run preview     # Preview production build
```

---

## 🤝 Contributing

If you'd like to contribute:

* Fork the repo and clone it
* Create or edit `.mdx` files under `src/content/docs/`
* Submit a pull request with a clear description of changes

Contributions can include:

* New tutorials or walkthroughs
* Corrections or updates to existing docs
* Tips for common pitfalls on RCAC clusters

---

## 📎 Related Links

* 🛰 [RCAC Homepage](https://www.rcac.purdue.edu)
* 🧬 [RCAC Bioinformatics GitHub Pages](https://rcac-bioinformatics.github.io/)
* 💬 [Purdue RCD Discord](https://discord.gg/5w7PcfhX)

---
