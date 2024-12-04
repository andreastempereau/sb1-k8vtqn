import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Project } from '../types/project';

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const progress = (project.raisedAmount / project.targetAmount) * 100;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl overflow-hidden shadow-xl">
      <div className="p-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Featured Launch</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-blue-100 mb-6">{project.description}</p>
          <div className="mb-6">
            <div className="flex justify-between text-blue-100 mb-2">
              <span>Progress</span>
              <span>{progress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-3">
              <div
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}