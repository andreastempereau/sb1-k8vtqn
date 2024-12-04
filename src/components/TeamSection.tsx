import React, { useState } from 'react';
import { TeamMember } from '../types/team';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { TeamMemberModal } from './TeamMemberModal';

interface TeamSectionProps {
  team: TeamMember[];
}

export function TeamSection({ team }: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              
              <div className="flex space-x-3 mb-4">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-700"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedMember(member)}
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                View Full Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
}