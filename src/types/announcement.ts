export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'important' | 'update' | 'maintenance';
  date: string;
  link?: string;
}