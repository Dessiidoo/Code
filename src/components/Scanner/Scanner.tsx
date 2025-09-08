import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Github, 
  Link2, 
  Play, 
  CheckCircle, 
  AlertCircle,
  Download,
  Copy,
  Zap,
  Settings,
  Save
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Scanner: React.FC = () => {
  const { user, isAdmin } = useAuth();
  const [scanType, setScanType] = useState<'file' | 'paste' | 'github'>('paste');
  const [code, setCode] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [currentScanStep, setCurrentScanStep] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setCode(content || '');
        };
        reader.readAsText(file);
      }
    } catch (error) {
      console.error('File upload error:', error);
    }
  };

  const handleScan = async () => {
    try {
      setScanning(true);
      setScanProgress(0);
      setCurrentScanStep('Starting analysis...');
      
      let codeToAnalyze = '';
      
      if (scanType === 'github' && githubUrl) {
        codeToAnalyze = `// GitHub Repository: ${githubUrl}\n// Demo analysis for repository`;
      } else if (selectedFile) {
        codeToAnalyze = code;
      } else {
        codeToAnalyze = code;
      }

      if (!codeToAnalyze.trim()) {
        throw new Error('No code provided for analysis');
      }

      // Simulate progress
      const steps = [
        'Parsing code structure...',
        'Analyzing syntax patterns...',
        'Detecting issues...',
        'Generating fixes...',
        'Completing analysis...'
      ];

      for (let i = 0; i < steps.length; i++) {
        setCurrentScanStep(steps[i]);
        setScanProgress((i + 1) / steps.length * 100);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Generate mock results for demo
      const mockIssues = [
        {
          id: 'issue_1',
          type: 'warning' as const,
          severity: 'medium' as const,
          line: 1,
          column: 1,
          message: 'Consider using const instead of var',
          rule: 'prefer-const',
          suggestion: 'Use const for variables that are not reassigned'
        },
        {
          id: 'issue_2',
          type: 'error' as const,
          severity: 'high' as const,
          line: 5,
          column: 10,
          message: 'Potential null reference',
          rule: 'null-check',
          suggestion: 'Add null checking before accessing properties'
        }
      ];

      const mockFixes = [
        {
          id: 'fix_1',
          issueId: 'issue_1',
          description: 'Replace var with const',
          originalCode: 'var x = 5;',
          fixedCode: 'const x = 5;',
          confidence: 95
        },
        {
          id: 'fix_2',
          issueId: 'issue_2',
          description: 'Add null check',
          originalCode: 'user.name',
          fixedCode: 'user?.name || "Unknown"',
          confidence: 88
        }
      ];

      setScanResult({
        id: Date.now().toString(),
        fileName: selectedFile?.name || 'code-snippet.js',
        language: 'javascript',
        scanDate: new Date().toISOString(),
        status: 'completed',
        creditsUsed: 5,
        issues: mockIssues,
        fixes: mockFixes,
        securityIssues: []
      });

    } catch (error) {
      console.error('Scan failed:', error);
      setScanResult({
        status: 'failed',
        error: error instanceof Error ? error.message : 'Scan failed. Please try again.'
      });
    } finally {
      setScanning(false);
      setScanProgress(0);
      setCurrentScanStep('');
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-400 bg-red-900/20 border-red-800';
      case 'medium':
        return 'text-yellow-400 bg-yellow-900/20 border-yellow-800';
      case 'low':
        return 'text-blue-400 bg-blue-900/20 border-blue-800';
      default:
        return 'text-gray-400 bg-gray-900/20 border-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">AI Code Scanner</h1>
          <p className="text-gray-400">
            Upload your code, paste a snippet, or connect to GitHub for instant AI-powered analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scanner Input */}
          <div className="space-y-6">
            {/* Scan Type Selection */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Choose Scan Type</h2>
              <div className="flex space-x-4">
                <button
                  onClick={() => setScanType('paste')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                    scanType === 'paste'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                      : 'border border-gray-600 text-gray-300 hover:border-yellow-500'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Paste Code</span>
                </button>
                <button
                  onClick={() => setScanType('file')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                    scanType === 'file'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                      : 'border border-gray-600 text-gray-300 hover:border-yellow-500'
                  }`}
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload File</span>
                </button>
                <button
                  onClick={() => setScanType('github')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 ${
                    scanType === 'github'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                      : 'border border-gray-600 text-gray-300 hover:border-yellow-500'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              {scanType === 'paste' && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Paste Your Code</h3>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Paste your code here..."
                    className="w-full h-64 p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none font-mono"
                  />
                </div>
              )}

              {scanType === 'file' && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Upload Code File</h3>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-yellow-500 transition-colors duration-300">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">
                      {selectedFile ? selectedFile.name : 'Drag and drop your code file here, or click to browse'}
                    </p>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept=".js,.ts,.py,.java,.cpp,.c,.cs,.php,.rb,.go,.rs,.swift"
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-6 py-2 bg-yellow-500 text-black font-medium rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors duration-300"
                    >
                      Choose File
                    </label>
                  </div>
                </div>
              )}

              {scanType === 'github' && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">GitHub Repository</h3>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Link2 className="h-5 w-5 text-yellow-500" />
                    </div>
                    <input
                      type="url"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      placeholder="https://github.com/username/repository"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handleScan}
                disabled={scanning || (!code && !selectedFile && !githubUrl)}
                className="w-full mt-6 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium rounded-lg hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {scanning ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                    <div className="flex flex-col items-center">
                      <span>{currentScanStep}</span>
                      <div className="w-32 bg-black/20 rounded-full h-1 mt-1">
                        <div 
                          className="bg-black h-1 rounded-full transition-all duration-300"
                          style={{ width: `${scanProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Start AI Scan</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {scanResult && scanResult.status !== 'failed' ? (
              <>
                {/* Scan Summary */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Scan Results</h3>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">Completed</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">
                        {scanResult.issues?.filter((i: any) => i.type === 'error').length || 0}
                      </div>
                      <div className="text-sm text-gray-400">Errors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {scanResult.issues?.filter((i: any) => i.type === 'warning').length || 0}
                      </div>
                      <div className="text-sm text-gray-400">Warnings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {scanResult.issues?.filter((i: any) => i.type === 'info').length || 0}
                      </div>
                      <div className="text-sm text-gray-400">Info</div>
                    </div>
                  </div>
                </div>

                {/* Issues & Fixes */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Issues & AI Fixes</h3>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 px-3 py-1 bg-yellow-500 text-black text-sm rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                        <Download className="w-4 h-4" />
                        <span>Export</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {scanResult.issues?.map((issue: any, index: number) => {
                      const fix = scanResult.fixes?.find((f: any) => f.issueId === issue.id);
                      return (
                        <div
                          key={issue.id}
                          className="border border-gray-600 rounded-lg overflow-hidden hover:border-yellow-500 transition-colors duration-300"
                        >
                          <div className="p-4 bg-gray-800/50">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                {getTypeIcon(issue.type)}
                                <span className="font-medium text-white">{issue.message}</span>
                              </div>
                              <div className={`px-2 py-1 text-xs rounded-full border ${getSeverityColor(issue.severity)}`}>
                                {issue.severity}
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span>Line {issue.line}:{issue.column}</span>
                              <span>Rule: {issue.rule}</span>
                            </div>
                          </div>
                          
                          {fix && (
                            <div className="border-t border-gray-600 p-4 bg-gray-900/30">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium text-yellow-400 flex items-center space-x-2">
                                  <Zap className="w-4 h-4" />
                                  <span>AI Suggested Fix ({fix.confidence}% confidence)</span>
                                </h4>
                                <button className="px-3 py-1 text-sm bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all duration-300">
                                  Apply Fix
                                </button>
                              </div>
                              <p className="text-gray-300 text-sm mb-3">{fix.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-red-400 text-sm font-medium mb-2">Before:</h5>
                                  <pre className="bg-red-900/20 border border-red-800 rounded p-2 text-sm text-red-300 overflow-x-auto">
                                    <code>{fix.originalCode}</code>
                                  </pre>
                                </div>
                                <div>
                                  <h5 className="text-green-400 text-sm font-medium mb-2">After:</h5>
                                  <pre className="bg-green-900/20 border border-green-800 rounded p-2 text-sm text-green-300 overflow-x-auto">
                                    <code>{fix.fixedCode}</code>
                                  </pre>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : scanResult && scanResult.status === 'failed' ? (
              <div className="bg-gradient-to-br from-red-800 to-red-900 border border-red-600 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-semibold text-white">Scan Failed</h3>
                </div>
                <p className="text-red-200">{scanResult.error}</p>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ready to Scan</h3>
                <p className="text-gray-400">
                  Upload a file, paste your code, or connect to GitHub to start the AI analysis.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
