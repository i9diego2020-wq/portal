export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  category: Category;
  coverImage: string;
  imageAlt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  popular?: boolean;
  tags: string[];
}
