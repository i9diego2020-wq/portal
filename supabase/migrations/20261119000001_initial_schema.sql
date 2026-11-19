-- ==============================================================================
-- PROJETO: PORTAL INFO BR (portalinfobr.cc)
-- RESPONSÁVEL: Peter Port Solucoes Digitais (40088094000117)
-- MIGRATION 001: ESTRUTURA COMPLETA DO BANCO DE DADOS
-- ==============================================================================

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 1. TABELA: categories (Categorias editoriais do portal)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(120) NOT NULL UNIQUE,
    description TEXT,
    color VARCHAR(20) DEFAULT '#0284c7',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- 2. TABELA: topics (Temas cadastrados pelo administrador para a IA sortear)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(150) NOT NULL UNIQUE,
    description TEXT,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    articles_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- 3. TABELA: articles (Artigos completos gerados e publicados)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    subtitle TEXT NOT NULL,
    slug VARCHAR(280) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    summary TEXT,
    category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
    topic_id UUID REFERENCES public.topics(id) ON DELETE SET NULL,
    cover_image TEXT NOT NULL,
    image_alt TEXT NOT NULL,
    author VARCHAR(100) NOT NULL DEFAULT 'Redação Portal Info BR',
    read_time VARCHAR(30) DEFAULT '5 min de leitura',
    views_count INTEGER NOT NULL DEFAULT 0,
    is_featured BOOLEAN NOT NULL DEFAULT false,
    is_popular BOOLEAN NOT NULL DEFAULT false,
    status VARCHAR(30) NOT NULL DEFAULT 'published', -- 'published', 'draft', 'archived'
    published_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    
    -- Metadados de SEO
    meta_title VARCHAR(255) NOT NULL,
    meta_description VARCHAR(300) NOT NULL,
    primary_keyword VARCHAR(100),
    secondary_keywords TEXT[], -- array de palavras-chave
    canonical_url TEXT,
    tags TEXT[],
    
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- 4. TABELA: article_sources (Fontes e referências verificadas na internet)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.article_sources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    article_id UUID NOT NULL REFERENCES public.articles(id) ON DELETE CASCADE,
    source_name VARCHAR(150) NOT NULL,
    source_url TEXT NOT NULL,
    source_title TEXT NOT NULL,
    accessed_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- 5. TABELA: ai_jobs (Histórico e auditoria de cada execução da inteligência artificial)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.ai_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id UUID REFERENCES public.topics(id) ON DELETE SET NULL,
    topic_name VARCHAR(150),
    chosen_subject TEXT,
    model_used VARCHAR(100) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'pending', -- 'pending', 'running', 'completed', 'failed'
    execution_time_ms INTEGER,
    tokens_prompt INTEGER DEFAULT 0,
    tokens_completion INTEGER DEFAULT 0,
    tokens_total INTEGER DEFAULT 0,
    estimated_cost NUMERIC(10, 6) DEFAULT 0.000000,
    published_article_id UUID REFERENCES public.articles(id) ON DELETE SET NULL,
    published_article_url TEXT,
    error_message TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    completed_at TIMESTAMPTZ
);

-- ==============================================================================
-- 6. TABELA: ai_settings (Configurações do motor de Inteligência Artificial)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.ai_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider VARCHAR(50) NOT NULL DEFAULT 'google_gemini',
    model_name VARCHAR(100) NOT NULL DEFAULT 'gemini-1.5-pro',
    temperature NUMERIC(3, 2) NOT NULL DEFAULT 0.70,
    language VARCHAR(10) NOT NULL DEFAULT 'pt-BR',
    editorial_tone VARCHAR(50) NOT NULL DEFAULT 'analitico_jornalistico',
    min_words INTEGER NOT NULL DEFAULT 1200,
    max_words INTEGER NOT NULL DEFAULT 1800,
    enable_web_search BOOLEAN NOT NULL DEFAULT true,
    enable_image_generation BOOLEAN NOT NULL DEFAULT true,
    is_automation_active BOOLEAN NOT NULL DEFAULT true,
    daily_articles_limit INTEGER NOT NULL DEFAULT 1,
    scheduled_hour_brt INTEGER NOT NULL DEFAULT 9, -- 09:00 Horário de Brasília
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- 7. TABELA: site_settings (Configurações gerais do Portal Info BR)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_name VARCHAR(100) NOT NULL DEFAULT 'Portal Info BR',
    site_domain VARCHAR(100) NOT NULL DEFAULT 'https://portalinfobr.cc',
    company_name VARCHAR(150) NOT NULL DEFAULT 'Peter Port Solucoes Digitais',
    company_tax_id VARCHAR(50) NOT NULL DEFAULT '40088094000117',
    contact_email VARCHAR(120) NOT NULL DEFAULT 'redacao@portalinfobr.cc',
    maintenance_mode BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- 8. TABELA: admin_users (Perfis administrativos vinculados ao Supabase Auth)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(150),
    role VARCHAR(30) NOT NULL DEFAULT 'admin', -- 'superadmin', 'admin', 'editor'
    is_active BOOLEAN NOT NULL DEFAULT true,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- ÍNDICES DE PERFORMANCE E PESQUISA
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_articles_slug ON public.articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_category ON public.articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_status_published ON public.articles(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_featured ON public.articles(is_featured);
CREATE INDEX IF NOT EXISTS idx_topics_active ON public.topics(is_active);
CREATE INDEX IF NOT EXISTS idx_ai_jobs_created ON public.ai_jobs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sources_article ON public.article_sources(article_id);

-- ==============================================================================
-- POLÍTICAS DE SEGURANÇA RLS (Row Level Security)
-- ==============================================================================
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.article_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- 1. Leitura pública de conteúdos publicados e configurações institucionais
CREATE POLICY "Public Read Categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public Read Articles" ON public.articles FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Article Sources" ON public.article_sources FOR SELECT USING (true);
CREATE POLICY "Public Read Site Settings" ON public.site_settings FOR SELECT USING (true);

-- 2. Restrições administrativas: apenas usuários autenticados ou service_role podem modificar
CREATE POLICY "Admin Full Access Categories" ON public.categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Topics" ON public.topics FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Articles" ON public.articles FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Article Sources" ON public.article_sources FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access AI Jobs" ON public.ai_jobs FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access AI Settings" ON public.ai_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Site Settings" ON public.site_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin Full Access Admin Users" ON public.admin_users FOR ALL USING (auth.role() = 'authenticated');
