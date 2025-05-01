'use client';

import { FiDollarSign, FiTrendingUp, FiCreditCard, FiBarChart2, FiShoppingCart } from 'react-icons/fi';

export default function RevenueAnalytics() {
  // Mock data
  const revenueData = {
    totalRevenue: 128750,
    monthlyRevenue: 28450,
    yearlyGrowth: 37,
    paidCourses: 45,
    avgCoursePrice: 49.99,
    revenueByMonth: [
      { month: 'Jan', revenue: 15200 },
      { month: 'Feb', revenue: 16400 },
      { month: 'Mar', revenue: 17800 },
      { month: 'Apr', revenue: 19200 },
      { month: 'May', revenue: 20100 },
      { month: 'Jun', revenue: 21500 },
      { month: 'Jul', revenue: 22800 },
      { month: 'Aug', revenue: 24100 },
      { month: 'Sep', revenue: 25600 },
      { month: 'Oct', revenue: 26900 },
      { month: 'Nov', revenue: 28450 },
      { month: 'Dec', revenue: 0 } // Current month in progress
    ],
    revenueBySource: [
      { source: 'Course Sales', percentage: 63, amount: 81112.5 },
      { source: 'Subscriptions', percentage: 28, amount: 36050 },
      { source: 'Certificate Fees', percentage: 7, amount: 9012.5 },
      { source: 'Other', percentage: 2, amount: 2575 }
    ],
    paymentMethods: [
      { method: 'Credit Card', percentage: 64 },
      { method: 'PayPal', percentage: 26 },
      { method: 'Bank Transfer', percentage: 8 },
      { method: 'Cryptocurrency', percentage: 2 }
    ],
    topCoursesBySales: [
      { course: 'Renewable Energy Fundamentals', sales: 127, revenue: 6350 },
      { course: 'Climate Science Advanced', sales: 98, revenue: 5880 },
      { course: 'Sustainable Building Design', sales: 86, revenue: 4300 },
      { course: 'Environmental Policy', sales: 72, revenue: 3600 },
      { course: 'Zero Waste Living', sales: 64, revenue: 3200 }
    ]
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
        {/* Total Revenue */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{formatCurrency(revenueData.totalRevenue)}</h3>
              <p className="text-green-500 text-sm mt-2 flex items-center">
                <span className="mr-1">↑</span> 
                <span>{revenueData.yearlyGrowth}% increase this year</span>
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiDollarSign className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Monthly Revenue</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{formatCurrency(revenueData.monthlyRevenue)}</h3>
              <p className="text-green-500 text-sm mt-2 flex items-center">
                <span className="mr-1">↑</span> 
                <span>{Math.round((revenueData.monthlyRevenue - revenueData.revenueByMonth[revenueData.revenueByMonth.length - 3].revenue) / revenueData.revenueByMonth[revenueData.revenueByMonth.length - 3].revenue * 100)}% vs last month</span>
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiTrendingUp className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Paid Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Paid Courses</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{revenueData.paidCourses}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Avg. price: {formatCurrency(revenueData.avgCoursePrice)}
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiShoppingCart className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Primary Payment Method</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{revenueData.paymentMethods[0].method}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {revenueData.paymentMethods[0].percentage}% of transactions
              </p>
            </div>
            <div className="p-3 bg-amber-50 rounded-full">
              <FiCreditCard className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">Revenue Trend (2025)</h3>
        <div className="h-64 relative">
          {/* This would be a real chart in a production app */}
          <div className="flex items-end h-full justify-between">
            {revenueData.revenueByMonth.map((item) => (
              <div key={item.month} className="flex flex-col items-center">
                <div 
                  className="bg-green-500 rounded-t w-10"
                  style={{ 
                    height: `${(item.revenue / Math.max(...revenueData.revenueByMonth.map(d => d.revenue))) * 200}px`
                  }}
                ></div>
                <span className="text-xs mt-2 text-gray-500">{item.month}</span>
                <span className="text-xs text-gray-400">{formatCurrency(item.revenue)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue By Source & Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue by Source */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiBarChart2 className="mr-2 text-black" /> Revenue by Source
          </h3>
          <div className="space-y-4">
            {revenueData.revenueBySource.map((source) => (
              <div key={source.source}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{source.source}</span>
                  <span className="text-sm font-medium text-gray-500">
                    {formatCurrency(source.amount)} ({source.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiCreditCard className="mr-2 text-black" /> Payment Methods
          </h3>
          
          <div className="relative pt-8 pl-8 h-56">
            {/* This would be a real pie chart in a production app */}
            <svg viewBox="0 0 100 100" className="w-40 h-40 -ml-4">
              {revenueData.paymentMethods.map((method, index) => {
                // Calculate start and end angles for the donut segments
                const previousSegments = revenueData.paymentMethods.slice(0, index);
                const previousTotal = previousSegments.reduce((sum, seg) => sum + seg.percentage, 0);
                const startAngle = (previousTotal / 100) * 360;
                const endAngle = startAngle + (method.percentage / 100) * 360;
                
                // Convert angles to radians and calculate path
                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (endAngle - 90) * Math.PI / 180;
                
                const x1 = 50 + 40 * Math.cos(startRad);
                const y1 = 50 + 40 * Math.sin(startRad);
                const x2 = 50 + 40 * Math.cos(endRad);
                const y2 = 50 + 40 * Math.sin(endRad);
                
                // Determine if the arc should be drawn as a large arc
                const largeArcFlag = method.percentage > 50 ? 1 : 0;
                
                // Generate the SVG path for the segment
                const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                
                // Assign colors based on index
                const colors = ['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6'];
                
                return (
                  <path 
                    key={method.method} 
                    d={pathData} 
                    fill={colors[index % colors.length]}
                  />
                );
              })}
            </svg>
            
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pr-4 pl-8 flex flex-col justify-center">
              {revenueData.paymentMethods.map((method, index) => {
                const colors = ['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6'];
                return (
                  <div key={method.method} className="flex items-center mb-4">
                    <div 
                      className="w-3 h-3 mr-2" 
                      style={{ backgroundColor: colors[index % colors.length] }}
                    ></div>
                    <span className="text-sm text-gray-600 truncate flex-1">
                      {method.method}
                    </span>
                    <span className="text-sm font-medium text-gray-700 ml-2">
                      {method.percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Top Courses by Sales */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-black">Top Courses by Revenue</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {revenueData.topCoursesBySales.map((course, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{course.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.sales} units</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatCurrency(course.revenue)}</div>
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