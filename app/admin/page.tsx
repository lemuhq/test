'use client';

import { useState } from 'react';

import { 
  FiUsers, FiBook,  FiDollarSign, 
  FiActivity, 
  
} from 'react-icons/fi';

// Dashboard components
import UserAnalytics from '../src/components/admin/UserAnalytics';

import CourseManagement from '../src/components/admin/CourseManagement';
import LearningAnalytics from '../src/components/admin/LearningAnalytics';
import ContentPerformance from '../src/components/admin/ContentPerformance';
import RevenueAnalytics from '../src/components/admin/RevenueAnalytics';
import InstructorAnalytics from '../src/components/admin/InstructorAnalytics';
import PlatformPerformance from '../src/components/admin/PlatformPerformance';
import MarketingAnalytics from '../src/components/admin/MarketingAnalytics';

export default function AdminDashboard() {
 
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for overview cards
  const overviewData = {
    totalUsers: 12483,
    newUsers: 342,
    totalCourses: 87,
    courseCompletions: 2156,
    totalRevenue: 128750,
    monthlyRevenue: 28450,
    avgCompletionRate: 68,
    activeUsers: 5641
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'users':
        return <UserAnalytics />;
      case 'courses':
        return <CourseManagement />;
      case 'learning':
        return <LearningAnalytics />;
      case 'content':
        return <ContentPerformance />;
      case 'revenue':
        return <RevenueAnalytics />;
      case 'instructors':
        return <InstructorAnalytics />;
      case 'platform':
        return <PlatformPerformance />;
      case 'marketing':
        return <MarketingAnalytics />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Users */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Users</p>
                  <h3 className="text-2xl font-bold mt-1 text-black">{overviewData.totalUsers.toLocaleString()}</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <span className="mr-1">↑</span> 
                    <span>{Math.round((overviewData.newUsers / overviewData.totalUsers) * 100)}% this month</span>
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <FiUsers className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Course Completions */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Course Completions</p>
                  <h3 className="text-2xl font-bold mt-1 text-black">{overviewData.courseCompletions.toLocaleString()}</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <span className="mr-1">↑</span> 
                    <span>{overviewData.avgCompletionRate}% completion rate</span>
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-full">
                  <FiBook className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>

            {/* Total Revenue */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
                  <h3 className="text-2xl font-bold mt-1 text-black">${overviewData.totalRevenue.toLocaleString()}</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <span className="mr-1">↑</span> 
                    <span>${overviewData.monthlyRevenue.toLocaleString()} this month</span>
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-full">
                  <FiDollarSign className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </div>

            {/* Active Users */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Active Users</p>
                  <h3 className="text-2xl font-bold mt-1 text-black">{overviewData.activeUsers.toLocaleString()}</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <span className="mr-1">↑</span> 
                    <span>{Math.round((overviewData.activeUsers / overviewData.totalUsers) * 100)}% of total users</span>
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-full">
                  <FiActivity className="w-6 h-6 text-amber-500" />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className=" bg-gray-50">
      {/* Admin Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Admin</span>
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
        </div>
      </header> */}

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Navigation */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-1 flex flex-wrap">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'overview' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'users' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Users
          </button>
          <button 
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'courses' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Courses
          </button>
          <button 
            onClick={() => setActiveTab('learning')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'learning' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Learning Progress
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'content' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Content Performance
          </button>
          <button 
            onClick={() => setActiveTab('revenue')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'revenue' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Revenue
          </button>
          <button 
            onClick={() => setActiveTab('instructors')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'instructors' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Instructors
          </button>
          <button 
            onClick={() => setActiveTab('platform')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'platform' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Platform
          </button>
          <button 
            onClick={() => setActiveTab('marketing')}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${activeTab === 'marketing' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            Marketing
          </button>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Analytics
          </h2>
          {renderContent()}
        </div>
      </div>
    </div>
  );
} 