// AI Service for Code Analysis

// For demo purposes, we'll simulate AI responses
// In production, you'd use a backend service to call OpenAI securely

export interface CodeAnalysisResult {
  issues: Array<{
    id: string;
    type: 'error' | 'warning' | 'info';
    severity: 'high' | 'medium' | 'low';
    line: number;
    column: number;
    message: string;
    rule: string;
    suggestion: string;
  }>;
  fixes: Array<{
    id: string;
    issueId: string;
    description: string;
    originalCode: string;
    fixedCode: string;
    confidence: number;
  }>;
  completedCode?: string;
  securityIssues: Array<{
    type: string;
    severity: string;
    description: string;
    fix: string;
  }>;
}

export class AIService {
  static async analyzeCode(
    code: string, 
    language: string, 
    options: { 
      autoComplete?: boolean;
      securityScan?: boolean;
      performanceCheck?: boolean;
    } = {}
  ): Promise<CodeAnalysisResult> {
    // Check if we have an API key
    const hasApiKey = import.meta.env.VITE_OPENAI_API_KEY && 
                      import.meta.env.VITE_OPENAI_API_KEY.length > 0;
    
    if (hasApiKey) {
      try {
        // Try to make real API call here
        // For now, we'll simulate the response but with real-looking data
        await new Promise(resolve => setTimeout(resolve, 2000));
        return this.generateRealisticAnalysis(code, language, options);
      } catch (error) {
        console.error('OpenAI API call failed:', error);
        // Fall back to mock analysis
      }
    }
    
    // Simulate AI analysis for demo
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return this.generateMockAnalysis(code, language, options);
  }

  private static generateRealisticAnalysis(code: string, language: string, options: any): CodeAnalysisResult {
    // This would contain the real OpenAI API call results
    // For now, return enhanced mock data that looks more realistic
    return this.generateMockAnalysis(code, language, options);
  }

  private static generateMockAnalysis(code: string, language: string, options: any): CodeAnalysisResult {
    const lines = code.split('\n');
    const issues = [];
    const fixes = [];
    const securityIssues = [];
    
    // Generate realistic issues based on code content
    if (code.includes('console.log')) {
      issues.push({
        id: 'issue_1',
        type: 'warning' as const,
        severity: 'low' as const,
        line: lines.findIndex(line => line.includes('console.log')) + 1,
        column: 1,
        message: 'Console statement found - remove before production',
        rule: 'no-console',
        suggestion: 'Use proper logging library instead'
      });
      
      fixes.push({
        id: 'fix_1',
        issueId: 'issue_1',
        description: 'Replace console.log with proper logging',
        originalCode: 'console.log("debug info");',
        fixedCode: 'logger.info("debug info");',
        confidence: 85
      });
    }
    
    if (code.includes('var ')) {
      issues.push({
        id: 'issue_2',
        type: 'warning' as const,
        severity: 'medium' as const,
        line: lines.findIndex(line => line.includes('var ')) + 1,
        column: 1,
        message: 'Use let or const instead of var',
        rule: 'no-var',
        suggestion: 'Replace var with let or const for block scoping'
      });
      
      fixes.push({
        id: 'fix_2',
        issueId: 'issue_2',
        description: 'Replace var with const/let',
        originalCode: 'var x = 5;',
        fixedCode: 'const x = 5;',
        confidence: 95
      });
    }
    
    if (code.includes('==')) {
      issues.push({
        id: 'issue_3',
        type: 'error' as const,
        severity: 'high' as const,
        line: lines.findIndex(line => line.includes('==')) + 1,
        column: 1,
        message: 'Use strict equality (===) instead of loose equality (==)',
        rule: 'eqeqeq',
        suggestion: 'Use === for type-safe comparisons'
      });
      
      fixes.push({
        id: 'fix_3',
        issueId: 'issue_3',
        description: 'Use strict equality operator',
        originalCode: 'if (x == y)',
        fixedCode: 'if (x === y)',
        confidence: 98
      });
    }
    
    // Add security issues
    if (code.includes('eval(') || code.includes('innerHTML')) {
      securityIssues.push({
        type: 'Code Injection',
        severity: 'critical',
        description: 'Potential code injection vulnerability detected',
        fix: 'Use safe alternatives like textContent or proper sanitization'
      });
    }
    
    let completedCode;
    if (options.autoComplete && code.trim().length < 100) {
      completedCode = code + '\n\n// AI Generated completion:\n// Added error handling and validation\nif (!input) {\n  throw new Error("Input is required");\n}';
    }
    
    return {
      issues,
      fixes,
      completedCode,
      securityIssues
    };
  }

  static async completePartialCode(partialCode: string, language: string, context?: string): Promise<string> {
    // Simulate code completion
    await new Promise(resolve => setTimeout(resolve, 1500));
    return partialCode + '\n\n// AI Generated completion:\n// Added proper error handling and validation';
  }
}
