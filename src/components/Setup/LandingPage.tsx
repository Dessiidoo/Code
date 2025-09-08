import React, { useState } from 'react';
import { 
  Code2, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Github,
  FileText,
  Bot,
  Star,
  Users,
  Globe
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms scan your code for bugs, security issues, and performance problems.'
    },
    {
      icon: Zap,
      title: 'Instant Fixes',
      description: 'Get AI-generated solutions with confidence scores. Apply fixes with one click.'
    },
    {
      icon: Github,
      title: 'GitHub Integration',
      description: 'Scan entire repositories directly from GitHub. Support for 50+ programming languages.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security scanning. Find vulnerabilities before they become problems.'
    },
    {
      icon: FileText,
      title: 'Complete Projects',
      description: 'AI can finish partial codebases, following your existing patterns and architecture.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Identify bottlenecks and get suggestions for faster, more efficient code.'
    }
  ];

  const stats = [
    { number: '10M+', label: 'Lines of Code Analyzed' },
    { number: '50+', label: 'Programming Languages' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Developer at TechCorp',
      content: 'CodeScanner AI found critical security vulnerabilities we missed in code review. Saved us weeks of debugging.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      role: 'CTO at StartupXYZ',
      content: 'The AI completion feature helped us finish our MVP 3 weeks ahead of schedule. Incredible technology.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Engineer at DataFlow',
      content: 'Best investment we made this year. The code quality improvements are measurable and significant.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                CodeScanner AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-yellow-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Reviews</a>
              <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                CodeScanner AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered code analysis that finds bugs, suggests fixes, and completes your projects instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to maintain high-quality, secure, and performant code.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Developers</h2>
            <p className="text-xl text-gray-400">See what our users are saying about CodeScanner AI</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Code Quality?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of developers who trust CodeScanner AI to keep their code clean, secure, and performant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-bold text-white">CodeScanner AI</span>
              </div>
              <p className="text-gray-400">
                AI-powered code analysis for modern development teams.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeScanner AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
