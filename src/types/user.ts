export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
  walletAddress: string;
  joinDate: string;
  investedProjects: string[];
  totalInvested: number;
  kycStatus: 'pending' | 'verified' | 'unverified';
  preferences: {
    emailNotifications: boolean;
    twoFactorEnabled: boolean;
  };
}