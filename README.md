<div align="center">

# 🚀 Ignite Launchpad

**Web3's next-gen token launch infrastructure.**  
Secure, transparent, and compliant token sales across multiple EVM chains.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://ignite-launchpad.vercel.app)
[![Next.js 16](https://img.shields.io/badge/Next.js_16-000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=fff)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-FFB800?style=for-the-badge)](LICENSE)

[**🌐 Live Demo →**](https://ignite-launchpad.vercel.app) &nbsp;&nbsp;·&nbsp;&nbsp; [**📊 Dashboard →**](https://ignite-launchpad.vercel.app/dashboard) &nbsp;&nbsp;·&nbsp;&nbsp; [**📖 Docs →**](#)

</div>

---

## 📖 What is Ignite?

Ignite is a Web3 launchpad platform built for projects to raise capital securely and transparently. It provides:

- 🌐 **Multi-chain deployment** — Ethereum, Polygon, BSC, Arbitrum, Base
- 🔒 **Enterprise security** — ReentrancyGuard, Timelock, Multi-sig
- 🎯 **Tiered allocation** — KYC-integrated whitelist with anti-sybil protection
- 💧 **Automated liquidity** — Uniswap V3 positions created at launch
- 📅 **Transparent vesting** — On-chain enforcement with public unlock timelines

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| 🏗️ **Framework** | Next.js 16 (App Router + Turbopack) |
| 🧩 **UI** | React 19, Tailwind CSS 4 |
| 🎨 **3D Graphics** | Three.js 0.184 (WebGL wireframe scene) |
| ✨ **Animations** | Motion 12 (Framer Motion rebrand) |
| 🔤 **Icons** | Phosphor Icons |
| 📦 **Language** | TypeScript 5 |
| ☁️ **Deployment** | Vercel |

---

## ✨ Features

### 🏠 Landing Page

| Feature | Description |
|---------|------------|
| 🌌 **3D Background** | Interactive wireframe icosahedron + orbital torus rings + particle field |
| 🧱 **Bento Grid** | Feature cards with varied sizes and asymmetric layout |
| 🗺️ **Editorial Roadmap** | Alternating magazine-style sections |
| 📊 **Donut Chart** | Interactive hover effects with animated allocation bars |
| ❓ **FAQ Accordion** | Smooth expand/collapse transitions |

### 📊 Dashboard

| Feature | Description |
|---------|------------|
| 🔌 **WalletConnect** | MetaMask, WalletConnect, Coinbase Wallet |
| 💰 **Token Sale** | 4-tier system (Seed → Growth → Scale → Summit) |
| 📈 **Progress Bar** | Real-time sale progress with phase tracking |
| 📜 **Transaction History** | Mock purchase data with status indicators |
| 📋 **Stats Cards** | Key metrics at a glance |

---

## 📸 Screenshots

> 🖼️ *Screenshots coming soon — run the project locally to preview the full experience.*

| Landing Page | Dashboard |
|:---:|:---:|
| *3D hero + bento grid features* | *WalletConnect + token sale tiers* |

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/whyuardi/ignite-launchpad.git
cd ignite-launchpad

# Install
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.  
Navigate to [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the token sale dashboard.

---

## 📁 Project Structure

```
ignite-launchpad/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # 🏠 Landing page
│   │   ├── layout.tsx               # 📐 Root layout
│   │   ├── globals.css              # 🎨 Global styles (Tailwind + noise textures)
│   │   └── dashboard/
│   │       ├── page.tsx             # 📊 Dashboard entry point
│   │       └── DashboardContent.tsx # 📊 Main dashboard component
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Header.tsx           # 🧭 Navigation header
│   │   │   ├── Hero.tsx             # 🦸 Hero section with 3D background
│   │   │   ├── Features.tsx         # 🧱 Bento grid feature cards
│   │   │   ├── Roadmap.tsx          # 🗺️ Editorial roadmap timeline
│   │   │   ├── Tokenomics.tsx       # 📊 Tokenomics with donut chart
│   │   │   ├── Team.tsx             # 👥 Team section
│   │   │   ├── FAQ.tsx              # ❓ FAQ accordion
│   │   │   └── Footer.tsx           # 🦶 Site footer
│   │   ├── ThreeBackground.tsx      # 🌌 Three.js 3D scene
│   │   └── ui/                      # 🧩 Shared UI components
│   │       ├── Accordion.tsx
│   │       ├── ProgressBar.tsx
│   │       ├── StatCard.tsx
│   │       ├── DonutChart.tsx
│   │       ├── TransactionRow.tsx
│   │       └── TokenAllocationBar.tsx
│   └── lib/
│       └── utils.ts                 # 🛠️ Utility functions
├── public/                          # 📂 Static assets (SVGs)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── eslint.config.mjs
```

---

## 🎯 Design Philosophy

Built with an **anti-template** approach:

| ❌ Avoids | ✅ Embraces |
|-----------|------------|
| Centered-everything layouts | Asymmetric, editorial grids |
| 3-identical-cards pattern | Bento grids with varied sizes |
| Gradient text overload | Typography as the design element |
| Flat backgrounds | Noise textures, particles, 3D depth |
| Generic corporate copy | Direct, punchy, no-nonsense tone |

---

## ☁️ Deploy Your Own

```bash
# Deploy to Vercel
npx vercel --prod
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic CI/CD deployments with every push.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 Create a feature branch: `git checkout -b feat/amazing-idea`
3. 💻 **Commit** your changes: `git commit -m '✨ feat: add amazing idea'`
4. 📤 **Push** to the branch: `git push origin feat/amazing-idea`
5. 🔀 Open a **Pull Request**

Please ensure your code follows the existing style and passes linting:

```bash
npm run lint
```

---

## 📄 License

MIT © [whyuardi](https://github.com/whyuardi)

---

<div align="center">
  <sub>Built with ❤️ for the Web3 ecosystem</sub>
</div>
