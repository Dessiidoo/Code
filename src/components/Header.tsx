import React from 'react';
import { LogOut, Settings, User, Shield } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { user, logout, isAdmin } = useAuth();

  if (!user) return null;

  return (
    <header className="bg-gradient-to-r from-black to-gray-900 border-b-2 border-gold-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              CodeScanner AI
            </h1>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === 'dashboard'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold'
                    : 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentPage('scanner')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === 'scanner'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold'
                    : 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800'
                }`}
              >
                Scanner
              </button>
              <button
                onClick={() => setCurrentPage('history')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === 'history'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold'
                    : 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800'
                }`}
              >
                History
              </button>
              <button
                onClick={() => setCurrentPage('pricing')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === 'pricing'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold'
                    : 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => setCurrentPage('setup')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === 'setup'
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold'
                    : 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800'
                }`}
              >
                Setup
              </button>
              {isAdmin && (
                <button
                  onClick={() => setCurrentPage('admin')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-1 ${
                    currentPage === 'admin'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold'
                      : 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800'
                  }`}
                >
                  <Shield size={16} />
                  <span>Admin</span>
                </button>
              )}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-yellow-400 text-sm">
              Credits: {user.creditsUsed}/{user.creditsLimit}
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 p-2 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <User size={20} />
                <span className="hidden sm:block">{user.name}</span>
              </button>
              <div className="absolute right-0 top-12 w-48 bg-gray-900 border border-yellow-500 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 border-b border-gray-700">
                  <p className="text-yellow-400 font-semibold">{user.name}</p>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-yellow-500 text-black text-xs rounded-full font-semibold">
                    {user.plan.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => setCurrentPage('settings')}
                  className="w-full flex items-center space-x-2 px-4 py-3 text-yellow-400 hover:text-yellow-300 hover:bg-gray-800 transition-colors duration-300"
                >
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                <button
                  onClick={logout}
                  className="w-full flex items-center space-x-2 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-gray-800 transition-colors duration-300"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;