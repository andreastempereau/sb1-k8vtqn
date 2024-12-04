import React from 'react';
import { Project } from '../types/project';

interface ProjectStatsProps {
  project: Project;
}

export function ProjectStats({ project }: ProjectStatsProps) {
  const progress = (project.raisedAmount / project.targetAmount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Funding Goal</h3>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              ${project.targetAmount.toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Raised</h3>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              ${project.raisedAmount.toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Supply</h3>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              {project.totalSupply.toLocaleString()} {project.tokenSymbol}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Initial Circulation</h3>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              {project.initialCirculation.toLocaleString()} {project.tokenSymbol}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Progress</span>
            <span className="text-sm font-medium text-blue-600">{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>${project.raisedAmount.toLocaleString()}</span>
            <span>${project.targetAmount.toLocaleString()}</span>
          </div>
        </div>

        <button className="mt-6 w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out">
          Participate in Raise
        </button>
      </div>
    </div>
  );
}