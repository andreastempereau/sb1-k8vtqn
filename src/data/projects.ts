import { Project } from '../types/project';

// Example team members and comments that will be reused across projects
const exampleTeam = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    bio: 'Former VP of Product at Coinbase, 10+ years in blockchain technology',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      github: 'https://github.com/sarahchen'
    },
    experience: [
      {
        company: 'Coinbase',
        role: 'VP of Product',
        period: '2018-2023'
      },
      {
        company: 'Ripple',
        role: 'Senior Product Manager',
        period: '2015-2018'
      }
    ],
    education: [
      {
        institution: 'Stanford University',
        degree: 'MS in Computer Science',
        year: '2015'
      }
    ]
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'CTO',
    bio: 'Blockchain architect with experience at Ethereum Foundation',
    imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mrodriguez',
      github: 'https://github.com/mrodriguez'
    },
    experience: [
      {
        company: 'Ethereum Foundation',
        role: 'Senior Developer',
        period: '2017-2023'
      }
    ],
    education: [
      {
        institution: 'MIT',
        degree: 'BS in Computer Science',
        year: '2017'
      }
    ]
  }
];

const exampleComments = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Alex Thompson',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      isTeamMember: false
    },
    content: "Really impressed with the technical architecture and the team's background. Looking forward to the launch!",
    date: '2024-02-20T10:30:00Z',
    upvotes: 24,
    downvotes: 2,
    replies: [
      {
        id: '2',
        author: {
          id: '2',
          name: 'Sarah Chen',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
          role: 'CEO & Co-founder',
          isTeamMember: true
        },
        content: 'Thanks Alex! We are working hard to ensure everything is ready for the TGE. Stay tuned for more updates!',
        date: '2024-02-20T11:15:00Z',
        upvotes: 15,
        downvotes: 0,
        replies: []
      }
    ]
  },
  {
    id: '3',
    author: {
      id: '3',
      name: 'Emma Wilson',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      isTeamMember: false
    },
    content: 'Could you provide more details about the token vesting schedule for early investors?',
    date: '2024-02-19T15:45:00Z',
    upvotes: 18,
    downvotes: 1,
    replies: [
      {
        id: '4',
        author: {
          id: '4',
          name: 'Michael Rodriguez',
          imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
          role: 'CTO',
          isTeamMember: true
        },
        content: 'Early investors will have 20% of their tokens unlocked at TGE, with the remaining 80% vesting linearly over 12 months.',
        date: '2024-02-19T16:20:00Z',
        upvotes: 12,
        downvotes: 0,
        replies: []
      }
    ]
  }
];

// Import all project definitions
import { defiChainProject } from './projects/defichain';
import { ecoBlockProject } from './projects/ecoblock';
import { metaverseProject } from './projects/metaverse';
import { aiTokenProject } from './projects/aitoken';
import { gamefiProject } from './projects/gamefi';
import { privacyChainProject } from './projects/privacychain';
import { dataStorageProject } from './projects/datastorage';
import { smartCityProject } from './projects/smartcity';
import { healthchainProject } from './projects/healthchain';
import { quantumProject } from './projects/quantum';
import { solarTokenProject } from './projects/solartoken';
import { identityProject } from './projects/identity';
import { supplyChainProject } from './projects/supplychain';
import { socialFiProject } from './projects/socialfi';
import { educationProject } from './projects/education';

// Upcoming Launches
export const upcomingProjects: Project[] = [
  defiChainProject,
  ecoBlockProject,
  metaverseProject,
  aiTokenProject,
  gamefiProject
];

// Current Active Launches
export const currentProjects: Project[] = [
  privacyChainProject,
  dataStorageProject,
  smartCityProject,
  healthchainProject,
  quantumProject
];

// Completed Launches
export const completedProjects: Project[] = [
  solarTokenProject,
  identityProject,
  supplyChainProject,
  socialFiProject,
  educationProject
];

// Export all projects combined
export const projects = [...upcomingProjects, ...currentProjects, ...completedProjects];