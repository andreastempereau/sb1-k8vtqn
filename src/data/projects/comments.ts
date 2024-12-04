import { Comment } from '../../types/comment';

export const exampleComments: Comment[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Alex Thompson',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      isTeamMember: false
    },
    content: "Really impressed with the technical architecture and the team background. Looking forward to the launch!",
    date: '2024-02-20T10:30:00Z',
    upvotes: 24,
    downvotes: 2,
    replies: [
      {
        id: '2',
        author: {
          id: '2',
          name: 'Sarah Chen',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
          role: 'CEO & Co-founder',
          isTeamMember: true
        },
        content: "Thanks Alex! We are working hard to ensure everything is ready for the TGE. Stay tuned for more updates!",
        date: '2024-02-20T11:15:00Z',
        upvotes: 15,
        downvotes: 0,
        replies: []
      }
    ]
  },
  {
    id: '3',
    author: {
      id: '3',
      name: 'Emma Wilson',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      isTeamMember: false
    },
    content: 'Could you provide more details about the token vesting schedule for early investors?',
    date: '2024-02-19T15:45:00Z',
    upvotes: 18,
    downvotes: 1,
    replies: [
      {
        id: '4',
        author: {
          id: '4',
          name: 'Michael Rodriguez',
          imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
          role: 'CTO',
          isTeamMember: true
        },
        content: 'Early investors will have 20% of their tokens unlocked at TGE, with the remaining 80% vesting linearly over 12 months.',
        date: '2024-02-19T16:20:00Z',
        upvotes: 12,
        downvotes: 0,
        replies: []
      }
    ]
  }
];