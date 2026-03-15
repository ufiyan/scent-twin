# Quick Deploy to Vercel

## Fastest Way (5 minutes)

### Option 1: One-Command Deploy

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from frontend directory
cd /app/frontend
vercel --prod
```

That's it! Follow the prompts and your app will be live.

---

## What You'll Need

1. **Vercel Account** (free) - Sign up at https://vercel.com
2. **This command** - Run in terminal:
   ```bash
   npm install -g vercel && cd /app/frontend && vercel
   ```

---

## After Deployment

You'll get a URL like: `https://scent-twin-xyz123.vercel.app`

### Add Environment Variables (Important!)

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add these:

```
REACT_APP_BACKEND_URL=https://fragrance-twin-2.preview.emergentagent.com
```

5. Redeploy (Vercel will prompt you, or run `vercel --prod` again)

---

## Alternative: GitHub + Vercel Auto-Deploy

### Step 1: Push to GitHub
```bash
cd /app
git init
git add .
git commit -m "Scent Twin - L'Oréal Hackathon 2025"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/scent-twin.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repo
4. Configure:
   - Root Directory: `frontend`
   - Framework: Create React App
   - Build Command: `yarn build`
5. Add environment variable (see above)
6. Click Deploy

---

## Current Deployment Status

✅ **Already Live on Emergent:**
- URL: https://fragrance-twin-2.preview.emergentagent.com
- Status: Fully functional
- Features: All working (biometrics, genetic quiz, AI generation, passport)

This URL works perfectly for your L'Oréal Hackathon demo!

---

## Why Deploy Again?

You might want Vercel if you need:
- ✅ Custom domain (e.g., scentwin.com)
- ✅ Better analytics
- ✅ Automatic deployments from Git
- ✅ Edge network (faster global loading)

**But for the hackathon**, your current Emergent URL is perfect! ✨

---

## Need Help?

**Current Setup:**
- Frontend: React + Vite ✅
- Backend: FastAPI (runs on Emergent) ✅
- Database: Not needed (API-only) ✅
- AI: GPT-4o via Emergent LLM Key ✅

**Contact Options:**
- Check DEPLOYMENT_GUIDE.md for detailed instructions
- Vercel docs: https://vercel.com/docs
- Or just use your current URL! It works great!
