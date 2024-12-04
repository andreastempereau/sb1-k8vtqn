import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const dataStorageProject: Project = {
  id: '7',
  title: 'DataStorage Network (DSN)',
  description: 'Decentralized storage network enabling secure, scalable, and cost-effective data storage solutions for Web3 applications.',
  targetAmount: 6000000,
  raisedAmount: 4800000,
  daysLeft: 5,
  imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
  tokenSymbol: 'DSN',
  totalSupply: 1200000000,
  initialCirculation: 120000000,
  tgeDate: '2024-03-20',
  whitepaper: 'https://datastorage.network/whitepaper.pdf',
  longDescription: 'DataStorage Network is revolutionizing decentralized storage with an innovative approach that combines high performance, security, and cost-effectiveness. Our platform enables developers to easily integrate decentralized storage into their applications while ensuring data privacy and redundancy.',
  tokenomics: [
    { category: 'Public Sale', percentage: 25 },
    { category: 'Network Development', percentage: 30 },
    { category: 'Storage Node Incentives', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Ecosystem Growth', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How does the storage network ensure data availability?',
      answer: 'We use a distributed network of nodes with redundant storage and automatic failover mechanisms.'
    },
    {
      question: 'What are the storage node requirements?',
      answer: 'Nodes must stake DSN tokens and maintain 99.9% uptime with sufficient storage capacity.'
    },
    {
      question: 'How is data privacy maintained?',
      answer: 'All data is encrypted client-side and split across multiple nodes using erasure coding.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Berlin, Germany',
    employees: 40,
    investors: ['Storage Ventures', 'Web3 Capital', 'Infrastructure Fund'],
    partnerships: ['AWS', 'Cloudflare', 'Web3 Storage Alliance'],
    socialLinks: {
      website: 'https://datastorage.network',
      twitter: 'https://twitter.com/datastoragetoken',
      telegram: 'https://t.me/datastorage',
      github: 'https://github.com/datastorage',
      linkedin: 'https://linkedin.com/company/datastorage'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'The Future of Decentralized Storage',
    description: 'Learn how DataStorage Network is revolutionizing Web3 storage solutions.'
  },
  team: exampleTeam,
  comments: exampleComments
};