export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  fullContent: string;
  relatedLinks: {
    title: string;
    url: string;
  }[];
  tags: string[];
  source?: string;
  sourceUrl?: string;
}