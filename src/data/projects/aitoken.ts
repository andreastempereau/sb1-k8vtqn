import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const aiTokenProject: Project = {
  id: '4',
  title: 'AI Governance Token (AGT)',
  description: 'Decentralized governance token for AI model training and deployment, enabling community-driven artificial intelligence development.',
  targetAmount: 15000000,
  raisedAmount: 8500000,
  daysLeft: 15,
  imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  tokenSymbol: 'AGT',
  totalSupply: 1000000000,
  initialCirculation: 100000000,
  tgeDate: '2024-07-15',
  whitepaper: 'https://aigovernance.token/whitepaper.pdf',
  longDescription: 'AI Governance Token is revolutionizing the way artificial intelligence models are trained, validated, and deployed. Our platform enables token holders to participate in crucial decisions about AI development, ensuring transparency and ethical considerations in the evolution of artificial intelligence. The AGT ecosystem includes a decentralized marketplace for AI models, a governance framework for model validation, and incentive mechanisms for high-quality training data contribution.',
  tokenomics: [
    { category: 'Public Sale', percentage: 30 },
    { category: 'AI Development Fund', percentage: 25 },
    { category: 'Community Rewards', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Advisors', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How does AGT ensure ethical AI development?',
      answer: 'Through our governance framework, token holders can vote on ethical guidelines, model validation criteria, and data usage policies.'
    },
    {
      question: 'What are the token utilities?',
      answer: 'AGT is used for governance voting, accessing AI models, contributing training data, and earning rewards from model usage.'
    },
    {
      question: 'Is there a staking mechanism?',
      answer: 'Yes, token holders can stake AGT to earn a share of platform fees and participate in governance decisions.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Cambridge, UK',
    employees: 40,
    investors: ['AI Ventures', 'Tech Innovations Fund', 'Quantum Capital', 'Future Labs'],
    partnerships: ['OpenAI', 'DeepMind', 'AI Ethics Board', 'Data Consortium'],
    socialLinks: {
      website: 'https://aigovernance.token',
      twitter: 'https://twitter.com/aigovernance',
      telegram: 'https://t.me/aigovernance',
      github: 'https://github.com/aigovernance',
      linkedin: 'https://linkedin.com/company/aigovernance'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Democratizing AI Development',
    description: 'Learn how AGT is creating a more transparent and ethical AI development ecosystem.'
  },
  team: exampleTeam,
  comments: exampleComments
};