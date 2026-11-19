-- ==============================================================================
-- MIGRATION 002: DADOS INICIAIS (SEED) PARA CATEGORIAS E CONFIGURAÇÕES
-- ==============================================================================

-- Categorias Padrão
INSERT INTO public.categories (name, slug, description, color) VALUES
('Tecnologia e Inteligência Artificial', 'tecnologia-e-ia', 'Inovações, inteligência artificial, dados e o futuro digital.', '#0284c7'),
('Finanças e Economia', 'financas-e-economia', 'Mercados, finanças pessoais, investimentos e tendências globais.', '#10b981'),
('Saúde e Bem-estar', 'saude-e-bem-estar', 'Longevidade, medicina preventiva, rotina saudável e nutrição.', '#06b6d4'),
('Casa, Construção e Decoração', 'casa-e-decoracao', 'Arquitetura, design de interiores, sustentabilidade e organização.', '#f59e0b'),
('Viagens e Turismo', 'viagens-e-turismo', 'Roteiros fascinantes, guias culturais e dicas para viajantes.', '#6366f1'),
('Educação', 'educacao', 'Carreira, novos métodos pedagógicos e capacitação profissional.', '#8b5cf6'),
('Gastronomia', 'gastronomia', 'Culinária autoral, ingredientes típicos e experiências gastronômicas.', '#ec4899'),
('Curiosidades', 'curiosidades', 'Fatos surpreendentes sobre a história, a ciência e o planeta.', '#14b8a6')
ON CONFLICT (name) DO NOTHING;

-- Configurações Globais do Portal
INSERT INTO public.site_settings (site_name, site_domain, company_name, company_tax_id, contact_email) VALUES
('Portal Info BR', 'https://portalinfobr.cc', 'Peter Port Solucoes Digitais', '40088094000117', 'redacao@portalinfobr.cc')
ON CONFLICT DO NOTHING;

-- Configuração Padrão do Motor de IA
INSERT INTO public.ai_settings (
    provider,
    model_name,
    temperature,
    language,
    editorial_tone,
    min_words,
    max_words,
    enable_web_search,
    enable_image_generation,
    is_automation_active,
    daily_articles_limit,
    scheduled_hour_brt
) VALUES (
    'google_gemini',
    'gemini-1.5-pro',
    0.70,
    'pt-BR',
    'analitico_jornalistico',
    1200,
    1800,
    true,
    true,
    true,
    1,
    9
)
ON CONFLICT DO NOTHING;
