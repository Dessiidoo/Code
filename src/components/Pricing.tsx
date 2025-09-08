import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: 'Free',
      period: '/month',
      icon: Star,
      color: 'from-gray-500 to-gray-600',
      popular: false,
      features: [
        '50 scans per month',
        'Basic code analysis',
        '5 languages supported',
        'Email support',
        'Basic issue detection',
        'Manual fix application'
      ],
      limitations: [
        'Limited AI models',
        'No priority support',
        'Basic reporting',
        'No auto-completion'
      ]
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      popular: true,
      features: [
        '500 scans per month',
        'Advanced AI analysis',
        '25+ languages supported',
        'Priority email support',
        'Advanced issue detection',
        'Auto-fix suggestions',
        'Code completion for partial projects',
        'GitHub integration',
        'Detailed reports',
        'Custom rules',
        'Fix confidence scoring'
      ],
      limitations: []
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      popular: false,
      features: [
        'Unlimited scans',
        'Premium AI models',
        '50+ languages supported',
        '24/7 phone & email support',
        'Enterprise-grade security',
        'Full project completion',
        'Admin controls & logging',
        'Team collaboration',
        'API access',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager',
        'Custom AI model training'
      ],
      limitations: []
    }
  ];

  const oneTimePlans = [
    {
      name: 'Single Project',
      price: '$299',
      description: 'Complete analysis of one repository',
      features: [
        'Full repository scan',
        'Complete unfinished code',
        'Comprehensive report',
        'All issues identified',
        'AI-generated fixes',
        'Project completion guarantee',
        '60-day support'
      ]
    },
    {
      name: 'Business Audit',
      price: '$1,499',
      description: 'Complete analysis of all business code',
      features: [
        'Multiple repositories',
        'Complete all unfinished projects',
        'Enterprise-grade analysis',
        'Security vulnerability assessment',
        'Performance optimization',
        'Full codebase completion',
        'Admin training & setup',
        'Team training session',
        '120-day support',
        'Dedicated project manager'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get powerful AI-driven code analysis that scales with your needs.
            From individual developers to enterprise teams.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Subscription Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 border rounded-xl p-8 hover:border-yellow-500 transition-all duration-300 ${
                  plan.popular ? 'border-yellow-500 transform scale-105' : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700'
                      : 'border-2 border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Upgrade Now'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* One-Time Plans */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">One-Time Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {oneTimePlans.map((plan, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 px-6 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">What are credits?</h3>
              <p className="text-gray-300">
                Each scan counts as one credit. Larger files may consume additional credits based on complexity and lines of code.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Can I upgrade anytime?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-300">
                We offer a 30-day money-back guarantee for all plans. One-time services have a satisfaction guarantee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Is my code secure?</h3>
              <p className="text-gray-300">
                Yes, we use enterprise-grade encryption and never store your code permanently. All analysis is done in secure, isolated environments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Can you complete unfinished projects?</h3>
              <p className="text-gray-300">
                Yes! Our AI can analyze partial codebases and complete missing functionality, following your existing patterns and architecture.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">What languages do you support?</h3>
              <p className="text-gray-300">
                We support 50+ languages including JavaScript, Python, Java, C++, Go, Rust, PHP, Ruby, Swift, Kotlin, and many more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;