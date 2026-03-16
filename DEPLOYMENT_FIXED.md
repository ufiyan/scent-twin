# 🚀 Scent Twin - Multi-Platform Deployment Guide (404 Error Fixed)

## ✅ Issues Fixed

The 404 error has been resolved by:
1. ✅ Adding proper `vercel.json` in frontend directory
2. ✅ Adding `_redirects` file for Netlify/other platforms
3. ✅ Adding `netlify.toml` configuration
4. ✅ Setting `homepage: "."` in package.json
5. ✅ Configuring proper SPA routing

---

## 🎯 Option 1: Vercel Deployment (RECOMMENDED)

### Method A: Vercel CLI (Fastest - 2 minutes)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Navigate to frontend folder
cd /app/frontend

# 3. Deploy to production
vercel --prod
```

**Follow the prompts:**
- Setup and deploy? → `Y`
- Which scope? → Select your account
- Link to existing project? → `N`
- What's your project's name? → `scent-twin`
- In which directory is your code located? → `./` (current directory)
- Want to override the settings? → `N`

**Add Environment Variables (IMPORTANT):**

After deployment, go to your Vercel dashboard:
1. Select your project
2. Go to Settings → Environment Variables
3. Add these variables:

```
REACT_APP_BACKEND_URL=https://fragrance-twin-2.preview.emergentagent.com
```

4. Redeploy: `vercel --prod`

### Method B: Vercel Dashboard (Easiest - 5 minutes)

1. **Push to GitHub:**
   ```bash
   cd /app
   git init
   git add .
   git commit -m "Scent Twin - L'Oréal Hackathon"
   
   # Create repo on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/scent-twin.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repo
   - Configure settings:
     - **Root Directory:** `frontend`
     - **Framework Preset:** Create React App
     - **Build Command:** `yarn build`
     - **Output Directory:** `build`
     - **Install Command:** `yarn install`

3. **Add Environment Variable:**
   - Click "Environment Variables"
   - Add: `REACT_APP_BACKEND_URL` = `https://fragrance-twin-2.preview.emergentagent.com`

4. **Deploy!** (Click the Deploy button)

---

## 🌐 Option 2: Netlify Deployment

### Method A: Netlify CLI

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Navigate to frontend
cd /app/frontend

# 3. Build the app
yarn build

# 4. Deploy
netlify deploy --prod
```

### Method B: Netlify Dashboard (Drag & Drop)

```bash
# 1. Build the app locally
cd /app/frontend
yarn build

# 2. Go to https://app.netlify.com/drop
# 3. Drag the 'build' folder to the drop zone
# 4. Done! You'll get a URL like: https://random-name-123.netlify.app
```

### Method C: Netlify + GitHub

1. Push code to GitHub (see Vercel Method B step 1)
2. Go to https://app.netlify.com/start
3. Click "Import an existing project"
4. Select your GitHub repo
5. Configure:
   - Base directory: `frontend`
   - Build command: `yarn build`
   - Publish directory: `frontend/build`
6. Add environment variable in Site Settings → Environment Variables
7. Deploy!

---

## 🐙 Option 3: Railway Deployment

```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login
railway login

# 3. Initialize project
cd /app/frontend
railway init

# 4. Deploy
railway up
```

---

## 📦 Option 4: Static Hosting (GitHub Pages, Surge, etc.)

### GitHub Pages

```bash
# 1. Add to package.json
npm install --save-dev gh-pages

# 2. Add scripts to package.json:
#    "predeploy": "yarn build",
#    "deploy": "gh-pages -d build"

# 3. Deploy
cd /app/frontend
yarn deploy
```

### Surge.sh

```bash
# 1. Install Surge
npm install -g surge

# 2. Build and deploy
cd /app/frontend
yarn build
cd build
surge
```

---

## 🔧 Configuration Files Added

All these files have been created to ensure multi-platform compatibility:

1. **`/app/frontend/vercel.json`** - Vercel configuration with SPA routing
2. **`/app/frontend/public/_redirects`** - Netlify/Cloudflare redirects
3. **`/app/frontend/netlify.toml`** - Netlify build configuration
4. **`/app/frontend/package.json`** - Updated with `homepage: "."`

---

## 🐛 Troubleshooting

### 404 Error Still Appearing?

**On Vercel:**
```bash
# Make sure you're deploying from the frontend directory
cd /app/frontend
vercel --prod
```

**Environment Variable Missing:**
```bash
# Check if REACT_APP_BACKEND_URL is set in Vercel dashboard
# Go to: Settings → Environment Variables → Add
```

**Wrong Root Directory:**
- Vercel dashboard → Settings → General
- Set Root Directory to: `frontend`

### Build Fails?

```bash
# Test build locally first
cd /app/frontend
yarn build

# If successful, the build folder should be created
ls -la build/
```

### Blank Page After Deploy?

1. Check browser console for errors (F12)
2. Verify environment variables are set
3. Check that homepage in package.json is set to `"."`
4. Ensure vercel.json is in the frontend directory

### API Calls Failing?

```bash
# Verify backend URL is correct
echo $REACT_APP_BACKEND_URL

# Should output:
# https://fragrance-twin-2.preview.emergentagent.com
```

---

## ✅ Deployment Verification Checklist

After deployment, test these:

- [ ] Home page loads (onboarding screen)
- [ ] Can navigate to profile page
- [ ] Biometric sliders work
- [ ] Genetic quiz loads (5 questions)
- [ ] Can select all 5 quiz answers
- [ ] Continue button enables after quiz completion
- [ ] Intent selection works
- [ ] AI generation completes (may take 15-30 seconds)
- [ ] Result page shows fragrance name and story
- [ ] Radar chart displays correctly
- [ ] Passport page loads
- [ ] All navigation works without 404 errors

---

## 🎯 Expected URLs

After deployment, you'll have:

- **Vercel:** `https://scent-twin-abc123.vercel.app`
- **Netlify:** `https://scent-twin-xyz456.netlify.app`
- **Railway:** `https://scent-twin.up.railway.app`
- **Current (Emergent):** `https://fragrance-twin-2.preview.emergentagent.com`

---

## 🔐 Important Security Notes

### Backend API
Your backend is running on Emergent and handles the OpenAI API key securely. The frontend makes requests to:
```
https://fragrance-twin-2.preview.emergentagent.com/api/generate-fragrance
```

### CORS
If you deploy backend elsewhere, update the CORS settings in `/app/backend/server.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-vercel-url.vercel.app"],
    # ...
)
```

---

## 📊 Platform Comparison

| Platform | Deploy Time | Custom Domain | Auto Deploy | Free Tier |
|----------|-------------|---------------|-------------|-----------|
| Vercel   | 2 min       | ✅ Yes        | ✅ Yes      | ✅ Yes    |
| Netlify  | 3 min       | ✅ Yes        | ✅ Yes      | ✅ Yes    |
| Railway  | 5 min       | ✅ Yes        | ✅ Yes      | ⚠️ Limited|
| Surge    | 1 min       | ✅ Yes        | ❌ No       | ✅ Yes    |

**Recommendation:** Use Vercel for best performance and ease of use.

---

## 🎉 You're Ready!

All configuration files are in place. Choose your platform and deploy!

**Need help?** Check the troubleshooting section above or the error messages from your deployment platform.
