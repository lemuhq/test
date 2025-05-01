'use client';

import { FiBook, FiList, FiUsers, FiBarChart2, FiStar } from 'react-icons/fi';

export default function CourseAnalytics() {
  // Mock data
  const courseData = {
    totalCourses: 87,
    publishedCourses: 82,
    draftCourses: 5,
    totalEnrollments: 45678,
    averageCompletion: 68,
    courseCategories: [
      { category: 'Renewable Energy', count: 24, percentage: 28 },
      { category: 'Sustainable Building', count: 18, percentage: 21 },
      { category: 'Climate Science', count: 15, percentage: 17 },
      { category: 'Environmental Policy', count: 12, percentage: 14 },
      { category: 'Conservation', count: 10, percentage: 11 },
      { category: 'Others', count: 8, percentage: 9 }
    ],
    topCourses: [
      { 
        id: 1, 
        title: 'Renewable Energy Transformation for Beginners', 
        enrollments: 2568, 
        completionRate: 72, 
        rating: 4.7,
        instructor: 'Kakashi Hatake'
      },
      { 
        id: 2, 
        title: 'Sustainable Building Materials', 
        enrollments: 2145, 
        completionRate: 65, 
        rating: 4.5,
        instructor: 'Sarah Johnson'
      },
      { 
        id: 3, 
        title: 'Climate Change Solutions', 
        enrollments: 1897, 
        completionRate: 69, 
        rating: 4.8,
        instructor: 'James Smith'
      },
      { 
        id: 4, 
        title: 'Zero Waste Lifestyle', 
        enrollments: 1756, 
        completionRate: 74, 
        rating: 4.6,
        instructor: 'Lisa Chen'
      },
      { 
        id: 5, 
        title: 'Environmental Policy Fundamentals', 
        enrollments: 1542, 
        completionRate: 61, 
        rating: 4.4,
        instructor: 'Michael Brown'
      }
    ],
    courseCompletionByMonth: [
      { month: 'Jan', completions: 320 },
      { month: 'Feb', completions: 350 },
      { month: 'Mar', completions: 400 },
      { month: 'Apr', completions: 450 },
      { month: 'May', completions: 480 },
      { month: 'Jun', completions: 520 },
      { month: 'Jul', completions: 550 },
      { month: 'Aug', completions: 600 },
      { month: 'Sep', completions: 650 },
      { month: 'Oct', completions: 700 },
      { month: 'Nov', completions: 750 },
      { month: 'Dec', completions: 800 }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Total Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Courses</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{courseData.totalCourses}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {courseData.publishedCourses} published, {courseData.draftCourses} drafts
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiBook className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Total Enrollments */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Enrollments</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{courseData.totalEnrollments.toLocaleString()}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {Math.round(courseData.totalEnrollments / courseData.totalCourses)} avg per course
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiUsers className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Average Completion */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg Completion Rate</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{courseData.averageCompletion}%</h3>
              <p className="text-gray-500 text-sm mt-2">
                Across all courses
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiBarChart2 className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Categories</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{courseData.courseCategories.length}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {courseData.courseCategories[0].category} is top category
              </p>
            </div>
            <div className="p-3 bg-amber-50 rounded-full">
              <FiList className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Courses Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-black">Top Performing Courses</h3>
        </div>
        <div className="overflow-x-auto"> 
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enrollments
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completion Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courseData.topCourses.map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{course.instructor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.enrollments.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2">{course.completionRate}%</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-green-500 rounded-full" 
                          style={{ width: `${course.completionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2">{course.rating}</span>
                      <FiStar className="w-4 h-4 text-yellow-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Categories & Completion Trend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Course Categories */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiList className="mr-2 text-black" /> Course Categories
          </h3>
          <div className="space-y-4">
            {courseData.courseCategories.map((category) => (
              <div key={category.category}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{category.category}</span>
                  <span className="text-sm font-medium text-gray-500">{category.count} courses ({category.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completion Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">Course Completions Trend (2023)</h3>
          <div className="h-64 relative">
            {/* This would be a real chart in a production app */}
            <div className="flex items-end h-full justify-between">
              {courseData.courseCompletionByMonth.map((item) => (
                <div key={item.month} className="flex flex-col items-center">
                  <div 
                    className="bg-green-500 rounded-t w-8"
                    style={{ 
                      height: `${(item.completions / Math.max(...courseData.courseCompletionByMonth.map(d => d.completions))) * 200}px`
                    }}
                  ></div>
                  <span className="text-xs mt-2 text-gray-500">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 