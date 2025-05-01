'use client';

import { FiClock, FiBarChart2, FiAward, FiAlertCircle } from 'react-icons/fi';

export default function LearningAnalytics() {
  // Mock data
  const learningData = {
    averageCompletionTime: {
      days: 14,
      hours: 22
    },
    moduleCompletionRates: [
      { module: 'Introduction to Sustainability', rate: 94 },
      { module: 'Climate Science Basics', rate: 87 },
      { module: 'Renewable Energy Technologies', rate: 82 },
      { module: 'Sustainable Building Design', rate: 76 },
      { module: 'Environmental Policy', rate: 71 },
      { module: 'Conservation Strategies', rate: 68 },
      { module: 'Sustainable Business Models', rate: 65 },
      { module: 'Advanced Climate Science', rate: 58 }
    ],
    certificatesIssued: {
      total: 15768,
      lastMonth: 892,
      growth: 12
    },
    dropoffPoints: [
      { position: 'After first module', percentage: 15 },
      { position: 'Midway through course', percentage: 35 },
      { position: 'Before final assessment', percentage: 18 },
      { position: 'Complete with no issues', percentage: 32 }
    ],
    assessmentPerformance: [
      { assessment: 'Climate Science Quiz', avgScore: 78, passRate: 86 },
      { assessment: 'Renewable Energy Test', avgScore: 72, passRate: 81 },
      { assessment: 'Sustainable Building Final', avgScore: 75, passRate: 84 },
      { assessment: 'Environmental Policy Exam', avgScore: 68, passRate: 76 },
      { assessment: 'Sustainability Certification', avgScore: 82, passRate: 91 }
    ],
    timeSpentDistribution: [
      { range: '< 2 hours', percentage: 12 },
      { range: '2-5 hours', percentage: 24 },
      { range: '5-10 hours', percentage: 31 },
      { range: '10-20 hours', percentage: 22 },
      { range: '> 20 hours', percentage: 11 }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Average Completion Time */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg Completion Time</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{learningData.averageCompletionTime.days} days</h3>
              <p className="text-gray-500 text-sm mt-2">
                Approximately {learningData.averageCompletionTime.hours} hours of active learning
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiClock className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Certificates Issued */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Certificates Issued</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{learningData.certificatesIssued.total.toLocaleString()}</h3>
              <p className="text-green-500 text-sm mt-2 flex items-center">
                <span className="mr-1">↑</span> 
                <span>{learningData.certificatesIssued.growth}% increase last month</span>
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiAward className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Drop-off Rate */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Course Completion Rate</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{learningData.dropoffPoints[3].percentage}%</h3>
              <p className="text-gray-500 text-sm mt-2">
                Complete all modules without dropping off
              </p>
            </div>
            <div className="p-3 bg-amber-50 rounded-full">
              <FiBarChart2 className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Module Completion Rates */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">Module Completion Rates</h3>
        <div className="space-y-4">
          {learningData.moduleCompletionRates.map((module) => (
            <div key={module.module}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{module.module}</span>
                <span className="text-sm font-medium text-gray-500">{module.rate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${module.rate > 80 ? 'bg-green-500' : module.rate > 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${module.rate}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drop-off Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Drop-off Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiAlertCircle className="mr-2 text-black" /> Drop-off Points
          </h3>
          <div className="space-y-6">
            {learningData.dropoffPoints.map((point) => (
              <div key={point.position}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{point.position}</span>
                  <span className="text-sm font-medium text-gray-500">{point.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 relative">
                  <div
                    className={`h-4 rounded-full ${point.position === 'Complete with no issues' ? 'bg-green-500' : 'bg-red-400'}`}
                    style={{ width: `${point.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time Spent Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">Time Spent on Courses</h3>
          <div className="flex items-center justify-center h-64">
            <div className="w-full max-w-md">
              {/* Simple donut chart representation */}
              <div className="relative h-40 w-40 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {learningData.timeSpentDistribution.map((segment, index) => {
                    // Calculate start and end angles for the donut segments
                    const previousSegments = learningData.timeSpentDistribution.slice(0, index);
                    const previousTotal = previousSegments.reduce((sum, seg) => sum + seg.percentage, 0);
                    const startAngle = (previousTotal / 100) * 360;
                    const endAngle = startAngle + (segment.percentage / 100) * 360;
                    
                    // Convert angles to radians and calculate path
                    const startRad = (startAngle - 90) * Math.PI / 180;
                    const endRad = (endAngle - 90) * Math.PI / 180;
                    
                    const x1 = 50 + 40 * Math.cos(startRad);
                    const y1 = 50 + 40 * Math.sin(startRad);
                    const x2 = 50 + 40 * Math.cos(endRad);
                    const y2 = 50 + 40 * Math.sin(endRad);
                    
                    // Determine if the arc should be drawn as a large arc
                    const largeArcFlag = segment.percentage > 50 ? 1 : 0;
                    
                    // Generate the SVG path for the segment
                    const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                    
                    // Assign colors based on index
                    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
                    
                    return (
                      <path 
                        key={segment.range} 
                        d={pathData} 
                        fill={colors[index % colors.length]}
                      />
                    );
                  })}
                  <circle cx="50" cy="50" r="25" fill="white" />
                </svg>
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 mt-6">
                {learningData.timeSpentDistribution.map((segment, index) => {
                  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
                  return (
                    <div key={segment.range} className="flex items-center">
                      <div 
                        className="w-3 h-3 mr-2" 
                        style={{ backgroundColor: colors[index % colors.length] }}
                      ></div>
                      <span className="text-xs text-gray-600">
                        {segment.range} ({segment.percentage}%)
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Performance */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">Assessment Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assessment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pass Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {learningData.assessmentPerformance.map((assessment) => (
                <tr key={assessment.assessment}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{assessment.assessment}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2 text-black">{assessment.avgScore}%</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div 
                          className={`h-2 rounded-full ${assessment.avgScore >= 80 ? 'bg-green-500' : assessment.avgScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${assessment.avgScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2 text-black">{assessment.passRate}%</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div 
                          className={`h-2 bg-green-500 rounded-full`}
                          style={{ width: `${assessment.passRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 