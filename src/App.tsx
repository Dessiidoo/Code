import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/Landing/LandingPage';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Dashboard from './components/Dashboard/Dashboard';
import Scanner from './components/Scanner/Scanner';
import History from './components/History/History';
import Pricing from './components/Pricing/Pricing';
import ApiKeySetup from './components/Setup/ApiKeySetup';
import Header from './components/Layout/Header';
import { useAuth } from './contexts/AuthContext';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  if (!user) {
    return (
      <div>
        {authMode === 'login' ? (
          <LoginForm switchToRegister={() => setAuthMode('register')} />
        ) : (
          <RegisterForm switchToLogin={() => setAuthMode('login')} />
        )}
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'scanner':
        return <Scanner />;
      case 'history':
        return <History />;
      case 'pricing':
        return <Pricing />;
      case 'setup':
        return <ApiKeySetup />;
      case 'admin':
        return <Dashboard />; // Admin dashboard
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      
      {/* Credits Protection Notice */}
      <div className="fixed bottom-4 right-4 bg-green-900/20 border border-green-600 rounded-lg p-3 max-w-sm">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Credits Protected</span>
        </div>
        <p className="text-green-300 text-xs mt-1">
          Demo mode active - No API calls being made
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;