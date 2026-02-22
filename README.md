# Unique SMP Website
Live - unique-smp.vercel.app
A modern, production-ready website for the Unique SMP Minecraft server.

## 🎮 What is this?

This is the official website for **Unique SMP** - a premium vanilla Minecraft survival server with cross-platform support (Java + Bedrock).

## ✨ Features

- **Hero Section** - Cinematic landing with 3D floating Minecraft blocks
- **About** - Server features and highlights
- **Rules** - Server rules with embedded YouTube video
- **Whitelist Application** - Form that sends applications to Discord
- **Cross-Platform Info** - Java and Bedrock support details
- **Teammates Support** - Apply with up to 3 teammates

## 🛠️ Tech Stack

- React + TypeScript
- Vite
- TailwindCSS
- Framer Motion (animations)
- React Three Fiber (3D elements)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ⚙️ Configuration

### Discord Webhook (for whitelist applications)

1. Create a webhook in your Discord server
2. Copy `.env.example` to `.env`
3. Add your webhook URL:
```
VITE_DISCORD_WEBHOOK_URL=your_webhook_url_here
```

## 📝 Customize

- **Discord Link:** Update in `src/sections/Hero.tsx`, `Footer.tsx`, `Whitelist.tsx`
- **YouTube Video:** Change video ID in `src/sections/Rules.tsx`
- **Content:** Edit `src/constants/content.ts`

## 🌐 Deploy

This project is optimized for Vercel:

1. Push to GitHub
2. Import to Vercel
3. Add `VITE_DISCORD_WEBHOOK_URL` environment variable
4. Deploy!

## 📄 License

© 2025 Unique SMP. All rights reserved.
