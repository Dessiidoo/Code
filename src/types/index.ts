export interface User {
  id: string;
  email: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  creditsUsed: number;
  creditsLimit: number;
  createdAt: string;
}

export interface ScanResult {
  id: string;
  userId: string;
  fileName: string;
  language: string;
  issues: Issue[];
  fixes: Fix[];
  scanDate: string;
  status: 'completed' | 'processing' | 'failed';
  creditsUsed: number;
}

export interface Issue {
  id: string;
  type: 'error' | 'warning' | 'info';
  severity: 'high' | 'medium' | 'low';
  line: number;
  column: number;
  message: string;
  rule: string;
}

export interface Fix {
  id: string;
  issueId: string;
  description: string;
  originalCode: string;
  fixedCode: string;
  applied: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired';
  startDate: string;
  endDate?: string;
  price: number;
}