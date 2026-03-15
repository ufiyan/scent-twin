#!/bin/bash

echo "======================================"
echo "  SCENT TWIN DEPLOYMENT CHECKLIST"
echo "======================================"
echo ""

# Check if required files exist
echo "✓ Checking deployment files..."
[ -f "vercel.json" ] && echo "  ✓ vercel.json exists" || echo "  ✗ vercel.json missing"
[ -f "frontend/.env" ] && echo "  ✓ frontend/.env exists" || echo "  ✗ frontend/.env missing"
[ -f "frontend/.env.example" ] && echo "  ✓ frontend/.env.example exists" || echo "  ✗ frontend/.env.example missing"
[ -f "frontend/package.json" ] && echo "  ✓ package.json exists" || echo "  ✗ package.json missing"
[ -f "README.md" ] && echo "  ✓ README.md exists" || echo "  ✗ README.md missing"

echo ""
echo "✓ Checking environment variables..."
grep -q "REACT_APP_BACKEND_URL" frontend/.env && echo "  ✓ REACT_APP_BACKEND_URL configured" || echo "  ✗ Backend URL missing"
grep -q "REACT_APP_OPENAI_API_KEY" frontend/.env && echo "  ✓ REACT_APP_OPENAI_API_KEY configured" || echo "  ✗ API Key missing"

echo ""
echo "✓ Checking if frontend builds..."
cd frontend
BUILD_OUTPUT=$(yarn build 2>&1)
if [ $? -eq 0 ]; then
    echo "  ✓ Frontend builds successfully"
    BUILD_SIZE=$(du -sh build 2>/dev/null | cut -f1)
    echo "  ✓ Build size: $BUILD_SIZE"
else
    echo "  ✗ Build failed - check errors above"
fi

echo ""
echo "======================================"
echo "  DEPLOYMENT READY STATUS"
echo "======================================"
echo ""
echo "Current Live URL:"
echo "  https://fragrance-twin-2.preview.emergentagent.com"
echo ""
echo "Ready to deploy to:"
echo "  • Vercel (recommended)"
echo "  • Netlify"
echo "  • Railway"
echo "  • Any static hosting"
echo ""
echo "Next steps:"
echo "  1. Read DEPLOYMENT_GUIDE.md for detailed instructions"
echo "  2. Choose your deployment platform"
echo "  3. Deploy and share your demo URL!"
echo ""
