import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const defiChainProject: Project = {
  id: '1',
  title: 'DefiChain (DFX)',
  description: 'Revolutionary DeFi protocol token focusing on cross-chain liquidity and automated market making with minimal gas fees.',
  targetAmount: 5000000,
  raisedAmount: 3200000,
  daysLeft: 5,
  imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80',
  tokenSymbol: 'DFX',
  totalSupply: 1000000000,
  initialCirculation: 100000000,
  tgeDate: '2024-06-15',
  whitepaper: 'https://defichain.com/whitepaper.pdf',
  longDescription: 'DefiChain is building the next generation of decentralized finance protocols, enabling seamless cross-chain liquidity and automated market making with minimal gas fees. Our innovative approach combines the best aspects of DeFi with new technological breakthroughs in blockchain scalability.',
  tokenomics: [
    { category: 'Public Sale', percentage: 30 },
    { category: 'Team', percentage: 20 },
    { category: 'Treasury', percentage: 20 },
    { category: 'Ecosystem Growth', percentage: 15 },
    { category: 'Advisors', percentage: 10 },
    { category: 'Marketing', percentage: 5 }
  ],
  faqs: [
    {
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment amount is $500 USDT.'
    },
    {
      question: 'When is the token generation event (TGE)?',
      answer: 'The TGE is scheduled for June 15th, 2024.'
    },
    {
      question: 'What is the vesting schedule?',
      answer: '20% unlocked at TGE, then linear vesting over 12 months.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Singapore',
    employees: 45,
    investors: ['Binance Labs', 'Pantera Capital', 'a16z Crypto'],
    partnerships: ['Chainlink', 'Polygon', 'Arbitrum'],
    socialLinks: {
      website: 'https://defichain.com',
      twitter: 'https://twitter.com/defichain',
      telegram: 'https://t.me/defichain',
      github: 'https://github.com/defichain',
      linkedin: 'https://linkedin.com/company/defichain'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Introduction to DefiChain',
    description: 'CEO Sarah Chen explains our vision for the future of DeFi and cross-chain liquidity.'
  },
  team: exampleTeam,
  comments: exampleComments
};