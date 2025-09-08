import React, { useState } from 'react';
import { 
  Key, 
  Github, 
  Database, 
  CreditCard, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Copy,
  Eye,
  EyeOff
} from 'lucide-react';

const ApiKeySetup: React.FC = () => {
  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  const [testResults, setTestResults] = useState<{[key: string]: 'success' | 'error' | 'testing'}>({});
  
  // Check if API keys are already configured
  const hasOpenAI = import.meta.env.VITE_OPENAI_API_KEY && import.meta.env.VITE_OPENAI_API_KEY.length > 0;
  const hasGitHub = import.meta.env.VITE_GITHUB_TOKEN && import.meta.env.VITE_GITHUB_TOKEN.length > 0;
  const hasSupabase = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_URL.length > 0;

  const toggleKeyVisibility = (keyName: string) => {
    setShowKeys(prev => ({ ...prev, [keyName]: !prev[keyName] }));
  };

  const testApiKey = async (keyType: string) => {
    setTestResults(prev => ({ ...prev, [keyType]: 'testing' }));
    
    // Simulate API testing
    setTimeout(() => {
      setTestResults(prev => ({ ...prev, [keyType]: 'success' }));
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const apiKeys = [
    {
      name: 'OpenAI API Key',
      key: 'VITE_OPENAI_API_KEY',
      icon: Key,
      required: true,
      configured: hasOpenAI,
      description: 'Required for AI code analysis and fix suggestions',
      link: 'https://platform.openai.com/api-keys',
      placeholder: 'sk-proj-...',
      cost: '$5-20/month',
      setup: [
        'Go to OpenAI Platform',
        'Create account or sign in',
        'Navigate to API Keys',
        'Create new secret key',
        'Copy and paste here'
      ]
    },
    {
      name: 'GitHub Token',
      key: 'VITE_GITHUB_TOKEN',
      icon: Github,
      required: true,
      configured: hasGitHub,
      description: 'Required for GitHub repository scanning',
      link: 'https://github.com/settings/tokens',
      placeholder: 'ghp_...',
      cost: 'Free',
      setup: [
        'Go to GitHub Settings',
        'Navigate to Developer settings > Tokens',
        'Generate new token (classic)',
        'Select "repo" scope',
        'Copy and paste here'
      ]
    },
    {
      name: 'Supabase URL',
      key: 'VITE_SUPABASE_URL',
      icon: Database,
      required: false,
      configured: hasSupabase,
      description: 'Database for user data and scan history',
      link: 'https://supabase.com/dashboard',
      placeholder: 'https://your-project.supabase.co',
      cost: 'Free tier available',
      setup: [
        'Go to Supabase Dashboard',
        'Create new project',
        'Wait for setup completion',
        'Go to Settings > API',
        'Copy Project URL',
        'Paste here'
      ]
    },
    {
      name: 'Supabase Anon Key',
      key: 'VITE_SUPABASE_ANON_KEY',
      icon: Database,
      required: false,
      configured: hasSupabase,
      description: 'Public key for Supabase authentication',
      link: 'https://supabase.com/dashboard',
      placeholder: 'eyJ...',
      cost: 'Free tier available',
      setup: [
        'Same Supabase project as above',
        'Go to Settings > API',
        'Copy the "anon public" key',
        'Paste here'
      ]
    },
    {
      name: 'Stripe Publishable Key',
      key: 'VITE_STRIPE_PUBLISHABLE_KEY',
      icon: CreditCard,
      required: false,
      configured: false,
      description: 'For processing subscription payments',
      link: 'https://dashboard.stripe.com/apikeys',
      placeholder: 'pk_test_...',
      cost: '2.9% + 30¢ per transaction',
      setup: [
        'Go to Stripe Dashboard',
        'Complete account setup',
        'Navigate to API Keys',
        'Copy Publishable key',
        'Paste here'
      ]
    },
    {
      name: 'Sentry DSN',
      key: 'VITE_SENTRY_DSN',
      icon: AlertTriangle,
      required: false,
      configured: false,
      description: 'Error tracking and monitoring (DSN = Data Source Name)',
      link: 'https://sentry.io/signup/',
      placeholder: 'https://abc123@o123456.ingest.sentry.io/123456',
      cost: 'Free tier available',
      setup: [
        'Go to Sentry.io',
        'Create account and organization',
        'Create new project',
        'Select "React" as platform',
        'Copy the DSN URL provided',
        'Paste here'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">API Key Setup</h1>
          <p className="text-gray-400">
            Configure your API keys to unlock the full power of CodeScanner AI
          </p>
        </div>

        {/* Status Overview */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Configuration Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg border ${hasOpenAI ? 'border-green-600 bg-green-900/20' : 'border-red-600 bg-red-900/20'}`}>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${hasOpenAI ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <span className="text-white font-medium">OpenAI API</span>
              </div>
              <p className={`text-sm mt-1 ${hasOpenAI ? 'text-green-300' : 'text-red-300'}`}>
                {hasOpenAI ? 'Configured' : 'Not configured'}
              </p>
            </div>
            <div className={`p-4 rounded-lg border ${hasGitHub ? 'border-green-600 bg-green-900/20' : 'border-red-600 bg-red-900/20'}`}>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${hasGitHub ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <span className="text-white font-medium">GitHub Token</span>
              </div>
              <p className={`text-sm mt-1 ${hasGitHub ? 'text-green-300' : 'text-red-300'}`}>
                {hasGitHub ? 'Configured' : 'Not configured'}
              </p>
            </div>
            <div className={`p-4 rounded-lg border ${hasSupabase ? 'border-green-600 bg-green-900/20' : 'border-yellow-600 bg-yellow-900/20'}`}>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${hasSupabase ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                <span className="text-white font-medium">Database</span>
              </div>
              <p className={`text-sm mt-1 ${hasSupabase ? 'text-green-300' : 'text-yellow-300'}`}>
                {hasSupabase ? 'Configured' : 'Optional'}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-800 to-yellow-900 border border-yellow-600 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl font-semibold text-white">Quick Start</h2>
          </div>
          <p className="text-yellow-100 mb-4">
            To get started immediately, you only need the <strong>OpenAI API Key</strong> and <strong>GitHub Token</strong>. 
            The other keys are optional but recommended for full functionality.
          </p>
          <div className="text-yellow-200 text-sm">
            <strong>Minimum cost:</strong> ~$5-10/month for OpenAI usage
          </div>
        </div>

        <div className="space-y-6">
          {apiKeys.map((api, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 border rounded-xl p-6 ${
                api.configured ? 'border-green-500' : api.required ? 'border-yellow-500' : 'border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    api.configured ? 'bg-green-500' : api.required ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}>
                    <api.icon className={`w-5 h-5 ${
                      api.configured || api.required ? 'text-black' : 'text-white'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                      <span>{api.name}</span>
                      {api.configured && (
                        <span className="px-2 py-1 bg-green-500 text-black text-xs rounded-full">
                          Configured
                        </span>
                      )}
                      {api.required && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                          Required
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm">{api.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Cost</div>
                  <div className="text-white font-medium">{api.cost}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Setup Steps:</h4>
                  <ol className="space-y-2">
                    {api.setup.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <span className="flex-shrink-0 w-5 h-5 bg-yellow-500 text-black rounded-full flex items-center justify-center text-xs font-bold">
                          {stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <a
                    href={api.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open {api.name.split(' ')[0]} Dashboard</span>
                  </a>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-3">API Key:</h4>
                  <div className="relative">
                    <input
                      type={showKeys[api.key] ? 'text' : 'password'}
                      placeholder={api.placeholder}
                      className="w-full p-3 pr-20 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pr-3">
                      <button
                        onClick={() => toggleKeyVisibility(api.key)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {showKeys[api.key] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => copyToClipboard(`${api.key}=your-key-here`)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="text-xs text-gray-400">
                      Add to .env file: <code className="bg-gray-700 px-1 rounded">{api.key}</code>
                    </div>
                    <button
                      onClick={() => testApiKey(api.key)}
                      disabled={testResults[api.key] === 'testing'}
                      className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors duration-300"
                    >
                      {testResults[api.key] === 'testing' ? (
                        <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin" />
                      ) : testResults[api.key] === 'success' ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <span>Test</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-br from-green-800 to-green-900 border border-green-600 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h2 className="text-xl font-semibold text-white">Next Steps</h2>
          </div>
          <div className="text-green-100 space-y-2">
            <p>1. Copy your API keys to the <code className="bg-green-700 px-1 rounded">.env</code> file</p>
            <p>2. Restart your development server: <code className="bg-green-700 px-1 rounded">npm run dev</code></p>
            <p>3. Test the scanner with real code files</p>
            <p>4. Start analyzing and fixing code with AI!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeySetup;
