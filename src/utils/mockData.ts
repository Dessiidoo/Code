import { User, ScanResult, Issue, Fix, Subscription } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    plan: 'pro',
    creditsUsed: 150,
    creditsLimit: 1000,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    email: 'jane@example.com',
    name: 'Jane Smith',
    plan: 'enterprise',
    creditsUsed: 500,
    creditsLimit: 10000,
    createdAt: '2024-01-10'
  }
];

export const mockIssues: Issue[] = [
  {
    id: '1',
    type: 'error',
    severity: 'high',
    line: 25,
    column: 10,
    message: 'Undefined variable "userEmail"',
    rule: 'no-undef'
  },
  {
    id: '2',
    type: 'warning',
    severity: 'medium',
    line: 42,
    column: 5,
    message: 'Missing error handling for async operation',
    rule: 'no-unhandled-promise'
  },
  {
    id: '3',
    type: 'info',
    severity: 'low',
    line: 15,
    column: 20,
    message: 'Consider using const instead of let',
    rule: 'prefer-const'
  }
];

export const mockFixes: Fix[] = [
  {
    id: '1',
    issueId: '1',
    description: 'Initialize userEmail variable',
    originalCode: 'console.log(userEmail);',
    fixedCode: 'const userEmail = user.email;\nconsole.log(userEmail);',
    applied: false
  },
  {
    id: '2',
    issueId: '2',
    description: 'Add try-catch block for async operation',
    originalCode: 'await fetchUserData();',
    fixedCode: 'try {\n  await fetchUserData();\n} catch (error) {\n  console.error("Failed to fetch user data:", error);\n}',
    applied: false
  }
];

export const mockScanResults: ScanResult[] = [
  {
    id: '1',
    userId: '1',
    fileName: 'app.js',
    language: 'javascript',
    issues: mockIssues,
    fixes: mockFixes,
    scanDate: '2024-12-21T10:30:00Z',
    status: 'completed',
    creditsUsed: 25
  }
];