#!/bin/bash
# Scent Twin - Quick Deployment Commands
# Run this script for instant deployment to any platform

echo "╔════════════════════════════════════════════════╗"
echo "║   SCENT TWIN - QUICK DEPLOYMENT COMMANDS      ║"
echo "╔════════════════════════════════════════════════╗"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "⚠️  Please run this from /app/frontend directory"
    echo "   cd /app/frontend && ./quick-deploy.sh"
    exit 1
fi

echo "Choose your deployment platform:"
echo ""
echo "1) Vercel (Recommended - Fastest)"
echo "2) Netlify"
echo "3) Railway"
echo "4) Surge"
echo "5) Build only (test locally)"
echo "6) Exit"
echo ""
read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Deploying to Vercel..."
        echo ""
        if ! command -v vercel &> /dev/null; then
            echo "📦 Installing Vercel CLI..."
            npm install -g vercel
        fi
        echo "✓ Vercel CLI ready"
        echo ""
        echo "Starting deployment..."
        vercel --prod
        echo ""
        echo "✅ Deployment complete!"
        echo ""
        echo "⚠️  IMPORTANT: Add environment variable in Vercel dashboard:"
        echo "   REACT_APP_BACKEND_URL=https://fragrance-twin-2.preview.emergentagent.com"
        echo ""
        echo "   Then redeploy: vercel --prod"
        ;;
    2)
        echo ""
        echo "🚀 Deploying to Netlify..."
        echo ""
        if ! command -v netlify &> /dev/null; then
            echo "📦 Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        echo "✓ Netlify CLI ready"
        echo ""
        echo "Building app..."
        yarn build
        echo ""
        echo "Starting deployment..."
        netlify deploy --prod
        echo ""
        echo "✅ Deployment complete!"
        echo ""
        echo "⚠️  IMPORTANT: Add environment variable in Netlify dashboard:"
        echo "   REACT_APP_BACKEND_URL=https://fragrance-twin-2.preview.emergentagent.com"
        ;;
    3)
        echo ""
        echo "🚀 Deploying to Railway..."
        echo ""
        if ! command -v railway &> /dev/null; then
            echo "📦 Installing Railway CLI..."
            npm install -g @railway/cli
        fi
        echo "✓ Railway CLI ready"
        echo ""
        railway login
        railway init
        railway up
        echo ""
        echo "✅ Deployment complete!"
        ;;
    4)
        echo ""
        echo "🚀 Deploying to Surge..."
        echo ""
        if ! command -v surge &> /dev/null; then
            echo "📦 Installing Surge..."
            npm install -g surge
        fi
        echo "✓ Surge ready"
        echo ""
        echo "Building app..."
        yarn build
        cd build
        surge
        echo ""
        echo "✅ Deployment complete!"
        ;;
    5)
        echo ""
        echo "🔨 Building app..."
        echo ""
        yarn build
        echo ""
        if [ -d "build" ]; then
            BUILD_SIZE=$(du -sh build | cut -f1)
            echo "✅ Build successful!"
            echo "   Size: $BUILD_SIZE"
            echo "   Location: /app/frontend/build"
            echo ""
            echo "To test locally:"
            echo "   npx serve -s build"
        else
            echo "❌ Build failed. Check errors above."
        fi
        ;;
    6)
        echo "Goodbye! 👋"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run again and select 1-6."
        exit 1
        ;;
esac

echo ""
echo "═══════════════════════════════════════════════"
echo "📚 Need help? Check DEPLOYMENT_FIXED.md"
echo "═══════════════════════════════════════════════"
