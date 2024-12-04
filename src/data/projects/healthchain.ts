import { Project } from '../../types/project';
import { exampleTeam } from './team';
import { exampleComments } from './comments';

export const healthchainProject: Project = {
  id: '9',
  title: 'HealthChain (HLT)',
  description: 'Decentralized healthcare data management platform enabling secure sharing of medical records and research data.',
  targetAmount: 7500000,
  raisedAmount: 4500000,
  daysLeft: 6,
  imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
  tokenSymbol: 'HLT',
  totalSupply: 750000000,
  initialCirculation: 75000000,
  tgeDate: '2024-03-30',
  whitepaper: 'https://healthchain.network/whitepaper.pdf',
  longDescription: 'HealthChain is revolutionizing healthcare data management by providing a secure, compliant platform for sharing medical records and research data. Our blockchain solution ensures patient privacy while enabling seamless collaboration between healthcare providers, researchers, and insurance companies.',
  tokenomics: [
    { category: 'Public Sale', percentage: 25 },
    { category: 'Healthcare Integration', percentage: 30 },
    { category: 'Research Grants', percentage: 20 },
    { category: 'Team', percentage: 15 },
    { category: 'Compliance & Security', percentage: 10 }
  ],
  faqs: [
    {
      question: 'How is patient privacy protected?',
      answer: 'We use advanced encryption and zero-knowledge proofs to ensure HIPAA compliance and data privacy.'
    },
    {
      question: 'What healthcare standards are supported?',
      answer: 'HL7, FHIR, DICOM, and other major healthcare data standards are fully supported.'
    },
    {
      question: 'How can healthcare providers join the network?',
      answer: 'Providers can integrate through our API or use our turnkey solutions for major EMR systems.'
    }
  ],
  companyProfile: {
    founded: '2023',
    location: 'Boston, USA',
    employees: 45,
    investors: ['Healthcare Ventures', 'Medical Innovation Fund', 'Digital Health Capital'],
    partnerships: ['Mayo Clinic', 'Blue Cross', 'Healthcare Blockchain Alliance'],
    socialLinks: {
      website: 'https://healthchain.network',
      twitter: 'https://twitter.com/healthchain',
      telegram: 'https://t.me/healthchain',
      github: 'https://github.com/healthchain',
      linkedin: 'https://linkedin.com/company/healthchain'
    }
  },
  founderVideo: {
    thumbnailUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    title: 'Transforming Healthcare Data Management',
    description: 'Learn how HealthChain is revolutionizing healthcare data sharing and security.'
  },
  team: exampleTeam,
  comments: exampleComments
};