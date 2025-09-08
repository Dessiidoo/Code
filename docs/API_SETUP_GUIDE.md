# 🔑 Complete API Key Setup Guide

## Required API Keys for CodeScanner AI

### 1. 🤖 OpenAI API Key (REQUIRED)
**What it's for:** AI code analysis, bug detection, and fix suggestions

**Steps:**
1. Go to: https://platform.openai.com/signup
2. Create account (use Google/GitHub for faster signup)
3. Verify your email
4. Go to: https://platform.openai.com/api-keys
5. Click "Create new secret key"
6. Copy the key (starts with `sk-proj-...`)
7. Add to `.env`: `VITE_OPENAI_API_KEY=sk-proj-your-key-here`

**Cost:** $5-20/month for typical usage

---

### 2. 🐙 GitHub Personal Access Token (For GitHub Integration)
**What it's for:** Scanning GitHub repositories

**Steps:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Set expiration: "No expiration" or "1 year"
4. Select scopes: ✅ `repo` (Full control of private repositories)
5. Click "Generate token"
6. Copy the token (starts with `ghp_...`)
7. Add to `.env`: `VITE_GITHUB_TOKEN=ghp_your-token-here`

**Cost:** Free

---

### 3. 🗄️ Supabase (Database - Optional but Recommended)
**What it's for:** Storing user data, scan history, and logs

**Steps:**
1. Go to: https://supabase.com/dashboard
2. Sign up with GitHub
3. Click "New Project"
4. Choose organization → Enter project name
5. Create database password
6. Wait for setup (2-3 minutes)
7. Go to Settings → API
8. Copy "Project URL" and "anon public" key
9. Add to `.env`:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

**Cost:** Free tier (50MB database, 500MB bandwidth)

---

### 4. 💳 Stripe (Payments - Optional)
**What it's for:** Processing subscription payments

**Steps:**
1. Go to: https://dashboard.stripe.com/register
2. Create account
3. Complete business verification
4. Go to: https://dashboard.stripe.com/apikeys
5. Copy "Publishable key" (starts with `pk_test_...`)
6. Copy "Secret key" (starts with `sk_test_...`)
7. Add to `.env`:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your-key-here
   STRIPE_SECRET_KEY=sk_test_your-key-here
   ```

**Cost:** 2.9% + 30¢ per transaction

---

### 5. 📊 Sentry (Error Tracking - Optional)
**What it's for:** Monitoring errors and performance

**Steps:**
1. Go to: https://sentry.io/signup/
2. Create account
3. Create new project → Select "React"
4. Copy the DSN (looks like a URL)
5. Add to `.env`: `VITE_SENTRY_DSN=your-dsn-here`

**Cost:** Free tier (5,000 errors/month)

---

## 🚀 Quick Start (Minimum Required)

**To get started immediately, you only need:**

1. **OpenAI API Key** - For AI functionality
2. **GitHub Token** - For repository scanning

**Total cost to start:** ~$5-10/month

---

## 📝 Environment File Setup

1. Copy `.env.example` to `.env`
2. Fill in your API keys
3. Restart the development server: `npm run dev`

---

## ✅ Testing Your Setup

1. Add OpenAI key → Test code scanning
2. Add GitHub token → Test repository scanning
3. Add Supabase → Test user registration
4. Add Stripe → Test payment flow

---

## 🆘 Need Help?

- **OpenAI Issues:** Check billing at https://platform.openai.com/account/billing
- **GitHub Issues:** Ensure token has `repo` scope
- **Supabase Issues:** Check project status in dashboard
- **Stripe Issues:** Complete account verification first

---

## 🔒 Security Notes

- Never commit `.env` file to git
- Use test keys during development
- Switch to production keys when deploying
- Rotate keys regularly for security