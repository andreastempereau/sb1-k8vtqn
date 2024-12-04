import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const smartCityProject: Project = {
  id: '8',
  title: 'SmartCity Token (SCT)',
  description: 'Blockchain-based urban infrastructure management token enabling smart city initiatives and IoT device integration.',
  targetAmount: 9000000,
  raisedAmount: 5400000,
  daysLeft: 7,
  imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80',
  tokenSymbol: 'SCT',
  totalSupply: 1000000000,
  initialCirculation: 100000000,
  tgeDate: '2024-03-25',
  whitepaper: 'https://smartcity.token/whitepaper.pdf',
  longDescription: 'SmartCity Token is building the foundation for next-generation urban infrastructure management. Our platform connects IoT devices, city services, and citizens through a unified blockchain network, enabling efficient resource allocation, automated service delivery, and transparent governance of smart city initiatives.',
  tokenomics: [
    { category: 'Public Sale', percentage: 30 },
    { category: 'Infrastructure Development', percentage: 25 },
    { category: 'City Partnership Fund', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Research & Development', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How does SCT integrate with existing city infrastructure?',
      answer: 'We provide API integration layers and IoT device connectors that work with existing urban systems.'
    },
    {
      question: 'What smart city services are supported?',
      answer: 'Traffic management, waste management, energy distribution, public transportation, and emergency services.'
    },
    {
      question: 'How can cities participate in the network?',
      answer: 'Cities can become network validators and earn rewards for providing infrastructure and data.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Singapore',
    employees: 60,
    investors: ['Urban Tech Fund', 'Smart City Ventures', 'IoT Capital'],
    partnerships: ['Cisco', 'Siemens', 'Smart Cities Alliance'],
    socialLinks: {
      website: 'https://smartcity.token',
      twitter: 'https://twitter.com/smartcitytoken',
      telegram: 'https://t.me/smartcitytoken',
      github: 'https://github.com/smartcitytoken',
      linkedin: 'https://linkedin.com/company/smartcitytoken'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Building Smart Cities of Tomorrow',
    description: 'Discover how SmartCity Token is revolutionizing urban infrastructure management.'
  },
  team: exampleTeam,
  comments: exampleComments
};