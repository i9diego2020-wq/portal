export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          color: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          color?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          color?: string | null;
          updated_at?: string;
        };
      };
      topics: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          category_id: string | null;
          is_active: boolean;
          articles_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          category_id?: string | null;
          is_active?: boolean;
          articles_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          category_id?: string | null;
          is_active?: boolean;
          articles_count?: number;
          updated_at?: string;
        };
      };
      articles: {
        Row: {
          id: string;
          title: string;
          subtitle: string;
          slug: string;
          content: string;
          summary: string | null;
          category_id: string;
          topic_id: string | null;
          cover_image: string;
          image_alt: string;
          author: string;
          read_time: string | null;
          views_count: number;
          is_featured: boolean;
          is_popular: boolean;
          status: string;
          published_at: string;
          meta_title: string;
          meta_description: string;
          primary_keyword: string | null;
          secondary_keywords: string[] | null;
          canonical_url: string | null;
          tags: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          subtitle: string;
          slug: string;
          content: string;
          summary?: string | null;
          category_id: string;
          topic_id?: string | null;
          cover_image: string;
          image_alt: string;
          author?: string;
          read_time?: string | null;
          views_count?: number;
          is_featured?: boolean;
          is_popular?: boolean;
          status?: string;
          published_at?: string;
          meta_title: string;
          meta_description: string;
          primary_keyword?: string | null;
          secondary_keywords?: string[] | null;
          canonical_url?: string | null;
          tags?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          subtitle?: string;
          slug?: string;
          content?: string;
          summary?: string | null;
          category_id?: string;
          topic_id?: string | null;
          cover_image?: string;
          image_alt?: string;
          author?: string;
          read_time?: string | null;
          views_count?: number;
          is_featured?: boolean;
          is_popular?: boolean;
          status?: string;
          published_at?: string;
          meta_title?: string;
          meta_description?: string;
          primary_keyword?: string | null;
          secondary_keywords?: string[] | null;
          canonical_url?: string | null;
          tags?: string[] | null;
          updated_at?: string;
        };
      };
      article_sources: {
        Row: {
          id: string;
          article_id: string;
          source_name: string;
          source_url: string;
          source_title: string;
          accessed_at: string;
          created_at: string;
        };
      };
      ai_jobs: {
        Row: {
          id: string;
          topic_id: string | null;
          topic_name: string | null;
          chosen_subject: string | null;
          model_used: string;
          status: string;
          execution_time_ms: number | null;
          tokens_prompt: number | null;
          tokens_completion: number | null;
          tokens_total: number | null;
          estimated_cost: number | null;
          published_article_id: string | null;
          published_article_url: string | null;
          error_message: string | null;
          created_at: string;
          completed_at: string | null;
        };
      };
      ai_settings: {
        Row: {
          id: string;
          provider: string;
          model_name: string;
          temperature: number;
          language: string;
          editorial_tone: string;
          min_words: number;
          max_words: number;
          enable_web_search: boolean;
          enable_image_generation: boolean;
          is_automation_active: boolean;
          daily_articles_limit: number;
          scheduled_hour_brt: number;
          created_at: string;
          updated_at: string;
        };
      };
      site_settings: {
        Row: {
          id: string;
          site_name: string;
          site_domain: string;
          company_name: string;
          company_tax_id: string;
          contact_email: string;
          maintenance_mode: boolean;
          created_at: string;
          updated_at: string;
        };
      };
      admin_users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: string;
          is_active: boolean;
          last_login_at: string | null;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
}
