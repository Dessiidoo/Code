import React, { useState } from 'react';
import { 
  Calendar, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Download,
  Eye,
  Filter,
  Search
} from 'lucide-react';

const History: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const scanHistory = [
    {
      id: '1',
      fileName: 'authentication.js',
      language: 'JavaScript',
      scanDate: '2024-12-21T10:30:00Z',
      status: 'completed',
      issues: 12,
      fixes: 10,
      creditsUsed: 25,
      severity: { high: 2, medium: 5, low: 5 }
    },
    {
      id: '2',
      fileName: 'user-service.py',
      language: 'Python',
      scanDate: '2024-12-21T09:15:00Z',
      status: 'completed',
      issues: 8,
      fixes: 8,
      creditsUsed: 20,
      severity: { high: 1, medium: 3, low: 4 }
    },
    {
      id: '3',
      fileName: 'main.cpp',
      language: 'C++',
      scanDate: '2024-12-20T16:45:00Z',
      status: 'completed',
      issues: 15,
      fixes: 12,
      creditsUsed: 35,
      severity: { high: 3, medium: 7, low: 5 }
    },
    {
      id: '4',
      fileName: 'package.json',
      language: 'JSON',
      scanDate: '2024-12-20T14:20:00Z',
      status: 'completed',
      issues: 3,
      fixes: 3,
      creditsUsed: 10,
      severity: { high: 0, medium: 1, low: 2 }
    },
    {
      id: '5',
      fileName: 'styles.css',
      language: 'CSS',
      scanDate: '2024-12-19T11:30:00Z',
      status: 'completed',
      issues: 5,
      fixes: 4,
      creditsUsed: 15,
      severity: { high: 0, medium: 2, low: 3 }
    },
    {
      id: '6',
      fileName: 'database.sql',
      language: 'SQL',
      scanDate: '2024-12-19T08:45:00Z',
      status: 'failed',
      issues: 0,
      fixes: 0,
      creditsUsed: 5,
      severity: { high: 0, medium: 0, low: 0 }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-900/20 border-green-800';
      case 'processing':
        return 'text-yellow-400 bg-yellow-900/20 border-yellow-800';
      case 'failed':
        return 'text-red-400 bg-red-900/20 border-red-800';
      default:
        return 'text-gray-400 bg-gray-900/20 border-gray-800';
    }
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-blue-500',
      'C++': 'bg-purple-500',
      'JSON': 'bg-green-500',
      'CSS': 'bg-pink-500',
      'SQL': 'bg-orange-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredHistory = scanHistory.filter(scan => {
    const matchesSearch = scan.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scan.language.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || scan.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Scan History</h1>
          <p className="text-gray-400">
            View and manage all your previous code scans and their results.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by filename or language..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="processing">Processing</option>
                <option value="failed">Failed</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="issues">Sort by Issues</option>
              </select>
            </div>
          </div>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {filteredHistory.map((scan) => (
            <div
              key={scan.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg">
                    <FileText className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{scan.fileName}</h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className={`px-2 py-1 ${getLanguageColor(scan.language)} text-white text-xs rounded-full font-medium`}>
                        {scan.language}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(scan.status)}`}>
                        {scan.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(scan.scanDate)}</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {scan.creditsUsed} credits used
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Issues Found</span>
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{scan.issues}</div>
                  <div className="flex space-x-4 text-xs">
                    <span className="text-red-400">{scan.severity.high} High</span>
                    <span className="text-yellow-400">{scan.severity.medium} Med</span>
                    <span className="text-blue-400">{scan.severity.low} Low</span>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Fixes Applied</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{scan.fixes}</div>
                  <div className="text-xs text-gray-400">
                    {scan.issues > 0 ? Math.round((scan.fixes / scan.issues) * 100) : 0}% success rate
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Quality Score</span>
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {scan.issues === 0 ? 100 : Math.max(0, 100 - (scan.issues * 5))}
                  </div>
                  <div className="text-xs text-gray-400">
                    Based on issues found
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-colors duration-300">
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                  </button>
                </div>
                <div className="text-gray-400 text-sm">
                  Scan ID: {scan.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHistory.length === 0 && (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-12 text-center">
            <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No scans found</h3>
            <p className="text-gray-400">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Start your first code scan to see results here.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;