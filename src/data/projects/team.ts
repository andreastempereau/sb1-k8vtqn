import { TeamMember } from '../../types/team';

export const exampleTeam: TeamMember[] = [
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