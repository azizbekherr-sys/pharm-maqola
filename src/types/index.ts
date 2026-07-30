export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  imageUrl: string;
  readTime: number;
  updatedDate: string;
  publishedDate: string;
  isReviewed: boolean;
  isFeatured?: boolean;
  reviewer?: Doctor;
  content?: string;
  sections?: ArticleSection[];
  sources?: Source[];
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  articleCount: number;
}

export interface Doctor {
  slug: string;
  name: string;
  specialty: string;
  avatarUrl: string;
  experience: string;
  articleCount: number;
  bio?: string;
  education?: string[];
  specializations?: string[];
  workplace?: string;
}

export interface Source {
  id: number;
  name: string;
  publisher: string;
  url: string;
  year: number;
}

export interface SearchResult {
  articles: Article[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export type CalloutVariant = 'info' | 'medical' | 'warning' | 'emergency';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
