<div align="center">
  <h1>⚡ Parth Prajapati — Personal Portfolio</h1>
  <p>
    <strong>Python Django Full Stack Developer</strong> & <strong>Creative Frontend Engineer</strong>
  </p>
  <p>
    <a href="https://github.com/parthu7990" target="_blank">GitHub</a> ·
    <a href="https://www.linkedin.com/in/parthprajapati" target="_blank">LinkedIn</a> ·
    <a href="mailto:parth20098@gmail.com">Email</a>
  </p>
</div>

---

## ✨ Features

- 🎨 **Futuristic dark UI** with glassmorphism, gradient text, and glow effects
- 🧊 **Interactive 3D background** built with React Three Fiber
- 🎬 **Smooth scroll & animations** powered by Lenis + Motion (Framer Motion)
- 📱 **Fully responsive** across mobile, tablet, and desktop
- 🚀 **Static, production-ready** — no backend or database required
- ⚡ **Blazing fast** Vite + React 19 + TypeScript build

## 🛠️ Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4, Motion |
| 3D / Visuals | Three.js, React Three Fiber, Drei |
| Animation | GSAP, Lenis Smooth Scroll |
| Icons | Lucide React |

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The dev server runs at `http://localhost:3000`.

## 📝 Customization

All your personal data lives in **one place** — the `src/data/` folder:

| File | What to edit |
| --- | --- |
| `src/data/site.ts` | Name, role, email, social links, images |
| `src/data/projects.ts` | Your projects, GitHub links, live demos |
| `src/data/certificates.ts` | Certifications & verification links |
| `src/data/skills.ts` | Skill categories and technologies |

### To add/edit a project

Open `src/data/projects.ts` and update the array. Each project supports:

```ts
{
  title: 'Project Name',
  description: 'Short description',
  tech: ['React', 'Django'],
  image: 'https://...image-url...',
  size: 'large', // 'small' | 'medium' | 'large' (grid size)
  link: 'https://live-demo.com',
  github: 'https://github.com/yourusername/project'
}
```

### To add/edit a certificate

Open `src/data/certificates.ts` and update the array. Each certificate supports:

```ts
{
  title: 'Certificate Name',
  issuer: 'Issuing Organization',
  date: '2025',
  link: 'https://verify-link.com',
  type: 'Professional' // 'Professional' | 'Technical' | 'Design' | 'Business'
}
```

## 🚢 Deploying to GitHub Pages

1. Push this repo to GitHub
2. In your repo: **Settings → Pages → Source → GitHub Actions**
3. Add this workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Or deploy anywhere static hosting works: **Vercel**, **Netlify**, **Cloudflare Pages**.

## 📄 License

MIT © [Parth Prajapati](https://github.com/parthu7990)

