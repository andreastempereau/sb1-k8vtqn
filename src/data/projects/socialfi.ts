import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const socialFiProject: Project = {
  id: '14',
  title: 'SocialFi Platform (SFT)',
  description: 'Decentralized social media platform with integrated DeFi features enabling content monetization and social token creation.',
  targetAmount: 7000000,
  raisedAmount: 7000000,
  daysLeft: 0,
  imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
  tokenSymbol: 'SFT',
  totalSupply: 1000000000,
  initialCirculation: 100000000,
  tgeDate: '2024-01-30',
  whitepaper: 'https://socialfi.platform/whitepaper.pdf',
  longDescription: 'SocialFi Platform has successfully launched a decentralized social media platform that combines social networking with DeFi features. Users can monetize content, create personal tokens, and participate in social token trading.',
  tokenomics: [
    { category: 'Public Sale', percentage: 30 },
    { category: 'Platform Development', percentage: 25 },
    { category: 'Creator Fund', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Marketing', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How do creators monetize content?',
      answer: 'Through direct tipping, content NFTs, and revenue sharing from platform activities.'
    },
    {
      question: 'What are personal tokens?',
      answer: 'Creators can launch their own tokens that represent a share in their future earnings.'
    },
    {
      question: 'How is content moderation handled?',
      answer: 'Through a decentralized moderation system where token holders vote on content policies.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Seoul, South Korea',
    employees: 45,
    investors: ['Social Media Ventures', 'Creator Economy Fund', 'Web3 Social Capital'],
    partnerships: ['TikTok', 'Instagram', 'Creator DAO'],
    socialLinks: {
      website: 'https://socialfi.platform',
      twitter: 'https://twitter.com/socialfiplatform',
      telegram: 'https://t.me/socialfiplatform',
      github: 'https://github.com/socialfiplatform',
      linkedin: 'https://linkedin.com/company/socialfiplatform'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'The Future of Social Media',
    description: 'Discover how SocialFi Platform is revolutionizing content creation and monetization.'
  },
  team: exampleTeam,
  comments: exampleComments
};