'use client';

import { FiUsers, FiStar, FiBookOpen, FiUserCheck, FiBarChart2 } from 'react-icons/fi';

export default function InstructorAnalytics() {
  // Mock data
  const instructorData = {
    totalInstructors: 42,
    activeInstructors: 36,
    avgRating: 4.6,
    totalCourses: 87,
    topInstructors: [
      { 
        id: 1, 
        name: 'Kakashi Hatake', 
        avatar: '/images/instructor1.png', 
        courses: 8, 
        students: 3756, 
        rating: 4.8,
        earnings: 58742
      },
      { 
        id: 2, 
        name: 'Sarah Johnson', 
        avatar: '/images/instructor2.png', 
        courses: 6, 
        students: 2987, 
        rating: 4.7,
        earnings: 42568
      },
      { 
        id: 3, 
        name: 'James Smith', 
        avatar: '/images/instructor3.png', 
        courses: 5, 
        students: 2456, 
        rating: 4.9,
        earnings: 38945
      },
      { 
        id: 4, 
        name: 'Lisa Chen', 
        avatar: '/images/instructor4.png', 
        courses: 4, 
        students: 1987, 
        rating: 4.6,
        earnings: 32476
      },
      { 
        id: 5, 
        name: 'Michael Brown', 
        avatar: '/images/instructor5.png', 
        courses: 3, 
        students: 1654, 
        rating: 4.5,
        earnings: 26890
      }
    ],
    instructorGrowth: [
      { month: 'Jan', count: 28 },
      { month: 'Feb', count: 30 },
      { month: 'Mar', count: 32 },
      { month: 'Apr', count: 34 },
      { month: 'May', count: 36 },
      { month: 'Jun', count: 38 },
      { month: 'Jul', count: 40 },
      { month: 'Aug', count: 42 },
      { month: 'Sep', count: 42 },
      { month: 'Oct', count: 42 },
      { month: 'Nov', count: 42 },
      { month: 'Dec', count: 42 }
    ],
    specializations: [
      { field: 'Renewable Energy', count: 12, percentage: 29 },
      { field: 'Sustainable Building', count: 8, percentage: 19 },
      { field: 'Climate Science', count: 7, percentage: 17 },
      { field: 'Environmental Policy', count: 6, percentage: 14 },
      { field: 'Conservation', count: 5, percentage: 12 },
      { field: 'Others', count: 4, percentage: 9 }
    ],
    contentCreation: {
      totalContent: 456,
      avgContentPerInstructor: 10.8,
      topContentTypes: [
        { type: 'Video Lessons', percentage: 48 },
        { type: 'Quizzes & Assessments', percentage: 23 },
        { type: 'Reading Materials', percentage: 18 },
        { type: 'Interactive Exercises', percentage: 11 }
      ]
    }
  };

  // Helper function to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Total Instructors */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Instructors</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{instructorData.totalInstructors}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {instructorData.activeInstructors} currently active
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiUsers className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Average Rating */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Average Rating</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{instructorData.avgRating}</h3>
              <p className="flex text-gray-500 text-sm mt-2 items-center">
                <FiStar className="text-yellow-400 mr-1 w-4 h-4" />
                <span>Across all instructors</span>
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-full">
              <FiStar className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Total Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Courses</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{instructorData.totalCourses}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Avg. {Math.round(instructorData.totalCourses / instructorData.totalInstructors)} per instructor
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiBookOpen className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Content Created */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Content</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{instructorData.contentCreation.totalContent}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Avg. {instructorData.contentCreation.avgContentPerInstructor} items per instructor
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiBarChart2 className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Instructors */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-black">Top Performing Instructors</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Courses
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {instructorData.topInstructors.map((instructor) => (
                <tr key={instructor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 relative rounded-full overflow-hidden">
                        {/* Fallback image if real image fails */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <FiUserCheck className="h-6 w-6 text-gray-400" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{instructor.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{instructor.courses}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{instructor.students.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2">{instructor.rating}</span>
                      <FiStar className="w-4 h-4 text-yellow-400" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatCurrency(instructor.earnings)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Instructor Growth & Specializations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Instructor Growth Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">Instructor Growth (2023)</h3>
          <div className="h-64 relative">
            {/* This would be a real chart in a production app */}
            <div className="flex items-end h-full justify-between">
              {instructorData.instructorGrowth.map((item) => (
                <div key={item.month} className="flex flex-col items-center">
                  <div 
                    className="bg-blue-500 rounded-t w-8"
                    style={{ 
                      height: `${(item.count / Math.max(...instructorData.instructorGrowth.map(d => d.count))) * 200}px`
                    }}
                  ></div>
                  <span className="text-xs mt-2 text-gray-500">{item.month}</span>
                  <span className="text-xs text-gray-400">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructor Specializations */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">Instructor Specializations</h3>
          <div className="space-y-4">
            {instructorData.specializations.map((field) => (
              <div key={field.field}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{field.field}</span>
                  <span className="text-sm font-medium text-gray-500">
                    {field.count} instructors ({field.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${field.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Type Distribution */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">Content Type Distribution</h3>
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <div className="flex justify-center mb-8">
              {/* Simple donut chart representation */}
              <div className="relative h-48 w-48">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {instructorData.contentCreation.topContentTypes.map((type, index) => {
                    // Calculate start and end angles for the donut segments
                    const previousSegments = instructorData.contentCreation.topContentTypes.slice(0, index);
                    const previousTotal = previousSegments.reduce((sum, seg) => sum + seg.percentage, 0);
                    const startAngle = (previousTotal / 100) * 360;
                    const endAngle = startAngle + (type.percentage / 100) * 360;
                    
                    // Convert angles to radians and calculate path
                    const startRad = (startAngle - 90) * Math.PI / 180;
                    const endRad = (endAngle - 90) * Math.PI / 180;
                    
                    const x1 = 50 + 40 * Math.cos(startRad);
                    const y1 = 50 + 40 * Math.sin(startRad);
                    const x2 = 50 + 40 * Math.cos(endRad);
                    const y2 = 50 + 40 * Math.sin(endRad);
                    
                    // Determine if the arc should be drawn as a large arc
                    const largeArcFlag = type.percentage > 50 ? 1 : 0;
                    
                    // Generate the SVG path for the segment
                    const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                    
                    // Assign colors based on index
                    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
                    
                    return (
                      <path 
                        key={type.type} 
                        d={pathData} 
                        fill={colors[index % colors.length]}
                      />
                    );
                  })}
                  <circle cx="50" cy="50" r="20" fill="white" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {instructorData.contentCreation.topContentTypes.map((type, index) => {
                const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
                return (
                  <div key={type.type} className="flex items-center">
                    <div 
                      className="w-4 h-4 mr-2" 
                      style={{ backgroundColor: colors[index % colors.length] }}
                    ></div>
                    <span className="text-sm text-gray-700 truncate flex-1">
                      {type.type}
                    </span>
                    <span className="text-sm font-medium text-gray-900 ml-2">
                      {type.percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 