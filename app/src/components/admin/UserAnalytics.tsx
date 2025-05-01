'use client';

import { useState } from 'react';
import { FiUsers, FiUserPlus, FiUserCheck, FiMapPin, FiBarChart2 } from 'react-icons/fi';

export default function UserAnalytics() {
  const [timeRange, setTimeRange] = useState('month');
  
  // Mock data
  const userData = {
    totalUsers: 12483,
    activeUsers: {
      daily: 2345,
      weekly: 4128,
      monthly: 5641
    },
    newUsers: {
      daily: 56,
      weekly: 176,
      monthly: 342
    },
    userRetention: 76,
    userDemographics: [
      { location: 'United States', count: 4235, percentage: 34 },
      { location: 'India', count: 1876, percentage: 15 },
      { location: 'United Kingdom', count: 1247, percentage: 10 },
      { location: 'Germany', count: 986, percentage: 8 },
      { location: 'Canada', count: 748, percentage: 6 },
      { location: 'Others', count: 3391, percentage: 27 }
    ],
    userTiers: [
      { tier: 'Tier 1', count: 5618, percentage: 45 },
      { tier: 'Tier 2', count: 3745, percentage: 30 },
      { tier: 'Tier 3', count: 1872, percentage: 15 },
      { tier: 'Tier 4', count: 1248, percentage: 10 }
    ],
    userActivity: [
      { date: '2023-06-01', activeUsers: 4870 },
      { date: '2023-07-01', activeUsers: 5120 },
      { date: '2023-08-01', activeUsers: 5340 },
      { date: '2023-09-01', activeUsers: 5480 },
      { date: '2023-10-01', activeUsers: 5520 },
      { date: '2023-11-01', activeUsers: 5641 }
    ]
  };

  // Helper to get the current data based on selected time range
  const getTimeRangeData = (key: 'activeUsers' | 'newUsers') => {
    // Map the timeRange state value to the corresponding key in the userData object
    const timeRangeMapping: Record<string, keyof typeof userData.activeUsers> = {
      'daily': 'daily',
      'weekly': 'weekly',
      'month': 'monthly', // This maps 'month' state value to 'monthly' key
      'monthly': 'monthly' // Also handle 'monthly' timeRange value
    };
    
    const mappedTimeRange = timeRangeMapping[timeRange];
    return userData[key][mappedTimeRange];
  };

  return (
    <div className="space-y-8">
      {/* Time Range Selector */}
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-md shadow-sm bg-white">
          <button
            type="button"
            onClick={() => setTimeRange('daily')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              timeRange === 'daily' 
                ? 'bg-green-50 text-green-700' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Daily
          </button>
          <button
            type="button"
            onClick={() => setTimeRange('weekly')}
            className={`px-4 py-2 text-sm font-medium ${
              timeRange === 'weekly' 
                ? 'bg-green-50 text-green-700' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Weekly
          </button>
          <button
            type="button"
            onClick={() => setTimeRange('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              timeRange === 'monthly' 
                ? 'bg-green-50 text-green-700' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Users</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{userData.totalUsers.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiUsers className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Active Users</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{getTimeRangeData('activeUsers').toLocaleString()}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {Math.round((getTimeRangeData('activeUsers') / userData.totalUsers) * 100)}% of total users
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiUserCheck className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* New Users */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">New Users</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{getTimeRangeData('newUsers').toLocaleString()}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {Math.round((getTimeRangeData('newUsers') / userData.totalUsers) * 100)}% growth rate
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiUserPlus className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Demographics and User Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Demographics Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiMapPin className="mr-2 text-black" /> User Demographics
          </h3>
          <div className="space-y-4">
            {userData.userDemographics.map((item) => (
              <div key={item.location}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.location}</span>
                  <span className="text-sm font-medium text-gray-500">{item.count.toLocaleString()} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Tiers */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiBarChart2 className="mr-2 text-black" /> User Tiers
          </h3>
          <div className="space-y-4">
            {userData.userTiers.map((item) => (
              <div key={item.tier}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-black">{item.tier}</span>
                  <span className="text-sm font-medium text-black">{item.count.toLocaleString()} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Activity Graph */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">User Activity Over Time</h3>
        <div className="h-64 relative">
          {/* This would be a real chart in a production app, using a library like recharts */}
          <div className="flex items-end h-full justify-between gap-4">
            {userData.userActivity.map((item) => (
              <div key={item.date} className="flex flex-col items-center">
                <div 
                  className="bg-green-500 rounded-t w-12"
                  style={{ 
                    height: `${(item.activeUsers / userData.userActivity[userData.userActivity.length - 1].activeUsers) * 200}px`
                  }}
                ></div>
                <span className="text-xs mt-2 text-gray-500">
                  {new Date(item.date).toLocaleDateString('en-US', { month: 'short' })}
                </span>
              </div>
            ))}
          </div>
          {/* Y-axis labels would go here */}
        </div>
      </div>

      {/* User Retention */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">User Retention</h3>
        <div className="flex items-center justify-center">
          <div className="relative h-40 w-40">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="text-gray-200" 
                strokeWidth="10" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50" 
              />
              <circle 
                className="text-green-500" 
                strokeWidth="10" 
                strokeLinecap="round" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50" 
                strokeDasharray={`${userData.userRetention * 2.51} 251.2`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-700">{userData.userRetention}%</span>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-gray-600">Monthly User Retention Rate</p>
      </div>
    </div>
  );
} 