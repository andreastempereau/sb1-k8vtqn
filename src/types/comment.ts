export interface Comment {
  id: string;
  author: {
    id: string;
    name: string;
    imageUrl: string;
    role?: string;
    isTeamMember?: boolean;
  };
  content: string;
  date: string;
  upvotes: number;
  downvotes: number;
  replies: Comment[];
  isEdited?: boolean;
}