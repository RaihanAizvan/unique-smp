# Deployment Guide - Unique SMP Website

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - Done! 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

## 📋 Pre-Deployment Checklist

### 1. Update Discord Links
Search and replace `https://discord.gg/uniquesmp` with your actual Discord invite:

**Files to update:**
- `src/sections/Hero.tsx` (line ~60)
- `src/sections/Whitelist.tsx` (line ~72)
- `src/sections/Footer.tsx` (line ~56)

```bash
# Quick find all instances
grep -r "discord.gg/uniquesmp" src/
```

### 2. Update YouTube Rules Video
Edit `src/sections/Rules.tsx` (line ~76):
```tsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
```

### 3. Add Favicon
Replace `public/vite.svg` with your custom favicon/logo

### 4. Update Meta Tags
Edit `index.html` for SEO:
- Open Graph image URL
- Site URL
- Custom description

### 5. Test Build Locally
```bash
npm run build
npm run preview
```
Visit http://localhost:4173 and test all features

## 🌐 Other Deployment Options

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy**
   ```bash
   npm run build
   # Drag and drop 'dist' folder to netlify.com
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Cloudflare Pages

1. **Connect Repository**
   - Go to Cloudflare Pages dashboard
   - Connect your GitHub repo

2. **Build Settings**
   - Build command: `npm run build`
   - Build output directory: `dist`

3. **Deploy**
   - Automatic deployment on git push

## 🔧 Environment Variables

If you need environment variables:

1. **Create `.env` file** (don't commit this!)
   ```
   VITE_DISCORD_INVITE=https://discord.gg/yourserver
   VITE_YOUTUBE_VIDEO_ID=your_video_id
   ```

2. **Use in code**
   ```typescript
   const discordUrl = import.meta.env.VITE_DISCORD_INVITE
   ```

3. **Add to Vercel**
   - Project Settings → Environment Variables
   - Add each variable

## 📊 Performance Optimization

### Current Build Stats
- Total bundle: ~1.2MB (gzipped: ~350KB)
- Main chunks split into:
  - React vendor: ~3.7KB
  - Three.js vendor: ~1MB (for 3D features)
  - Framer Motion vendor: ~127KB
  - Main app: ~36KB

### Further Optimizations

1. **Lazy Load 3D Sections**
   ```tsx
   const CrossPlatform = lazy(() => import('./sections/CrossPlatform'))
   ```

2. **Image Optimization**
   - Use WebP format
   - Add loading="lazy" to images
   - Compress images before adding

3. **Font Optimization**
   - Already using `display=swap` for Google Fonts
   - Consider self-hosting fonts

## 🔍 Testing Checklist

Before going live, test:

- [ ] All sections scroll smoothly
- [ ] Language toggle works (EN ↔ ML)
- [ ] Discord links open correctly
- [ ] YouTube video loads
- [ ] Mobile responsive on various devices
- [ ] 3D elements render (check console for WebGL errors)
- [ ] All animations play smoothly
- [ ] Forms/buttons have proper hover states
- [ ] SEO meta tags are correct
- [ ] Favicon loads properly

## 🐛 Common Issues

### Issue: 3D elements don't show
**Solution:** Check browser WebGL support. Add fallback message.

### Issue: Build fails with TypeScript errors
**Solution:** Run `npm run build` locally first to catch errors

### Issue: Fonts don't load
**Solution:** Check Google Fonts link in `index.html`

### Issue: Images 404
**Solution:** Ensure images are in `public/` folder

## 📈 Post-Deployment

### Monitor Performance
- Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Target: 90+ score on all metrics

### Analytics (Optional)
Add Google Analytics or Vercel Analytics:
```bash
npm install @vercel/analytics
```

```tsx
// In main.tsx
import { Analytics } from '@vercel/analytics/react'

// Add to root
<Analytics />
```

### Custom Domain
1. **Vercel:** Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

## 🔐 Security Headers (Vercel)

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 📞 Support

Need help deploying? 
- Check [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- Ask in Unique SMP Discord
- Open an issue on GitHub

---

**Ready to deploy?** Just push to GitHub and import to Vercel! 🚀
