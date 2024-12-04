import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const identityProject: Project = {
  id: '12',
  title: 'Identity Network (IDN)',
  description: 'Decentralized identity verification platform enabling secure and private digital identity management.',
  targetAmount: 6000000,
  raisedAmount: 6000000,
  daysLeft: 0,
  imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
  tokenSymbol: 'IDN',
  totalSupply: 800000000,
  initialCirculation: 80000000,
  tgeDate: '2024-01-20',
  whitepaper: 'https://identity.network/whitepaper.pdf',
  longDescription: 'Identity Network has successfully launched a comprehensive digital identity platform that enables users to maintain control over their personal data while providing verifiable credentials to service providers. The platform includes features for KYC/AML compliance, credential issuance, and selective disclosure.',
  tokenomics: [
    { category: 'Public Sale', percentage: 25 },
    { category: 'Platform Development', percentage: 30 },
    { category: 'Identity Infrastructure', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Security Fund', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How is user data protected?',
      answer: 'All personal data is encrypted and stored locally on user devices, with only verifiable credentials shared on-chain.'
    },
    {
      question: 'What identity standards are supported?',
      answer: 'We support W3C Verifiable Credentials, DID standards, and major KYC/AML frameworks.'
    },
    {
      question: 'How can businesses integrate the platform?',
      answer: 'Through our API and SDK that support major programming languages and frameworks.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Tallinn, Estonia',
    employees: 35,
    investors: ['Identity Ventures', 'Digital Privacy Fund', 'Blockchain Identity Group'],
    partnerships: ['Microsoft', 'Civic', 'Identity Foundation'],
    socialLinks: {
      website: 'https://identity.network',
      twitter: 'https://twitter.com/identitynetwork',
      telegram: 'https://t.me/identitynetwork',
      github: 'https://github.com/identitynetwork',
      linkedin: 'https://linkedin.com/company/identitynetwork'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'The Future of Digital Identity',
    description: 'Learn how Identity Network is revolutionizing digital identity management.'
  },
  team: exampleTeam,
  comments: exampleComments
};