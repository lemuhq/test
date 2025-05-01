'use client';

import { FiVideo, FiFileText, FiTrendingUp, FiStar, FiClock } from 'react-icons/fi';

export default function ContentPerformance() {
  // Mock data
  const contentData = {
    topPerformingContent: [
      { 
        id: 1, 
        title: 'Renewable Energy Fundamentals', 
        type: 'course',
        engagement: 87,
        completionRate: 76,
        rating: 4.8,
        studentsCount: 2156
      },
      { 
        id: 2, 
        title: 'Solar Panel Installation', 
        type: 'video',
        engagement: 92,
        completionRate: 84,
        rating: 4.9,
        studentsCount: 1876
      },
      { 
        id: 3, 
        title: 'Wind Energy Systems', 
        type: 'course',
        engagement: 82,
        completionRate: 71,
        rating: 4.6,
        studentsCount: 1542
      },
      { 
        id: 4, 
        title: 'Sustainable Home Design', 
        type: 'interactive',
        engagement: 90,
        completionRate: 79,
        rating: 4.7,
        studentsCount: 1355
      },
      { 
        id: 5, 
        title: 'Climate Science Data Analysis', 
        type: 'course',
        engagement: 78,
        completionRate: 65,
        rating: 4.5,
        studentsCount: 1287
      }
    ],
    contentTypeEngagement: [
      { type: 'Video Lessons', engagement: 86, completionRate: 78 },
      { type: 'Reading Materials', engagement: 72, completionRate: 64 },
      { type: 'Interactive Exercises', engagement: 91, completionRate: 82 },
      { type: 'Quizzes & Assessments', engagement: 84, completionRate: 88 },
      { type: 'Discussion Forums', engagement: 59, completionRate: 41 }
    ],
    videoStats: {
      totalVideos: 324,
      averageWatchTime: '12:45',
      completionRate: 76,
      dropoffPoints: [
        { point: '0-25%', percentage: 8 },
        { point: '26-50%', percentage: 12 },
        { point: '51-75%', percentage: 15 },
        { point: '76-99%', percentage: 13 },
        { point: 'Completed', percentage: 52 }
      ]
    },
    readingStats: {
      totalArticles: 186,
      averageReadTime: '8:30',
      completionRate: 64,
      topPerformers: [
        { title: 'Renewable Energy Policy Trends', readTime: '12m', completionRate: 78 },
        { title: 'Building Materials Guide', readTime: '15m', completionRate: 71 },
        { title: 'Carbon Footprint Calculation', readTime: '10m', completionRate: 83 }
      ]
    },
    interactiveStats: {
      totalInteractives: 98,
      averageCompletionTime: '14:20',
      completionRate: 82,
      engagement: 91
    }
  };

  // Helper function to determine content type icon
  const getContentTypeIcon = (type: string) => {
    switch(type) {
      case 'video':
        return <FiVideo className="w-4 h-4 text-purple-500" />;
      case 'course':
        return <FiFileText className="w-4 h-4 text-blue-500" />;
      case 'interactive':
        return <FiTrendingUp className="w-4 h-4 text-green-500" />;
      default:
        return <FiFileText className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video Content */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Video Content</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{contentData.videoStats.totalVideos}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {contentData.videoStats.completionRate}% avg completion rate
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiVideo className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Reading Content */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Reading Materials</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{contentData.readingStats.totalArticles}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {contentData.readingStats.completionRate}% avg completion rate
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiFileText className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Interactive Content */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Interactive Exercises</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{contentData.interactiveStats.totalInteractives}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {contentData.interactiveStats.engagement}% engagement rate
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiTrendingUp className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-black">Top Performing Content</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completion
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contentData.topPerformingContent.map((content) => (
                <tr key={content.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{content.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getContentTypeIcon(content.type)}
                      <span className="ml-2 text-sm text-gray-500 capitalize">{content.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{content.studentsCount.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2">{content.engagement}%</span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-blue-500 rounded-full" 
                          style={{ width: `${content.engagement}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2">{content.completionRate}%</span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-green-500 rounded-full" 
                          style={{ width: `${content.completionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2">{content.rating}</span>
                      <FiStar className="w-4 h-4 text-yellow-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Content Type Engagement */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">Content Type Engagement</h3>
        <div className="space-y-6">
          {contentData.contentTypeEngagement.map((type) => (
            <div key={type.type}>
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-700">{type.type}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-500">Engagement</span>
                    <span className="text-xs font-medium text-gray-700">{type.engagement}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${type.engagement}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-500">Completion</span>
                    <span className="text-xs font-medium text-gray-700">{type.completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${type.completionRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Performance & Reading Materials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video Dropoff Points */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-2 text-black">Video Watch Completion</h3>
          <p className="text-sm text-gray-500 mb-6">Average watch time: {contentData.videoStats.averageWatchTime}</p>
          
          <div className="space-y-4">
            {contentData.videoStats.dropoffPoints.map((point) => (
              <div key={point.point}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{point.point}</span>
                  <span className="text-sm font-medium text-gray-500">{point.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full ${point.point === 'Completed' ? 'bg-green-500' : 'bg-purple-400'}`}
                    style={{ width: `${point.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Reading Materials */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-2 text-black">Top Reading Materials</h3>
          <p className="text-sm text-gray-500 mb-6">Average read time: {contentData.readingStats.averageReadTime}</p>
          
          <div className="space-y-6">
            {contentData.readingStats.topPerformers.map((article, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <FiFileText className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{article.title}</h4>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center mr-4">
                      <FiClock className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-2">Completion:</span>
                      <div className="w-20 h-1.5 bg-gray-200 rounded-full">
                        <div 
                          className="h-1.5 bg-green-500 rounded-full" 
                          style={{ width: `${article.completionRate}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">{article.completionRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 