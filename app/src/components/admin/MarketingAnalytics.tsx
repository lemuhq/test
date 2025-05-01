'use client';

import {  FiUsers, FiExternalLink, FiTarget, FiBarChart2, FiFlag } from 'react-icons/fi';

export default function MarketingAnalytics() {
  // Mock data
  const marketingData = {
    acquisitionStats: {
      newUsers: 3458,
      conversionRate: 4.6,
      costPerAcquisition: 5.82
    },
    trafficSources: [
      { source: 'Organic Search', users: 48250, percentage: 38 },
      { source: 'Direct', users: 32640, percentage: 26 },
      { source: 'Social Media', users: 25620, percentage: 21 },
      { source: 'Referral', users: 12350, percentage: 10 },
      { source: 'Email', users: 5820, percentage: 5 }
    ],
    topReferrers: [
      { site: 'sustain-edu.org', traffic: 4236 },
      { site: 'greenfuture.com', traffic: 3682 },
      { site: 'climate-action.net', traffic: 2980 },
      { site: 'eco-schools.org', traffic: 2385 },
      { site: 'environmental-science.edu', traffic: 1928 }
    ],
    socialMediaPerformance: [
      { platform: 'Instagram', followers: 28400, engagement: 4.2, traffic: 12680 },
      { platform: 'LinkedIn', followers: 22600, engagement: 3.8, traffic: 8450 },
      { platform: 'Twitter', followers: 18700, engagement: 2.4, traffic: 3480 },
      { platform: 'Facebook', followers: 15400, engagement: 1.8, traffic: 2640 }
    ],
    campaignPerformance: [
      { 
        campaign: 'Summer Sustainability Course', 
        impressions: 125000, 
        clicks: 5620, 
        conversions: 842, 
        ctr: 4.5,
        conversionRate: 15.0,
        cost: 4250,
        revenue: 25260,
        roi: 494
      },
      { 
        campaign: 'Earth Day Special', 
        impressions: 98000, 
        clicks: 4380, 
        conversions: 656, 
        ctr: 4.5,
        conversionRate: 15.0,
        cost: 3650,
        revenue: 19680,
        roi: 439
      },
      { 
        campaign: 'Climate Science Certificate', 
        impressions: 78000, 
        clicks: 3120, 
        conversions: 468, 
        ctr: 4.0,
        conversionRate: 15.0,
        cost: 2850,
        revenue: 14040,
        roi: 393
      }
    ],
    conversionFunnel: [
      { stage: 'Website Visit', count: 124680 },
      { stage: 'Course View', count: 62340 },
      { stage: 'Add to Cart', count: 18702 },
      { stage: 'Registration', count: 9351 },
      { stage: 'Purchase', count: 5610 }
    ],
    growthTrend: [
      { month: 'Jan', users: 82500 },
      { month: 'Feb', users: 86200 },
      { month: 'Mar', users: 91800 },
      { month: 'Apr', users: 98400 },
      { month: 'May', users: 102600 },
      { month: 'Jun', users: 109400 },
      { month: 'Jul', users: 115800 },
      { month: 'Aug', users: 120200 },
      { month: 'Sep', users: 124680 },
      { month: 'Oct', users: 0 },
      { month: 'Nov', users: 0 },
      { month: 'Dec', users: 0 }
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

  // Helper function to calculate funnel conversion rates
  const calculateFunnelRate = (currentIndex: number) => {
    if (currentIndex === 0) return 100;
    const currentStage = marketingData.conversionFunnel[currentIndex];
    const previousStage = marketingData.conversionFunnel[currentIndex - 1];
    return Math.round((currentStage.count / previousStage.count) * 100);
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* New Users */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">New Users (Monthly)</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{marketingData.acquisitionStats.newUsers.toLocaleString()}</h3>
              <p className="text-green-500 text-sm mt-2 flex items-center">
                <span className="mr-1">↑</span> 
                <span>12% increase from last month</span>
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiUsers className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Conversion Rate</p>
              <h3 className="text-2xl font-bold mt-1 text-black">{marketingData.acquisitionStats.conversionRate}%</h3>
              <p className="text-green-500 text-sm mt-2 flex items-center">
                <span className="mr-1">↑</span> 
                <span>0.8% increase from last month</span>
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiTarget className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Cost Per Acquisition */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Cost Per Acquisition</p>
              <h3 className="text-2xl font-bold mt-1 text-black">${marketingData.acquisitionStats.costPerAcquisition}</h3>
              <p className="text-green-500 text-sm mt-2 flex items-center">
                <span className="mr-1">↓</span> 
                <span>$0.64 lower than last month</span>
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiBarChart2 className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Sources & Growth Trend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">Traffic by Source</h3>
          <div className="space-y-4">
            {marketingData.trafficSources.map((source) => (
              <div key={source.source}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{source.source}</span>
                  <span className="text-sm font-medium text-gray-500">
                    {source.users.toLocaleString()} ({source.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      source.source === 'Organic Search' 
                        ? 'bg-blue-500' 
                        : source.source === 'Direct'
                          ? 'bg-green-500'
                          : source.source === 'Social Media'
                            ? 'bg-purple-500'
                            : source.source === 'Referral'
                              ? 'bg-yellow-500'
                              : 'bg-pink-500'
                    }`}
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 text-black">User Growth Trend (2023)</h3>
          <div className="h-64 relative">
            {/* This would be a real chart in a production app */}
            <div className="flex items-end h-full justify-between">
              {marketingData.growthTrend.map((item) => {
                // Only show bars for months with data
                if (item.users === 0) return null;
                
                return (
                  <div key={item.month} className="flex flex-col items-center">
                    <div 
                      className="bg-green-500 rounded-t w-8"
                      style={{ 
                        height: `${(item.users / Math.max(...marketingData.growthTrend.map(d => d.users))) * 200}px`
                      }}
                    ></div>
                    <span className="text-xs mt-2 text-gray-500">{item.month}</span>
                    <span className="text-xs text-gray-400">{(item.users / 1000).toFixed(1)}k</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-black">Campaign Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impressions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clicks
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CTR
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cost
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROI
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {marketingData.campaignPerformance.map((campaign, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{campaign.campaign}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.impressions.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.clicks.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.ctr}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.conversions} ({campaign.conversionRate}%)</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatCurrency(campaign.cost)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-green-600 font-medium">{campaign.roi}%</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conversion Funnel & Top Referrers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiFlag className="mr-2 text-gray-400" /> Conversion Funnel
          </h3>
          <div className="space-y-4">
            {marketingData.conversionFunnel.map((stage, index) => (
              <div key={stage.stage}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                  <span className="text-sm font-medium text-gray-500">
                    {stage.count.toLocaleString()} ({calculateFunnelRate(index)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ 
                      width: `${(stage.count / marketingData.conversionFunnel[0].count) * 100}%` 
                    }}
                  ></div>
                </div>
                {index < marketingData.conversionFunnel.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Top Referrers */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-6 flex items-center text-black">
            <FiExternalLink className="mr-2 text-gray-400" /> Top Referring Sites
          </h3>
          <div className="space-y-4">
            {marketingData.topReferrers.map((referrer, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <FiExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{referrer.site}</h4>
                      <p className="text-xs text-gray-500 mt-1 text-black">{referrer.traffic.toLocaleString()} visitors</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {Math.round((referrer.traffic / marketingData.trafficSources.find(s => s.source === 'Referral')!.users) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Performance */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-black">Social Media Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Followers
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Traffic Generated
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  % of Social Traffic
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {marketingData.socialMediaPerformance.map((platform) => (
                <tr key={platform.platform}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{platform.platform}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{platform.followers.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{platform.engagement}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{platform.traffic.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Math.round((platform.traffic / marketingData.trafficSources.find(s => s.source === 'Social Media')!.users) * 100)}%
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