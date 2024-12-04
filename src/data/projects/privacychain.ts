import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const privacyChainProject: Project = {
  id: '6',
  title: 'PrivacyChain (PRC)',
  description: 'Zero-knowledge proof blockchain platform enabling private transactions and confidential smart contracts for enterprise use.',
  targetAmount: 8000000,
  raisedAmount: 6400000,
  daysLeft: 3,
  imageUrl: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80',
  tokenSymbol: 'PRC',
  totalSupply: 800000000,
  initialCirculation: 80000000,
  tgeDate: '2024-03-15',
  whitepaper: 'https://privacychain.network/whitepaper.pdf',
  longDescription: 'PrivacyChain is revolutionizing enterprise blockchain adoption by providing zero-knowledge proof technology for confidential transactions and smart contracts. Our platform enables businesses to leverage blockchain transparency while maintaining data privacy, making it ideal for industries like healthcare, finance, and supply chain management.',
  tokenomics: [
    { category: 'Public Sale', percentage: 25 },
    { category: 'Enterprise Development', percentage: 30 },
    { category: 'Research Fund', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Advisors', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How does the zero-knowledge proof system work?',
      answer: 'Our system uses advanced cryptographic techniques to verify transactions without revealing sensitive data.'
    },
    {
      question: 'What industries can benefit from PrivacyChain?',
      answer: 'Healthcare, finance, supply chain, and any industry requiring confidential blockchain transactions.'
    },
    {
      question: 'Is the platform regulatory compliant?',
      answer: 'Yes, we comply with GDPR, HIPAA, and other major privacy regulations.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Zug, Switzerland',
    employees: 45,
    investors: ['Privacy Ventures', 'Enterprise Blockchain Fund', 'Crypto Privacy Group'],
    partnerships: ['IBM', 'Deloitte', 'Privacy Alliance', 'Enterprise Blockchain Consortium'],
    socialLinks: {
      website: 'https://privacychain.network',
      twitter: 'https://twitter.com/privacychain',
      telegram: 'https://t.me/privacychain',
      github: 'https://github.com/privacychain',
      linkedin: 'https://linkedin.com/company/privacychain'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Privacy-First Enterprise Blockchain',
    description: 'Learn how PrivacyChain is enabling confidential blockchain transactions for enterprises.'
  },
  team: exampleTeam,
  comments: exampleComments
};