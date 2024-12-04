import React from 'react';
import { Play } from 'lucide-react';
import { Project } from '../types/project';

interface FounderVideoProps {
  project: Project;
}

export function FounderVideo({ project }: FounderVideoProps) {
  const { founderVideo } = project;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Founder's Message</h2>
      
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={founderVideo.thumbnailUrl}
          alt={founderVideo.title}
          className="w-full aspect-video object-cover"
        />
        <a
          href={founderVideo.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-opacity"
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <Play className="w-8 h-8 text-blue-500 ml-1" />
          </div>
        </a>
      </div>

      <div className="mt-4">
        <h3 className="font-medium text-gray-900">{founderVideo.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{founderVideo.description}</p>
      </div>
    </div>
  );
}