import React from 'react';
import { X, Briefcase, GraduationCap, Linkedin, Twitter, Github } from 'lucide-react';
import { TeamMember } from '../types/team';

interface TeamMemberModalProps {
  member: TeamMember;
  onClose: () => void;
}

export function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Experience
              </h3>
              <div className="space-y-4">
                {member.experience.map((exp, index) => (
                  <div key={index}>
                    <p className="font-medium text-gray-900">{exp.role}</p>
                    <p className="text-gray-500">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                {member.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-medium text-gray-900">{edu.degree}</p>
                    <p className="text-gray-500">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect</h3>
              <div className="flex space-x-4">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-700"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    <Github className="w-6 h-6" />
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