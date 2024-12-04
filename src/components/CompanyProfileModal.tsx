import React from 'react';
import { X, Building, Users, MapPin, Link, Twitter, Github, Linkedin } from 'lucide-react';
import { Project } from '../types/project';

interface CompanyProfileModalProps {
  project: Project;
  onClose: () => void;
}

export function CompanyProfileModal({ project, onClose }: CompanyProfileModalProps) {
  const { companyProfile } = project;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{project.title} Company Profile</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Building className="w-6 h-6 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Founded</p>
                  <p className="font-medium text-gray-900">{companyProfile.founded}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{companyProfile.location}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Team Size</p>
                  <p className="font-medium text-gray-900">{companyProfile.employees} employees</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Project</h3>
              <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Investors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companyProfile.investors.map((investor, index) => (
                  <div
                    key={index}
                    className="p-4 bg-blue-50 rounded-lg"
                  >
                    <p className="font-medium text-blue-900">{investor}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic Partnerships</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companyProfile.partnerships.map((partnership, index) => (
                  <div
                    key={index}
                    className="p-4 bg-green-50 rounded-lg"
                  >
                    <p className="font-medium text-green-900">{partnership}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a
                  href={companyProfile.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-500 hover:text-gray-900"
                >
                  <Link className="w-5 h-5 mr-2" />
                  Website
                </a>
                <a
                  href={companyProfile.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-500 hover:text-blue-400"
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </a>
                {companyProfile.socialLinks.github && (
                  <a
                    href={companyProfile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-500 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                )}
                {companyProfile.socialLinks.linkedin && (
                  <a
                    href={companyProfile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-500 hover:text-blue-700"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}