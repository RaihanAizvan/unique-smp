# Troubleshooting Guide - Unique SMP

## ✅ Recently Fixed Issues

### TailwindCSS Not Working
**Status:** FIXED ✓

**What was wrong:**
- TailwindCSS v4 uses new syntax `@import "tailwindcss"` instead of `@tailwind` directives

**Solution applied:**
- Updated `src/index.css` to use correct v4 syntax
- Converted `tailwind.config.js` to TypeScript
- All styles now working correctly

### YouTube Embed CORS Warnings
**Status:** NORMAL BEHAVIOR ✓

**Console errors you might see:**
```
Cookie "__Secure-YEC" has been rejected because it is in a cross-site context...
Cross-Origin Request Blocked: The Same Origin Policy disallows reading...
```

**Explanation:**
- These are normal browser security warnings from YouTube's ad system
- They do NOT break your site
- The video will still play perfectly fine
- This happens on all sites using YouTube embeds

**Solution:**
- No action needed - this is expected behavior
- Users won't see these errors (only in developer console)
- Video loads and plays normally

## 🔍 Common Issues & Solutions

### Issue: Styles not applying

**Symptoms:**
- Website looks unstyled
- No colors or layout

**Solutions:**
1. Check if dev server is running
2. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
3. Clear browser cache
4. Verify `tailwind.config.ts` exists
5. Check console for errors

### Issue: 3D elements not showing

**Symptoms:**
- Floating blocks missing
- Black squares instead of 3D models

**Solutions:**
1. Check browser supports WebGL
   - Open: chrome://gpu
   - Look for "WebGL: Hardware accelerated"
2. Update graphics drivers
3. Try different browser
4. Check console for Three.js errors

**Browsers with best WebGL support:**
- Chrome/Edge (recommended)
- Firefox
- Safari (may have limitations)

### Issue: Build fails

**Symptoms:**
- `npm run build` shows errors

**Solutions:**
1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check TypeScript errors:
   ```bash
   npx tsc --noEmit
   ```

3. Clear Vite cache:
   ```bash
   rm -rf .vite
   npm run build
   ```

### Issue: Animations stuttering

**Symptoms:**
- Choppy scrolling
- Laggy hover effects

**Solutions:**
1. Close other heavy applications
2. Check performance in Chrome DevTools
3. Reduce number of 3D blocks if needed (edit `FloatingBlocks.tsx`)
4. Disable hardware acceleration as test

### Issue: Language toggle not working

**Symptoms:**
- Clicking EN/മലയാളം doesn't change text

**Solutions:**
1. Check browser console for errors
2. Verify `LanguageContext` is wrapping App
3. Check `content.ts` has both languages defined

### Issue: Discord/YouTube links not working

**Symptoms:**
- Links go to wrong place

**Solutions:**
1. Update all Discord links - search for: `discord.gg/uniquesmp`
2. Update YouTube video ID in `src/sections/Rules.tsx`
3. Replace `dQw4w9WgXcQ` with your actual video ID

## 🔧 Development Issues

### Hot reload not working

**Solution:**
```bash
# Stop dev server
# Restart with:
npm run dev
```

### Port 5173 in use

**Solution:**
```bash
# Vite will auto-detect and use next port (5174, etc.)
# Or kill process:
lsof -ti:5173 | xargs kill -9
npm run dev
```

### Import errors

**Symptoms:**
```
Cannot find module '@react-three/fiber'
```

**Solution:**
```bash
npm install
# If still failing:
rm -rf node_modules package-lock.json
npm install
```

## 🚀 Deployment Issues

### Vercel build fails

**Check:**
1. Build works locally: `npm run build`
2. Node version in `package.json` (add if missing):
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```
3. All dependencies in `package.json`

### Images not loading on deployed site

**Solution:**
1. Ensure images are in `public/` folder
2. Reference without `/public` prefix:
   ```tsx
   // Correct:
   <img src="/logo.png" />
   
   // Wrong:
   <img src="/public/logo.png" />
   ```

### 404 on page refresh (Netlify/GitHub Pages)

**Solution:**
- Already configured in `vercel.json`
- For Netlify, add `_redirects` file:
  ```
  /*    /index.html   200
  ```

## 📊 Performance Issues

### Large bundle size warning

**Current:**
- Three.js vendor chunk is large (~1MB) - this is normal
- It's required for 3D features
- Gzipped size is acceptable (~293KB)

**To reduce (optional):**
1. Lazy load 3D sections:
   ```tsx
   const CrossPlatform = lazy(() => import('./sections/CrossPlatform'))
   ```

2. Remove 3D features if not needed:
   - Delete `FloatingBlocks` from Hero
   - Delete `PlatformIcon` from CrossPlatform

### Slow initial load

**Solutions:**
1. Enable Vercel compression (automatic)
2. Lazy load sections
3. Optimize images (use WebP, compress)
4. Consider CDN for fonts

## 🐛 Reporting Issues

If you encounter issues not covered here:

1. Check browser console for errors
2. Check network tab in DevTools
3. Try in incognito/private mode
4. Test in different browser
5. Verify Node.js version: `node -v` (should be 18+)

## 📞 Getting Help

- Check `README.md` for setup instructions
- Check `DEPLOYMENT.md` for deployment help
- Review code comments in source files
- Search for similar issues in React/Vite docs

## ✅ Verification Checklist

Before reporting an issue, verify:

- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes successfully
- [ ] Browser console shows no critical errors
- [ ] Using Node.js 18 or higher
- [ ] Latest code from git

---

**Most issues are fixed with:** `rm -rf node_modules && npm install`
