# Raj Jaiswar — Portfolio Website

A modern, responsive Data Analyst portfolio built with **React + Vite + Tailwind CSS**.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** ≥ 18.x  ([nodejs.org](https://nodejs.org))
- **npm** ≥ 9.x (comes with Node)

### 1. Extract / place this folder anywhere on your machine

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── images/          ← your dashboard screenshots live here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useScrollReveal.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── CaseStudies.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

### 2. Install dependencies

```bash
cd portfolio
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

### 4. Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy to Vercel, Netlify, or GitHub Pages.

---

## 🌐 Deploy to Vercel (free, recommended)

1. Push the folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** — done in ~60 seconds

---

## 📁 Adding / Updating Images

Place any new dashboard screenshots in `public/images/` and reference them in `src/components/Projects.jsx` under the `images` array of each project.

---

## ✏️ Customising Content

| What to change               | File                          |
|------------------------------|-------------------------------|
| Name, bio, socials           | `Hero.jsx`, `About.jsx`       |
| Skills & proficiency levels  | `Skills.jsx`                  |
| Projects, KPIs, GitHub links | `Projects.jsx`                |
| Work / education history     | `Experience.jsx`              |
| Case study methodology       | `CaseStudies.jsx`             |
| Contact email / socials      | `Contact.jsx`, `Footer.jsx`   |
| Colour palette               | `tailwind.config.js`          |
| Global fonts                 | `index.html` + `index.css`    |

---

## 🎨 Design Tokens (Tailwind config)

| Token      | Value     | Used for                   |
|------------|-----------|----------------------------|
| `bg`       | `#0b0b12` | Page background            |
| `surface`  | `#111120` | Cards                      |
| `raised`   | `#181828` | Nested elements            |
| `border`   | `#22223a` | Borders                    |
| `amber`    | `#f0a500` | Primary accent             |
| `warm`     | `#eae4d8` | Heading text               |
| `muted`    | `#5a5a72` | Subdued text               |

Change `amber` to any hex to re-theme the whole site instantly.

---

## 📧 Contact Form

The form opens your default email client with fields pre-filled (no backend needed). To use a proper form service, replace the `handleSubmit` function in `Contact.jsx` with a call to [Formspree](https://formspree.io), [EmailJS](https://emailjs.com), or similar.

---

Built with ❤️ for Raj Jaiswar · Data Analyst
