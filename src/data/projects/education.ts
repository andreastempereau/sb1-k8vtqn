import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const educationProject: Project = {
  id: '15',
  title: 'Education Token (EDU)',
  description: 'Decentralized education platform enabling credential verification, skill tokenization, and learning incentives.',
  targetAmount: 5000000,
  raisedAmount: 5000000,
  daysLeft: 0,
  imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
  tokenSymbol: 'EDU',
  totalSupply: 1000000000,
  initialCirculation: 100000000,
  tgeDate: '2024-02-01',
  whitepaper: 'https://education.token/whitepaper.pdf',
  longDescription: 'Education Token has successfully launched a comprehensive platform for decentralized education, enabling verifiable credentials, skill-based tokens, and incentivized learning programs. The platform connects educators, students, and employers in a transparent ecosystem.',
  tokenomics: [
    { category: 'Public Sale', percentage: 30 },
    { category: 'Education Development', percentage: 25 },
    { category: 'Learning Rewards', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Research Fund', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How are credentials verified?',
      answer: 'Through a decentralized network of accredited institutions using blockchain verification.'
    },
    {
      question: 'What are skill tokens?',
      answer: 'Tokens that represent verified skills and can be used for job applications.'
    },
    {
      question: 'How are learners incentivized?',
      answer: 'Through token rewards for completing courses and achieving learning milestones.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Dublin, Ireland',
    employees: 35,
    investors: ['Education Ventures', 'Learning Innovation Fund', 'EdTech Capital'],
    partnerships: ['Coursera', 'Udacity', 'Education Alliance'],
    socialLinks: {
      website: 'https://education.token',
      twitter: 'https://twitter.com/educationtoken',
      telegram: 'https://t.me/educationtoken',
      github: 'https://github.com/educationtoken',
      linkedin: 'https://linkedin.com/company/educationtoken'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Revolutionizing Education',
    description: 'Learn how Education Token is transforming the future of learning.'
  },
  team: exampleTeam,
  comments: exampleComments
};