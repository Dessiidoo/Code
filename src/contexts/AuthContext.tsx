import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';
import { mockUsers } from '../utils/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    
    // Check for admin login first
    if (email === 'admin@codescanner.com' && password === 'password') {
      const adminUser: User = {
        id: 'admin-1',
        email: 'admin@codescanner.com',
        name: 'Admin User',
        plan: 'enterprise',
        creditsUsed: 0,
        creditsLimit: 999999,
        createdAt: new Date().toISOString()
      };
      setUser(adminUser);
      return true;
    }
    
    // Check for regular users
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password') {
      setUser(foundUser);
      return true;
    }
    
    // Allow any email with password 'password' for demo
    if (password === 'password') {
      const demoUser: User = {
        id: Date.now().toString(),
        email: email,
        name: email.split('@')[0],
        plan: 'free',
        creditsUsed: 0,
        creditsLimit: 100,
        createdAt: new Date().toISOString()
      };
      setUser(demoUser);
      return true;
    }
    
    return false;
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      plan: 'free',
      creditsUsed: 0,
      creditsLimit: 100,
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = user?.email === 'admin@codescanner.com';

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};