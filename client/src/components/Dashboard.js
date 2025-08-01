import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Copy, CheckCircle, Gift, DollarSign, User, Award } from 'lucide-react';

const Dashboard = ({ user }) => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchInternData();
  }, []);

  const fetchInternData = async () => {
    try {
      const response = await axios.get('/api/intern-data');
      setInternData(response.data);
    } catch (error) {
      console.error('Error fetching intern data:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyReferralCode = async () => {
    try {
      await navigator.clipboard.writeText(internData.referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {internData.name}! 👋
        </h1>
        <p className="text-gray-600">Here's your intern portal overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <User className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Intern Name</p>
              <p className="text-lg font-semibold text-gray-800">{internData.name}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Donations</p>
              <p className="text-lg font-semibold text-gray-800">${internData.totalDonations}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Award className="text-purple-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Rewards Unlocked</p>
              <p className="text-lg font-semibold text-gray-800">
                {internData.rewards.filter(r => r.unlocked).length}/{internData.rewards.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Code Section */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Referral Code</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
            <code className="text-lg font-mono text-gray-800">{internData.referralCode}</code>
          </div>
          <button
            onClick={copyReferralCode}
            className="btn btn-primary flex items-center space-x-2"
          >
            {copied ? (
              <>
                <CheckCircle size={18} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Share this code with friends to earn rewards!
        </p>
      </div>

      {/* Rewards Section */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Rewards & Unlockables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {internData.rewards.map((reward) => (
            <div
              key={reward.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                reward.unlocked
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`text-2xl ${reward.unlocked ? 'text-green-600' : 'text-gray-400'}`}>
                  {reward.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${
                    reward.unlocked ? 'text-green-800' : 'text-gray-600'
                  }`}>
                    {reward.name}
                  </h3>
                  <p className={`text-sm ${
                    reward.unlocked ? 'text-green-700' : 'text-gray-500'
                  }`}>
                    {reward.description}
                  </p>
                  <div className="mt-2">
                    {reward.unlocked ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle size={12} className="mr-1" />
                        Unlocked
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        <Gift size={12} className="mr-1" />
                        Locked
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 