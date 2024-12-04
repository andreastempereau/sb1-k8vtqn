import { Announcement } from '../types/announcement';

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Platform Maintenance Schedule',
    content: 'Scheduled maintenance will be performed on February 25th from 2:00 AM to 4:00 AM UTC. During this time, the platform will be unavailable.',
    type: 'maintenance',
    date: '2024-02-23'
  },
  {
    id: '2',
    title: 'New Security Features Released',
    content: 'We have implemented additional security measures including 2FA and enhanced wallet connection protocols.',
    type: 'important',
    date: '2024-02-22',
    link: '/security-update'
  },
  {
    id: '3',
    title: 'Updated KYC Requirements',
    content: 'New KYC verification requirements will be effective starting March 1st. Please ensure your verification is up to date.',
    type: 'update',
    date: '2024-02-21'
  }
];