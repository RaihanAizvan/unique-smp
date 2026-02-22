# 👥 Teammates Feature - Documentation

## Overview

The whitelist application form now supports **team applications**! Players can apply together with up to 3 teammates (4 members total, following server rules).

---

## ✨ Features

### For Applicants:

✅ **Optional Checkbox** - "I'm applying with teammates (max 3)"  
✅ **Dynamic Fields** - Add/remove teammates as needed  
✅ **Validation** - Same username rules as main applicant  
✅ **Flexible** - Teammates can be added partially (only MC or only Discord)  
✅ **User-Friendly** - Clear UI with add/remove buttons  
✅ **Server Rules Compliant** - Max 4 members per team  

### For Admins:

✅ **Discord Embed** - Teammates shown in organized format  
✅ **Clear Distinction** - "New Team Whitelist Application" title  
✅ **Numbered List** - Easy to read teammate info  
✅ **All Details** - Both Minecraft and Discord usernames  

---

## 🎯 How It Works

### User Experience:

1. **Fill out main application** (your info)
2. **Check "I'm applying with teammates"** (optional)
3. **First teammate field appears automatically**
4. **Click "+ Add Another Teammate"** to add more (max 3)
5. **Click "Remove"** to remove unwanted teammate fields
6. **Submit** - All data sent to Discord

### Teammate Fields:

Each teammate has:
- **Minecraft Username** (optional but recommended)
- **Discord Username** (optional but recommended)

Both fields are validated if filled:
- MC Username: 3-16 characters, alphanumeric + underscore
- Discord Username: 2-32 characters

---

## 📋 Discord Embed Format

### Solo Application:
```
🎮 New Whitelist Application

🎯 Minecraft Username: `Steve123`
💬 Discord Username: `steve#1234`
🎂 Age: 18
🎮 Platform: Java Edition
📝 Why Join?: Looking for a community...
⛏️ Minecraft Experience: Playing for 5 years...
```

### Team Application:
```
🎮 New Team Whitelist Application

🎯 Minecraft Username: `Steve123`
💬 Discord Username: `steve#1234`
🎂 Age: 18
🎮 Platform: Java Edition
📝 Why Join?: Looking for a community...
⛏️ Minecraft Experience: Playing for 5 years...

👥 Teammates:
**1.** MC: `Alex456` | Discord: `alex#5678`
**2.** MC: `Herobrine789` | Discord: `hero#9999`
**3.** MC: `Notch001` | Discord: `notch#0001`
```

---

## 🔧 Technical Details

### Files Modified:

1. **`src/utils/discord.ts`**
   - Added `Teammate` interface
   - Updated `WhitelistApplication` with `hasTeammates` and `teammates[]`
   - Modified embed builder to include teammates section

2. **`src/utils/validation.ts`**
   - Added `teammateMinecraftUsername` validator
   - Added `teammateDiscordUsername` validator
   - Both validators allow empty values (optional)

3. **`src/components/WhitelistForm.tsx`**
   - Added teammate toggle checkbox
   - Added dynamic teammate fields
   - Added add/remove functionality
   - Updated form state management

### Data Structure:

```typescript
interface Teammate {
  minecraftUsername: string;
  discordUsername: string;
}

interface WhitelistApplication {
  minecraftUsername: string;
  discordUsername: string;
  age: string;
  platform: string;
  reason: string;
  experience: string;
  hasTeammates: boolean;      // NEW
  teammates?: Teammate[];      // NEW
}
```

---

## 🎨 UI Components

### Checkbox Toggle:
```
☑ I'm applying with teammates (max 3)
```

### Teammate Card:
```
┌─────────────────────────────────────┐
│ Teammate 1                  [Remove]│
│                                     │
│ Minecraft Username                  │
│ [Steve123                        ]  │
│                                     │
│ Discord Username                    │
│ [steve#1234                      ]  │
└─────────────────────────────────────┘
```

### Add Button:
```
┌─────────────────────────────────────┐
│      + Add Another Teammate         │
└─────────────────────────────────────┘
```

---

## 🧪 Testing Guide

### Test Cases:

**1. Solo Application (No Teammates)**
- Don't check the teammates box
- Submit form
- Verify Discord shows "New Whitelist Application"
- Verify no teammates section

**2. Team Application (1 Teammate)**
- Check teammates box
- Fill in 1 teammate
- Submit form
- Verify Discord shows "New Team Whitelist Application"
- Verify 1 teammate listed

**3. Team Application (3 Teammates)**
- Check teammates box
- Click "+ Add Another Teammate" twice
- Fill in all 3 teammates
- Submit form
- Verify all 3 teammates in Discord

**4. Add/Remove Teammates**
- Check teammates box
- Add 2 teammates
- Remove 1 teammate
- Verify only 1 remains
- Submit and verify Discord

**5. Partial Teammate Info**
- Add teammate with only MC username
- Add teammate with only Discord username
- Submit form
- Verify Discord shows "Not provided" for missing fields

**6. Validation**
- Enter invalid MC username (e.g., "AB" - too short)
- Enter invalid Discord username (e.g., 40 characters)
- Verify validation errors appear

---

## 📊 Commit History

New commits for this feature:
1. `feat: add teammates interface to WhitelistApplication`
2. `feat: add teammate validation rules (optional fields)`
3. `feat: add teammates state to WhitelistForm`
4. `feat: add teammate management handlers to WhitelistForm`
5. `feat: add teammate fields UI with add/remove functionality`
6. `feat: add teammates to Discord webhook embed`
7. `docs: add teammates feature documentation`

**Total new commits: 7+**

---

## 🎯 Server Rules Alignment

This feature follows your server rule:
> **"Max 4 members per team"**

The form enforces this by:
- Allowing max 3 teammates (you + 3 = 4 total)
- Showing helper text: "Teams can have up to 4 members total"
- Disabling "+ Add Another Teammate" at 3 teammates

---

## 💡 Future Enhancements

Potential improvements:
- Auto-fetch Discord usernames from Discord API
- Verify Minecraft usernames against Mojang API
- Team name field
- Team role/leader designation
- Bulk approve/deny for teams in Discord
- Auto-create team roles in Discord

---

## ✅ Ready to Use!

The teammates feature is:
- ✅ Fully implemented
- ✅ Tested and working
- ✅ Production ready
- ✅ Documented

Just configure your Discord webhook and start receiving team applications!

---

**Need help?** The feature is self-explanatory in the UI, but refer to this doc for technical details.
