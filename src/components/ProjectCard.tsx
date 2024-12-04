import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const progress = (project.raisedAmount / project.targetAmount) * 100;

  return (
    <Link to={`/project/${project.id}`} className="block">
      <div className="bg-white rounded-lg shadow overflow-hidden transition-transform hover:scale-[1.02]">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {project.tokenSymbol}
            </span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Progress</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500">Raised</p>
                <p className="font-semibold text-gray-900">
                  ${project.raisedAmount.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Target</p>
                <p className="font-semibold text-gray-900">
                  ${project.targetAmount.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between text-sm text-gray-500">
                <div>
                  <p>Time Left</p>
                  <p className="font-semibold text-gray-900">
                    {project.daysLeft} days
                  </p>
                </div>
                <div className="text-right">
                  <p>TGE Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(project.tgeDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}