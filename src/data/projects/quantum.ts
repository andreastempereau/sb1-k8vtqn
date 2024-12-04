import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const quantumProject: Project = {
  id: '10',
  title: 'Quantum Computing Token (QCT)',
  description: 'Decentralized quantum computing platform enabling access to quantum processing power and quantum-resistant cryptography.',
  targetAmount: 20000000,
  raisedAmount: 14000000,
  daysLeft: 4,
  imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  tokenSymbol: 'QCT',
  totalSupply: 500000000,
  initialCirculation: 50000000,
  tgeDate: '2024-04-01',
  whitepaper: 'https://quantum.token/whitepaper.pdf',
  longDescription: 'Quantum Computing Token is democratizing access to quantum computing resources while preparing blockchain networks for the quantum era. Our platform provides quantum-resistant cryptography solutions and enables developers to harness quantum processing power for complex calculations.',
  tokenomics: [
    { category: 'Public Sale', percentage: 25 },
    { category: 'Quantum Research', percentage: 30 },
    { category: 'Network Development', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Security Fund', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How does quantum-resistant cryptography work?',
      answer: 'We use post-quantum cryptographic algorithms that are resistant to both classical and quantum computer attacks.'
    },
    {
      question: 'What quantum computing resources are available?',
      answer: 'Access to quantum simulators and real quantum computers through partnerships with major providers.'
    },
    {
      question: 'How can developers use the platform?',
      answer: 'Through our SDK and API that abstract quantum computing complexity into simple interfaces.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Waterloo, Canada',
    employees: 35,
    investors: ['Quantum Ventures', 'Deep Tech Fund', 'Future Computing Capital'],
    partnerships: ['IBM Quantum', 'D-Wave', 'Quantum Alliance'],
    socialLinks: {
      website: 'https://quantum.token',
      twitter: 'https://twitter.com/quantumtoken',
      telegram: 'https://t.me/quantumtoken',
      github: 'https://github.com/quantumtoken',
      linkedin: 'https://linkedin.com/company/quantumtoken'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Preparing for the Quantum Future',
    description: 'Explore how Quantum Computing Token is revolutionizing blockchain security and quantum access.'
  },
  team: exampleTeam,
  comments: exampleComments
};