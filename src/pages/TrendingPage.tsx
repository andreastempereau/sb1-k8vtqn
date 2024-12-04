import React from 'react';
import { TrendingUp, Users, BarChart } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export function TrendingPage() {
  // Sort projects by raised amount to get top performing ones
  const topProjects = [...projects]
    .sort((a, b) => b.raisedAmount - a.raisedAmount)
    .slice(0, 10); // Show top 10 projects

  return (
    <div className="space-y-8">
      <div className="border-b pb-8">
        <h1 className="text-3xl font-bold text-gray-900">Trending Projects</h1>
        <p className="mt-2 text-gray-600">Discover the most popular and fastest-growing token launches</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Value Locked</p>
              <p className="text-2xl font-bold text-gray-900">$24.5M</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Investors</p>
              <p className="text-2xl font-bold text-gray-900">12.8K</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">24h Volume</p>
              <p className="text-2xl font-bold text-gray-900">$8.2M</p>
            </div>
            <BarChart className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Performing Projects</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Raised</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topProjects.map((project) => {
                  const progress = (project.raisedAmount / project.targetAmount) * 100;
                  const status = project.daysLeft === 0 ? 'Completed' : project.daysLeft <= 3 ? 'Ending Soon' : 'Active';
                  const statusColor = status === 'Completed' ? 'green' : status === 'Ending Soon' ? 'yellow' : 'blue';

                  return (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link to={`/project/${project.id}`} className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src={project.imageUrl} alt="" />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{project.title}</div>
                            <div className="text-sm text-gray-500">{project.tokenSymbol}</div>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">${project.raisedAmount.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">
                          {progress.toFixed(1)}% of ${project.targetAmount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`bg-${statusColor}-500 h-2.5 rounded-full`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${statusColor}-100 text-${statusColor}-800`}>
                          {status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}