import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get('/api/leaderboard');
      setLeaderboardData(response.data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-yellow-500" size={24} />;
      case 2:
        return <Medal className="text-gray-400" size={24} />;
      case 3:
        return <Award className="text-orange-500" size={24} />;
      default:
        return <span className="text-gray-600 font-bold">{rank}</span>;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300';
      case 2:
        return 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300';
      case 3:
        return 'bg-gradient-to-r from-orange-100 to-orange-200 border-orange-300';
      default:
        return 'bg-white border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
            <Trophy className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Leaderboard</h1>
            <p className="text-gray-600">Top performing interns this month</p>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Trophy className="text-yellow-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Participants</p>
              <p className="text-lg font-semibold text-gray-800">{leaderboardData.length}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Donations</p>
              <p className="text-lg font-semibold text-gray-800">
                ${leaderboardData.reduce((sum, intern) => sum + intern.donations, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Award className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Average per Intern</p>
              <p className="text-lg font-semibold text-gray-800">
                ${Math.round(leaderboardData.reduce((sum, intern) => sum + intern.donations, 0) / leaderboardData.length)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Top Interns</h2>
        <div className="space-y-4">
          {leaderboardData.map((intern, index) => (
            <div
              key={intern.rank}
              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all hover:shadow-md ${getRankColor(intern.rank)}`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm">
                  {getRankIcon(intern.rank)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{intern.name}</h3>
                  <p className="text-sm text-gray-600">Rank #{intern.rank}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">${intern.donations.toLocaleString()}</p>
                <p className="text-sm text-gray-600">donations raised</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="card mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Achievement Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Trophy className="text-white" size={32} />
            </div>
            <h3 className="font-semibold text-yellow-800">Top Performer</h3>
            <p className="text-sm text-yellow-700">Highest donation amount</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="font-semibold text-blue-800">Rising Star</h3>
            <p className="text-sm text-blue-700">Consistent performance</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="font-semibold text-green-800">Team Player</h3>
            <p className="text-sm text-green-700">Great collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 