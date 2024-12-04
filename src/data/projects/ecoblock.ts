import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const ecoBlockProject: Project = {
  id: '2',
  title: 'EcoBlock (ECO)',
  description: 'Sustainable blockchain platform token utilizing proof-of-stake consensus with carbon-neutral transaction validation.',
  targetAmount: 7500000,
  raisedAmount: 4500000,
  daysLeft: 8,
  imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
  tokenSymbol: 'ECO',
  totalSupply: 500000000,
  initialCirculation: 50000000,
  tgeDate: '2024-07-01',
  whitepaper: 'https://ecoblock.green/whitepaper.pdf',
  longDescription: 'EcoBlock is revolutionizing blockchain sustainability with our innovative proof-of-stake consensus mechanism that ensures carbon-neutral transaction validation. Our platform is designed to provide enterprise-grade blockchain solutions while maintaining environmental responsibility.',
  tokenomics: [
    { category: 'Public Sale', percentage: 25 },
    { category: 'Team', percentage: 15 },
    { category: 'Treasury', percentage: 25 },
    { category: 'Ecosystem Growth', percentage: 20 },
    { category: 'Advisors', percentage: 10 },
    { category: 'Carbon Offset Fund', percentage: 5 }
  ],
  faqs: [
    {
      question: 'What makes EcoBlock environmentally friendly?',
      answer: 'Our proof-of-stake consensus mechanism uses 99.9% less energy than traditional proof-of-work systems.'
    },
    {
      question: 'What is the minimum investment amount?',
      answer: 'The minimum investment amount is $1,000 USDT.'
    },
    {
      question: 'How will funds be used?',
      answer: '40% development, 30% marketing, 20% operations, 10% legal and compliance.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Zurich, Switzerland',
    employees: 35,
    investors: ['Green Earth Capital', 'Climate Tech Fund', 'Sustainable Future VC'],
    partnerships: ['Carbon Zero Alliance', 'Green Grid Foundation', 'Climate Chain Coalition'],
    socialLinks: {
      website: 'https://ecoblock.green',
      twitter: 'https://twitter.com/ecoblock',
      telegram: 'https://t.me/ecoblock',
      github: 'https://github.com/ecoblock',
      linkedin: 'https://linkedin.com/company/ecoblock'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'EcoBlock: Sustainable Blockchain for the Future',
    description: 'Learn how EcoBlock is revolutionizing blockchain sustainability.'
  },
  team: exampleTeam,
  comments: exampleComments
};