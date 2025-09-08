# CodeScanner AI

A powerful AI-driven code analysis platform that scans, fixes, and completes your code projects.

## 🚀 Features

- **AI Code Analysis**: Advanced scanning for bugs, security issues, and performance problems
- **Intelligent Fixes**: AI-generated solutions with confidence scoring
- **Project Completion**: Finish partial codebases automatically
- **GitHub Integration**: Scan entire repositories
- **Multi-language Support**: 50+ programming languages
- **Admin Controls**: Advanced logging and management features

## 🔧 Setup & Configuration

### Required API Keys

To run CodeScanner AI, you'll need the following API keys:

#### 1. **OpenAI API Key** (Required for AI analysis)
- Go to [OpenAI API](https://platform.openai.com/api-keys)
- Create an account and generate an API key
- Add to `.env`: `VITE_OPENAI_API_KEY=your_key_here`

#### 2. **GitHub Token** (Required for GitHub integration)
- Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
- Generate a new token with `repo` scope
- Add to `.env`: `VITE_GITHUB_TOKEN=your_token_here`

#### 3. **Supabase** (Recommended for database)
- Create account at [Supabase](https://supabase.com)
- Create new project
- Get URL and anon key from project settings
- Add to `.env`:
  ```
  VITE_SUPABASE_URL=your_project_url
  VITE_SUPABASE_ANON_KEY=your_anon_key
  ```

#### 4. **Stripe** (For payments)
- Create account at [Stripe](https://stripe.com)
- Get publishable and secret keys
- Add to `.env`:
  ```
  VITE_STRIPE_PUBLISHABLE_KEY=your_publishable_key
  STRIPE_SECRET_KEY=your_secret_key
  ```

### Environment Setup

1. Copy `.env.example` to `.env`
2. Fill in your API keys
3. Install dependencies: `npm install`
4. Start development: `npm run dev`

## 💰 Pricing Strategy

### Subscription Plans
- **Free**: 50 scans/month - $0
- **Pro**: 500 scans/month - $49/month
- **Enterprise**: Unlimited - $199/month

### One-Time Services
- **Single Project**: Complete one repo - $299
- **Business Audit**: Complete all projects - $1,499

## 🔐 Authentication

- **Admin**: `admin@codescanner.com` + `password`
- **Regular Users**: Any email + `password`

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Admin Features

- Auto-complete partial projects
- Fix logging with timestamps
- Advanced scanning controls
- User management
- Analytics and reporting

## 🔒 Security

- All code analysis happens securely
- No permanent storage of user code
- Enterprise-grade encryption
- SOC 2 compliant infrastructure

## 📞 Support

- Email: support@codescanner.ai
- Documentation: [docs.codescanner.ai](https://docs.codescanner.ai)
- Status: [status.codescanner.ai](https://status.codescanner.ai)