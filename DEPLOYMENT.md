# Deployment Guide

## 🚀 Deploy to Vercel (Recommended - Easiest)

### Method 1: GitHub Integration (Best)
1. Push this code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import from GitHub
4. Select your repository
5. Add environment variables:
   - `VITE_OPENAI_API_KEY` = your OpenAI key
   - `VITE_GITHUB_TOKEN` = your GitHub token
   - `VITE_SUPABASE_URL` = your Supabase URL (optional)
   - `VITE_SUPABASE_ANON_KEY` = your Supabase key (optional)
6. Click Deploy!

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 🔧 Deploy to Render

### Method 1: GitHub Integration
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New" → "Static Site"
4. Connect GitHub repository
5. Use these settings:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
6. Add environment variables in Render dashboard
7. Deploy!

### Method 2: Manual Upload
1. Run `npm run build` locally
2. Upload `dist` folder to Render
3. Set environment variables

## 📋 Required Environment Variables

**Essential (App won't work without these):**
- `VITE_OPENAI_API_KEY` - Your OpenAI API key
- `VITE_GITHUB_TOKEN` - Your GitHub personal access token

**Optional (For full features):**
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key
- `VITE_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key

## 🎯 Quick Start Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel
npx vercel --prod

# Check if build works
npm run build && npm run preview
```

## 🔍 Troubleshooting

**Build fails?**
- Check all dependencies are installed: `npm install`
- Verify Node.js version: `node --version` (should be 16+)

**App shows errors after deploy?**
- Verify environment variables are set correctly
- Check browser console for specific errors
- Ensure API keys are valid and have proper permissions

**Scanner not working?**
- Verify `VITE_OPENAI_API_KEY` is set
- Check OpenAI account has credits
- Verify GitHub token has `repo` permissions