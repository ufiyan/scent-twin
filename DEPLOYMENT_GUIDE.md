# Scent Twin — Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Git repository with your code

## Step 1: Prepare Your Repository

Your code needs to be in a Git repository (GitHub, GitLab, or Bitbucket).

If not already done:
```bash
cd /app
git init
git add .
git commit -m "Initial commit - Scent Twin for L'Oréal Hackathon"
```

Then push to GitHub:
```bash
# Create a repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/scent-twin.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to frontend folder:
```bash
cd /app/frontend
```

3. Deploy:
```bash
vercel
```

Follow the prompts:
- Set up and deploy? `Y`
- Which scope? Select your account
- Link to existing project? `N`
- What's your project's name? `scent-twin`
- In which directory is your code located? `./`
- Want to modify these settings? `N`

4. Deploy to production:
```bash
vercel --prod
```

### Option B: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Import your Git repository
3. Configure project:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`
   - **Install Command:** `yarn install`

4. Add Environment Variables:
   - Click "Environment Variables"
   - Add: `REACT_APP_BACKEND_URL` = `https://fragrance-twin-2.preview.emergentagent.com`
   - Add: `REACT_APP_OPENAI_API_KEY` = `sk-emergent-2Ce66869eA1471082F`

5. Click "Deploy"

## Step 3: Configure Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., `scentwin.com`)
4. Follow Vercel's DNS configuration instructions

## Important Notes

### Backend API URL
Since your backend runs on Emergent, you'll need to keep using:
```
REACT_APP_BACKEND_URL=https://fragrance-twin-2.preview.emergentagent.com
```

Or deploy the backend separately (see below).

### API Key Security
For production, you should:
1. Keep the backend on Emergent (it handles the API key securely)
2. Never expose `REACT_APP_OPENAI_API_KEY` in frontend-only deployments
3. The current setup with backend proxy is already secure ✓

## Troubleshooting

### Build fails with "module not found"
```bash
cd frontend
yarn install
yarn build
```

### Environment variables not working
- Make sure variables start with `REACT_APP_`
- Redeploy after adding env vars
- Check Vercel logs for errors

### CORS errors
- Ensure backend CORS allows your Vercel domain
- Update backend `.env` if needed

## Expected URLs

- **Frontend (Vercel):** https://scent-twin.vercel.app
- **Backend (Emergent):** https://fragrance-twin-2.preview.emergentagent.com
- **Custom Domain:** https://yourdomain.com (if configured)

## Deployment Complete! 🎉

Your app should be live at the Vercel URL within 2-3 minutes.
