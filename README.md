<div align="center">

# Ignite Launchpad

**Web3's next-gen token launch infrastructure.**

Secure, transparent, and compliant token sales across multiple EVM chains.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://ignite-launchpad.vercel.app)
[![Built with Next.js](https://img.shields.io/badge/Built_with-Next.js_16-000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-FFB800?style=for-the-badge)](https://github.com/whyuardi/ignite-launchpad/blob/main/LICENSE)

[**Live Demo →**](https://ignite-launchpad.vercel.app) &nbsp;&nbsp; | &nbsp;&nbsp; [**Dashboard →**](https://ignite-launchpad.vercel.app/dashboard)

</div>

---

## What is Ignite?

Ignite is a Web3 launchpad platform built for projects to raise capital securely and transparently. It provides:

- **Multi-chain deployment** — Ethereum, Polygon, BSC, Arbitrum, Base
- **Enterprise security** — ReentrancyGuard, Timelock, Multi-sig
- **Tiered allocation** — KYC-integrated whitelist with anti-sybil protection
- **Automated liquidity** — Uniswap V3 positions created at launch
- **Transparent vesting** — On-chain enforcement with public unlock timelines

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router + Turbopack) |
| UI | React 19, Tailwind CSS |
| 3D Graphics | Three.js (WebGL wireframe scene) |
| Animations | Motion (Framer Motion v12) |
| Icons | Phosphor Icons |
| Deployment | Vercel |

---

## Features

### Landing Page

- Interactive 3D background — wireframe icosahedron, orbital torus rings, particle field
- Bento grid feature cards — varied sizes, asymmetric layout
- Editorial roadmap — alternating magazine-style sections
- Interactive donut chart — hover effects, animated allocation bars
- FAQ accordion with smooth transitions

### Dashboard

- **WalletConnect** — MetaMask, WalletConnect, Coinbase Wallet
- **Token Sale** — 4 tier system (Seed → Growth → Scale → Summit)
- **Progress Bar** — real-time sale progress with phase tracking
- **Transaction History** — mock purchase data with status indicators
- **Stats Cards** — key metrics at a glance

---

## Getting Started

```bash
# Clone
git clone https://github.com/whyuardi/ignite-launchpad.git
cd ignite-launchpad

# Install
npm install

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
ignite-launchpad/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── layout.tsx            # Root layout
│   │   └── dashboard/
│   │       ├── page.tsx          # Dashboard entry
│   │       └── DashboardContent.tsx
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Roadmap.tsx
│   │   │   ├── Tokenomics.tsx
│   │   │   ├── Team.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Footer.tsx
│   │   ├── ThreeBackground.tsx   # Three.js 3D scene
│   │   └── ui/                   # Shared UI components
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
└── tailwind.config.ts
```

---

## Design Philosophy

Built with an **anti-template** approach:

- No centered-everything layouts — asymmetric, editorial grids
- No 3-identical-cards pattern — bento grids with varied sizes
- No gradient text overload — typography as the design element
- No flat backgrounds — noise textures, particles, 3D depth
- No generic copy — direct, punchy, no corporate speak

---

## Deploy Your Own

```bash
# Vercel
npx vercel --prod
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

---

## License

MIT © [whyuardi](https://github.com/whyuardi)
