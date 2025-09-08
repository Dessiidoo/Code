import React from 'react';
import { 
  Activity, 
  FileCheck, 
  AlertTriangle, 
  TrendingUp, 
  Code2, 
  Zap,
  Calendar,
  Users
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      label: 'Total Scans',
      value: '1,247',
      change: '+12%',
      icon: FileCheck,
      color: 'from-green-500 to-green-600'
    },
    {
      label: 'Issues Found',
      value: '3,892',
      change: '-8%',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600'
    },
    {
      label: 'Fixes Applied',
      value: '3,156',
      change: '+15%',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      label: 'Languages Supported',
      value: '50+',
      change: '+5',
      icon: Code2,
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const recentScans = [
    { name: 'authentication.js', issues: 12, fixes: 10, date: '2024-12-21', status: 'completed' },
    { name: 'user-service.py', issues: 8, fixes: 8, date: '2024-12-21', status: 'completed' },
    { name: 'main.cpp', issues: 15, fixes: 12, date: '2024-12-20', status: 'completed' },
    { name: 'package.json', issues: 3, fixes: 3, date: '2024-12-20', status: 'completed' },
    { name: 'styles.css', issues: 5, fixes: 4, date: '2024-12-19', status: 'completed' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-400">
            Here's what's happening with your code analysis today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-sm text-green-400">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Scans */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Scans</h2>
                <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-300">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentScans.map((scan, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg">
                        <Code2 className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{scan.name}</p>
                        <p className="text-gray-400 text-sm">
                          {scan.issues} issues • {scan.fixes} fixes applied
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2 py-1 bg-green-500 text-black text-xs rounded-full font-medium">
                          {scan.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{scan.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Usage */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300">
                  <FileCheck className="w-4 h-4" />
                  <span>New Scan</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300">
                  <Activity className="w-4 h-4" />
                  <span>View History</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300">
                  <TrendingUp className="w-4 h-4" />
                  <span>Upgrade Plan</span>
                </button>
              </div>
            </div>

            {/* Usage Stats */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Usage This Month</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Credits Used</span>
                    <span className="text-white font-medium">
                      {user?.creditsUsed || 0} / {user?.creditsLimit || 0}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full"
                      style={{ 
                        width: `${((user?.creditsUsed || 0) / (user?.creditsLimit || 1)) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-400">Plan</span>
                    </div>
                    <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded-full font-semibold">
                      {user?.plan?.toUpperCase()}
                    </span>
                  </div>
                  <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-300">
                    Manage Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;