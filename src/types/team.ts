export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  experience: {
    company: string;
    role: string;
    period: string;
  }[];
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
}