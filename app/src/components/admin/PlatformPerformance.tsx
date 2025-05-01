'use client';

import { FiMonitor, FiClock, FiSearch, FiSmartphone } from 'react-icons/fi';

export default function PlatformPerformance() {
  // Mock data
  const platformData = {
    totalTraffic: {
      daily: 4562,
      weekly: 28450,
      monthly: 124680
    },
    avgSessionDuration: '12:35',
    pageLoadTime: '1.42',
    trafficByDevice: [
      { device: 'Mobile', percentage: 58 },
      { device: 'Desktop', percentage: 34 },
      { device: 'Tablet', percentage: 8 }
    ],
    trafficByBrowser: [
      { browser: 'Chrome', percentage: 64 },
      { browser: 'Safari', percentage: 18 },
      { browser: 'Firefox', percentage: 12 },
      { browser: 'Edge', percentage: 5 },
      { browser: 'Others', percentage: 1 }
    ],
    trafficByCountry: [
      { country: 'United States', percentage: 32 },
      { country: 'India', percentage: 18 },
      { country: 'United Kingdom', percentage: 12 },
      { country: 'Germany', percentage: 8 },
      { country: 'Canada', percentage: 6 },
      { country: 'Others', percentage: 24 }
    ],
    popularPages: [
      { page: 'Homepage', visits: 42680, avgTime: '2:45' },
      { page: 'Course Catalog', visits: 36540, avgTime: '3:20' },
      { page: 'Renewable Energy Course', visits: 24780, avgTime: '8:45' },
      { page: 'User Dashboard', visits: 18950, avgTime: '6:30' },
      { page: 'Registration Page', visits: 12460, avgTime: '1:45' }
    ],
    searchQueries: [
      { query: 'renewable energy courses', count: 1245 },
      { query: 'climate change', count: 986 },
      { query: 'sustainable building', count: 782 },
      { query: 'solar panel installation', count: 645 },
      { query: 'environmental policy', count: 534 }
    ],
    trafficOverTime: [
      { date: '1', visits: 3800 },
      { date: '2', visits: 4200 },
      { date: '3', visits: 4100 },
      { date: '4', visits: 4300 },
      { date: '5', visits: 4500 },
      { date: '6', visits: 3900 },
      { date: '7', visits: 3600 },
      { date: '8', visits: 4000 },
      { date: '9', visits: 4200 },
      { date: '10', visits: 4400 },
      { date: '11', visits: 4500 },
      { date: '12', visits: 4700 },
      { date: '13', visits: 4300 },
      { date: '14', visits: 4000 },
      { date: '15', visits: 4200 },
      { date: '16', visits: 4400 },
      { date: '17', visits: 4600 },
      { date: '18', visits: 4700 },
      { date: '19', visits: 4500 },
      { date: '20', visits: 4300 },
      { date: '21', visits: 4100 },
      { date: '22', visits: 4300 },
      { date: '23', visits: 4500 },
      { date: '24', visits: 4700 },
      { date: '25', visits: 4800 },
      { date: '26', visits: 4600 },
      { date: '27', visits: 4400 },
      { date: '28', visits: 4300 },
      { date: '29', visits: 4500 },
      { date: '30', visits: 4700 }
    ],
    errors: {
      total: 124,
      byType: [
        { type: '404 Not Found', count: 82, percentage: 66 },
        { type: '500 Server Error', count: 28, percentage: 23 },
        { type: '403 Forbidden', count: 8, percentage: 6 },
        { type: 'Others', count: 6, percentage: 5 }
      ]
    }
  };

  // Helper function to get device icon
  const getDeviceIcon = (device: string) => {
    switch(device.toLowerCase()) {
      case 'mobile':
        return <FiSmartphone className="w-4 h-4 text-blue-500" />;
      case 'desktop':
        return <FiMonitor className="w-4 h-4 text-green-500" />;
      case 'tablet':
        return <FiMonitor className="w-4 h-4 text-purple-500" />;
      default:
        return <FiMonitor className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Traffic */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Monthly Traffic</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{platformData.totalTraffic.monthly.toLocaleString()}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {platformData.totalTraffic.daily.toLocaleString()} visits today
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiMonitor className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Session Duration */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg Session Duration</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{platformData.avgSessionDuration}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Minutes per session
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiClock className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Page Load Time */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg Page Load Time</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{platformData.pageLoadTime}s</h3>
              <p className="text-green-500 text-sm mt-2 flex items-center">
                <span className="mr-1">↓</span> 
                <span>12% faster than last month</span>
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiMonitor className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Graph */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">Daily Traffic (Last 30 Days)</h3>
        <div className="h-64 relative">
          {/* This would be a real chart in a production app */}
          <div className="flex items-end h-full justify-between">
            {platformData.trafficOverTime.map((item) => (
              <div key={item.date} className="flex flex-col items-center">
                <div 
                  className="bg-blue-500 rounded-t w-2 md:w-3"
                  style={{ 
                    height: `${(item.visits / Math.max(...platformData.trafficOverTime.map(d => d.visits))) * 200}px`
                  }}
                ></div>
                {Number(item.date) % 5 === 0 && (
                  <span className="text-xs mt-2 text-gray-500">{item.date}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device & Browser Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Device Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">Traffic by Device</h3>
          <div className="space-y-6">
            {platformData.trafficByDevice.map((device) => (
              <div key={device.device} className="flex items-center">
                <div className="mr-4">
                  {getDeviceIcon(device.device)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{device.device}</span>
                    <span className="text-sm font-medium text-gray-500">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        device.device.toLowerCase() === 'mobile' 
                          ? 'bg-blue-500' 
                          : device.device.toLowerCase() === 'desktop'
                            ? 'bg-green-500'
                            : 'bg-purple-500'
                      }`}
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browser Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">Traffic by Browser</h3>
          <div className="space-y-4">
            {platformData.trafficByBrowser.map((browser) => (
              <div key={browser.browser}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{browser.browser}</span>
                  <span className="text-sm font-medium text-gray-500">{browser.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${browser.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Visited Pages */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-black">Most Visited Pages</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Page
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Visits
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Time on Page
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {platformData.popularPages.map((page, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{page.page}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{page.visits.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{page.avgTime}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Search Queries & Traffic by Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Search Queries */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiSearch className="mr-2 text-black" /> Top Search Queries
          </h3>
          <div className="space-y-4">
            {platformData.searchQueries.map((query, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 truncate max-w-[70%]">{query.query}</span>
                  <span className="text-sm font-medium text-gray-500">{query.count} searches</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(query.count / platformData.searchQueries[0].count) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic by Country */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">Traffic by Country</h3>
          <div className="space-y-4">
            {platformData.trafficByCountry.map((country) => (
              <div key={country.country}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{country.country}</span>
                  <span className="text-sm font-medium text-gray-500">{country.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${country.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Errors */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-black">Platform Errors</h3>
          <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
            {platformData.errors.total} total errors
          </div>
        </div>
        <div className="space-y-4">
          {platformData.errors.byType.map((error) => (
            <div key={error.type}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{error.type}</span>
                <span className="text-sm font-medium text-gray-500">
                  {error.count} ({error.percentage}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${error.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 