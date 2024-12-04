import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { AddEditProject } from './AddEditProject';
import { ProjectList } from '../../components/ProjectList';
import { Project } from '../../types/project';
import { projects } from '../../data/projects';

export function ProjectManagement() {
  const [companyProjects, setCompanyProjects] = useState(projects.slice(0, 3));
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleSaveProject = (project: Project) => {
    if (editingProject) {
      setCompanyProjects(prev => prev.map(p => p.id === project.id ? project : p));
    } else {
      setCompanyProjects(prev => [...prev, project]);
    }
    setShowNewProjectModal(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (projectId: string) => {
    setCompanyProjects(prev => prev.filter(p => p.id !== projectId));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Project Management</h1>
        <button
          onClick={() => setShowNewProjectModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </button>
      </div>

      <ProjectList
        projects={companyProjects}
        onEdit={setEditingProject}
        onDelete={handleDeleteProject}
      />

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-500">Total Raised</p>
            <p className="text-2xl font-bold text-gray-900">
              ${companyProjects.reduce((sum, p) => sum + p.raisedAmount, 0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Active Projects</p>
            <p className="text-2xl font-bold text-gray-900">
              {companyProjects.filter(p => p.daysLeft > 0).length}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Investors</p>
            <p className="text-2xl font-bold text-gray-900">1,234</p>
          </div>
        </div>
      </div>

      {(showNewProjectModal || editingProject) && (
        <AddEditProject
          project={editingProject}
          onClose={() => {
            setShowNewProjectModal(false);
            setEditingProject(null);
          }}
          onSave={handleSaveProject}
        />
      )}
    </div>
  );
}