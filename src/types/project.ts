import { TeamMember } from './team';
import { Comment } from './comment';

export interface Project {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  raisedAmount: number;
  daysLeft: number;
  imageUrl: string;
  tokenSymbol: string;
  totalSupply: number;
  initialCirculation: number;
  tgeDate: string;
  whitepaper: string;
  longDescription: string;
  tokenomics: {
    category: string;
    percentage: number;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  companyProfile: {
    founded: string;
    location: string;
    employees: number;
    investors: string[];
    partnerships: string[];
    socialLinks: {
      website: string;
      twitter: string;
      telegram: string;
      github?: string;
      linkedin?: string;
    };
  };
  founderVideo: {
    thumbnailUrl: string;
    videoUrl: string;
    title: string;
    description: string;
  };
  team: TeamMember[];
  comments: Comment[];
}