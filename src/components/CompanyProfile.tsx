import React, { useState } from 'react';
import { Building, Users, Calendar, Link, Twitter, Github, Linkedin } from 'lucide-react';
import { Project } from '../types/project';
import { CompanyProfileModal } from './CompanyProfileModal';

interface CompanyProfileProps {
  project: Project;
}

export function CompanyProfile({ project }: CompanyProfileProps) {
  const [showModal, setShowModal] = useState(false);
  const { companyProfile } = project;

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Company Profile</h2>
          <button
            onClick={() => setShowModal(true)}
            className="text-sm text-blue-500 hover:text-blue-600"
          >
            View Full Profile
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Building className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Founded</p>
                <p className="font-medium text-gray-900">{companyProfile.founded}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Team Size</p>
                <p className="font-medium text-gray-900">{companyProfile.employees} employees</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Key Investors</h3>
            <div className="flex flex-wrap gap-2">
              {companyProfile.investors.slice(0, 3).map((investor, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                >
                  {investor}
                </span>
              ))}
              {companyProfile.investors.length > 3 && (
                <button
                  onClick={() => setShowModal(true)}
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  +{companyProfile.investors.length - 3} more
                </button>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href={companyProfile.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <Link className="w-5 h-5" />
              </a>
              <a
                href={companyProfile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400"
              >
                <Twitter className="w-5 h-5" />
              </a>
              {companyProfile.socialLinks.github && (
                <a
                  href={companyProfile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {companyProfile.socialLinks.linkedin && (
                <a
                  href={companyProfile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <CompanyProfileModal
          project={project}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}