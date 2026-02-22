# Discord Webhook Setup Guide

## 🎯 Quick Setup (5 minutes)

### Step 1: Create Discord Webhook

1. **Open your Discord server**
2. **Click on Server Settings** (gear icon)
3. **Navigate to**: `Integrations` → `Webhooks`
4. **Click**: `New Webhook`
5. **Configure the webhook**:
   - **Name**: `Unique SMP Applications`
   - **Channel**: Choose where applications should be sent (e.g., `#whitelist-applications`)
   - **Avatar**: Upload your server logo (optional)
6. **Click**: `Copy Webhook URL`

### Step 2: Configure Your Project

#### For Local Development:

```bash
# 1. Create .env file in project root
cp .env.example .env

# 2. Edit .env and paste your webhook URL
# Replace the example URL with your actual webhook URL
VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/123456789/abcdefghijklmnop
```

#### For Vercel Deployment:

1. **Go to**: [vercel.com](https://vercel.com)
2. **Open your project** → `Settings` → `Environment Variables`
3. **Add new variable**:
   - **Name**: `VITE_DISCORD_WEBHOOK_URL`
   - **Value**: Your webhook URL
   - **Environment**: All (Production, Preview, Development)
4. **Click**: `Save`
5. **Redeploy** your project

---

## 📋 Testing Your Webhook

### Test in Development:

```bash
# 1. Make sure .env file exists with webhook URL
npm run dev

# 2. Open http://localhost:5173/
# 3. Navigate to Whitelist section
# 4. Click "Apply Now"
# 5. Fill out and submit the form
# 6. Check your Discord channel for the application
```

### Test Message Format:

When a user submits the form, you'll receive a rich embed in Discord with:

- 🎯 Minecraft Username
- 💬 Discord Username
- 🎂 Age
- 🎮 Platform (Java/Bedrock)
- 📝 Why they want to join
- ⛏️ Their Minecraft experience

---

## 🔒 Security Best Practices

### ✅ DO:
- Keep webhook URL in `.env` (not committed to git)
- Add `.env` to `.gitignore` (already done)
- Use Vercel environment variables for production
- Monitor webhook usage in Discord

### ❌ DON'T:
- Never commit `.env` file
- Never share webhook URL publicly
- Never hardcode webhook URL in code

---

## 🐛 Troubleshooting

### "Discord webhook not configured" error:

**Problem**: Environment variable not set
**Solution**: 
```bash
# Check if .env file exists
ls -la .env

# Check if variable is set (should NOT be empty)
echo $VITE_DISCORD_WEBHOOK_URL
```

### Applications not appearing in Discord:

1. **Check webhook is active** in Discord Server Settings
2. **Verify webhook URL** is correct in `.env`
3. **Check browser console** for errors (F12)
4. **Restart dev server** after changing `.env`

### CORS errors:

**This is normal!** Discord webhooks work correctly despite CORS warnings.
The application will still be sent successfully.

---

## 📝 Example Webhook URL Format

```
https://discord.com/api/webhooks/1234567890123456789/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
                                  ↑                    ↑
                              WEBHOOK ID          WEBHOOK TOKEN
```

---

## 🎨 Customize Embed Appearance

Edit `src/utils/discord.ts` to customize:

- **Embed color** (`color: 0xDC2626`)
- **Fields displayed**
- **Footer text**
- **Webhook username/avatar**

---

## 🚀 Ready to Deploy?

After setup:

1. ✅ Webhook created in Discord
2. ✅ `.env` configured locally
3. ✅ Tested and working
4. ✅ Added to Vercel environment variables
5. ✅ `.env` in `.gitignore`

**You're all set!** 🎉

---

## 💡 Pro Tips

### Multiple Environments:

```bash
# Development webhook (test channel)
VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/.../dev-webhook

# Production webhook (main channel)
# Set different URL in Vercel for production
```

### Auto-responses:

Use Discord's webhook feature to:
- Auto-reply to applicants
- Set up notification roles
- Create application threads
- Use Discord bots for auto-processing

### Rate Limiting:

Discord webhooks allow:
- **30 requests per minute**
- **2 requests per second**

The form already handles this, but for high traffic, consider implementing a queue system.

---

Need help? Check the troubleshooting section or Discord's [webhook documentation](https://discord.com/developers/docs/resources/webhook).
