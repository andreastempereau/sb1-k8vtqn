import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const solarTokenProject: Project = {
  id: '11',
  title: 'SolarToken (SLR)',
  description: 'Decentralized renewable energy trading platform enabling peer-to-peer solar power exchange and green energy certificates.',
  targetAmount: 5000000,
  raisedAmount: 5000000,
  daysLeft: 0,
  imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
  tokenSymbol: 'SLR',
  totalSupply: 1000000000,
  initialCirculation: 100000000,
  tgeDate: '2024-01-15',
  whitepaper: 'https://solartoken.energy/whitepaper.pdf',
  longDescription: 'SolarToken has successfully created a decentralized marketplace for renewable energy trading, enabling solar power producers to sell excess energy directly to consumers. The platform includes features for carbon credit trading and renewable energy certificates.',
  tokenomics: [
    { category: 'Public Sale', percentage: 30 },
    { category: 'Energy Infrastructure', percentage: 25 },
    { category: 'Community Rewards', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Sustainability Fund', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How does energy trading work?',
      answer: 'Energy producers can tokenize their excess solar power and sell it directly to consumers through our platform.'
    },
    {
      question: 'What about energy storage?',
      answer: 'We partner with battery storage providers to ensure reliable energy supply.'
    },
    {
      question: 'How are carbon credits tracked?',
      answer: 'Each energy transaction generates verifiable carbon credits on the blockchain.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Melbourne, Australia',
    employees: 30,
    investors: ['Green Energy Fund', 'Climate Tech Ventures', 'Renewable Capital'],
    partnerships: ['Tesla', 'SolarEdge', 'Green Energy Alliance'],
    socialLinks: {
      website: 'https://solartoken.energy',
      twitter: 'https://twitter.com/solartoken',
      telegram: 'https://t.me/solartoken',
      github: 'https://github.com/solartoken',
      linkedin: 'https://linkedin.com/company/solartoken'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Revolutionizing Renewable Energy Trading',
    description: 'See how SolarToken is transforming the renewable energy market.'
  },
  team: exampleTeam,
  comments: exampleComments
};