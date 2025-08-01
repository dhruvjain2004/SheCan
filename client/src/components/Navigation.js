import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Trophy, LogOut, User } from 'lucide-react';

const Navigation = ({ onLogout }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IP</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Intern Portal</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/dashboard')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Home size={18} />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/leaderboard"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/leaderboard')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Trophy size={18} />
              <span>Leaderboard</span>
            </Link>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-red-700 hover:bg-red-50 transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 