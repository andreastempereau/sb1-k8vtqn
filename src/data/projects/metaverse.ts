import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const metaverseProject: Project = {
  id: '3',
  title: 'MetaVerse Token (MVT)',
  description: 'Next-generation metaverse utility token powering virtual real estate and digital asset transactions.',
  targetAmount: 10000000,
  raisedAmount: 6800000,
  daysLeft: 12,
  imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
  tokenSymbol: 'MVT',
  totalSupply: 2000000000,
  initialCirculation: 200000000,
  tgeDate: '2024-08-01',
  whitepaper: 'https://metaverse.token/whitepaper.pdf',
  longDescription: 'MetaVerse Token is building the foundation for the next generation of virtual worlds. Our token powers transactions across multiple metaverse platforms, enabling seamless trading of virtual real estate, digital assets, and in-world items.',
  tokenomics: [
    { category: 'Public Sale', percentage: 35 },
    { category: 'Platform Development', percentage: 25 },
    { category: 'Team', percentage: 15 },
    { category: 'Marketing', percentage: 15 },
    { category: 'Advisors', percentage: 10 }
  ],
  faqs: [
    {
      question: 'Which metaverse platforms are supported?',
      answer: 'We launch with support for 5 major platforms including Decentraland and The Sandbox.'
    },
    {
      question: 'What is the token utility?',
      answer: 'MVT is used for all virtual real estate transactions, marketplace fees, and governance.'
    },
    {
      question: 'Is there a staking program?',
      answer: 'Yes, token holders can stake MVT to earn platform fees and exclusive NFT drops.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Seoul, South Korea',
    employees: 50,
    investors: ['Meta Ventures', 'Digital Worlds Capital', 'NFT Ventures'],
    partnerships: ['Decentraland', 'The Sandbox', 'Crypto Gaming Alliance'],
    socialLinks: {
      website: 'https://metaverse.token',
      twitter: 'https://twitter.com/metaversetoken',
      telegram: 'https://t.me/metaversetoken',
      github: 'https://github.com/metaversetoken',
      linkedin: 'https://linkedin.com/company/metaversetoken'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Building the Future of Virtual Worlds',
    description: 'Explore how MetaVerse Token is connecting digital economies across the metaverse.'
  },
  team: exampleTeam,
  comments: exampleComments
};