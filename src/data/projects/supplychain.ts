import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const supplyChainProject: Project = {
  id: '13',
  title: 'SupplyChain Token (SCT)',
  description: 'Blockchain-based supply chain management platform enabling transparent tracking and verification of goods.',
  targetAmount: 8000000,
  raisedAmount: 8000000,
  daysLeft: 0,
  imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
  tokenSymbol: 'SCT',
  totalSupply: 1200000000,
  initialCirculation: 120000000,
  tgeDate: '2024-01-25',
  whitepaper: 'https://supplychain.token/whitepaper.pdf',
  longDescription: 'SupplyChain Token has successfully launched a comprehensive platform for end-to-end supply chain tracking and verification. The platform enables real-time monitoring of goods, automated customs clearance, and transparent supply chain financing.',
  tokenomics: [
    { category: 'Public Sale', percentage: 30 },
    { category: 'Platform Development', percentage: 25 },
    { category: 'Industry Integration', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Partnership Fund', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How are goods tracked on the platform?',
      answer: 'Through IoT devices, QR codes, and RFID tags that integrate with our blockchain network.'
    },
    {
      question: 'What industries are supported?',
      answer: 'Food and beverage, pharmaceuticals, luxury goods, and general merchandise.'
    },
    {
      question: 'How is supply chain financing handled?',
      answer: 'Through smart contracts that automate payments based on verified milestones.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Rotterdam, Netherlands',
    employees: 40,
    investors: ['Logistics Capital', 'Supply Chain Ventures', 'Trade Finance Fund'],
    partnerships: ['Maersk', 'DHL', 'World Trade Organization'],
    socialLinks: {
      website: 'https://supplychain.token',
      twitter: 'https://twitter.com/supplychaintoken',
      telegram: 'https://t.me/supplychaintoken',
      github: 'https://github.com/supplychaintoken',
      linkedin: 'https://linkedin.com/company/supplychaintoken'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Transforming Global Supply Chains',
    description: 'See how SupplyChain Token is revolutionizing supply chain management.'
  },
  team: exampleTeam,
  comments: exampleComments
};