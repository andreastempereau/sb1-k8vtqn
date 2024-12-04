import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const gamefiProject: Project = {
  id: '5',
  title: 'GameFi Network (GFN)',
  description: 'Unified gaming ecosystem token enabling cross-game asset trading, play-to-earn mechanics, and seamless in-game currency conversion.',
  targetAmount: 12000000,
  raisedAmount: 7200000,
  daysLeft: 10,
  imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80',
  tokenSymbol: 'GFN',
  totalSupply: 1500000000,
  initialCirculation: 150000000,
  tgeDate: '2024-07-30',
  whitepaper: 'https://gamefi.network/whitepaper.pdf',
  longDescription: 'GameFi Network is building the ultimate gaming ecosystem that connects multiple blockchain games through a unified token system. Our platform enables seamless asset trading between different games, standardized play-to-earn mechanics, and instant currency conversion. The GFN token serves as the backbone of this ecosystem, powering transactions, rewards, and governance.',
  tokenomics: [
    { category: 'Public Sale', percentage: 30 },
    { category: 'Game Development Fund', percentage: 25 },
    { category: 'Ecosystem Rewards', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Marketing', percentage: 10 }
  ],
  faqs: [
    {
      question: 'Which games are supported at launch?',
      answer: 'We launch with support for 10 major blockchain games, with more being added monthly.'
    },
    {
      question: 'How does cross-game asset trading work?',
      answer: 'Assets are wrapped as standardized NFTs that can be traded and used across all supported games.'
    },
    {
      question: 'What are the play-to-earn mechanics?',
      answer: 'Players earn GFN tokens through gameplay, competitions, and asset trading.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Tokyo, Japan',
    employees: 55,
    investors: ['Gaming Ventures', 'Blockchain Gaming Fund', 'NFT Capital', 'Play2Earn VC'],
    partnerships: ['Unity', 'Epic Games', 'Blockchain Gaming Alliance', 'Game Asset Exchange'],
    socialLinks: {
      website: 'https://gamefi.network',
      twitter: 'https://twitter.com/gamefinetwork',
      telegram: 'https://t.me/gamefinetwork',
      github: 'https://github.com/gamefinetwork',
      linkedin: 'https://linkedin.com/company/gamefinetwork'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'The Future of Blockchain Gaming',
    description: 'See how GameFi Network is revolutionizing the gaming industry with blockchain technology.'
  },
  team: exampleTeam,
  comments: exampleComments
};