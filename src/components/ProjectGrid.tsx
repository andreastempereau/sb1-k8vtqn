import React from 'react';
import { Project } from '../types/project';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  emptyMessage?: string;
}

export function ProjectGrid({ projects, emptyMessage = "No projects found" }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}