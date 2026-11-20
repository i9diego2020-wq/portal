import { Article, Category } from "@/types/content";

export const DEMO_CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Tecnologia e IA",
    slug: "tecnologia-e-ia",
    description: "Inovações, inteligência artificial, dados e o futuro digital.",
  },
  {
    id: "2",
    name: "Finanças e Economia",
    slug: "financas-e-economia",
    description: "Mercados, finanças pessoais, investimentos e tendências globais.",
  },
  {
    id: "3",
    name: "Saúde e Bem-estar",
    slug: "saude-e-bem-estar",
    description: "Longevidade, medicina preventiva, rotina saudável e nutrição.",
  },
  {
    id: "4",
    name: "Casa e Decoração",
    slug: "casa-e-decoracao",
    description: "Arquitetura, design de interiores, sustentabilidade e organização.",
  },
  {
    id: "5",
    name: "Viagens e Turismo",
    slug: "viagens-e-turismo",
    description: "Roteiros fascinantes, guias culturais e dicas para viajantes.",
  },
  {
    id: "6",
    name: "Educação",
    slug: "educacao",
    description: "Carreira, novos métodos pedagógicos e capacitação profissional.",
  },
  {
    id: "7",
    name: "Gastronomia",
    slug: "gastronomia",
    description: "Culinária autoral, ingredientes típicos e experiências gastronômicas.",
  },
  {
    id: "8",
    name: "Curiosidades",
    slug: "curiosidades",
    description: "Fatos surpreendentes sobre a história, a ciência e o planeta.",
  },
];

export const DEMO_FEATURED_ARTICLE: Article = {
  id: "featured-1",
  slug: "como-modelos-autonomos-de-ia-estao-revolucionando-as-redacoes-modernas",
  title: "Como os Modelos Autônomos de Inteligência Artificial Estão Redefinindo o Jornalismo e a Produção Editorial",
  subtitle: "Da curadoria em tempo real à verificação automatizada de fatos, compreenda os bastidores da transformação tecnológica que está moldando o futuro da comunicação.",
  content: `
    <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
      A inteligência artificial deixou de ser uma promessa futurista para se consolidar como o motor central da nova era da comunicação digital. Redações globais e centros de inteligência de conteúdo passaram a adotar fluxos automatizados de curadoria, síntese e checagem de integridade factual em velocidades sem precedentes.
    </p>

    <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">A Evolução dos Modelos Editoriais Automatizados</h2>
    <p class="text-slate-700 leading-relaxed mb-4">
      Historicamente, o processamento de grandes volumes de informações dependia de longos ciclos manuais de triagem. Com o avanço das arquiteturas neurais de última geração, sistemas autônomos conseguem hoje ler relatórios econômicos, documentos científicos e indicadores de mercado, estruturando sínteses claras e acessíveis para o público em poucos segundos.
    </p>
    <p class="text-slate-700 leading-relaxed mb-4">
      A integração responsável de tecnologia analítica e automação em nuvem permite escalar a distribuição de conhecimento qualificado mantendo métricas rigorosas de consistência e pontualidade na produção de notícias e artigos diários.
    </p>

    <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Verificação de Fatos e Rigor Informativo</h2>
    <p class="text-slate-700 leading-relaxed mb-4">
      Um dos maiores desafios das gerações anteriores de inteligência artificial residia nas chamadas alucinações — geração de dados plausíveis porém sem lastro na realidade. A nova geração de agentes autônomos supera essa barreira ao incorporar validação cruzada com fontes externas indexadas e verificação de metadados antes de qualquer publicação definitiva.
    </p>

    <blockquote class="border-l-4 border-sky-600 pl-4 py-2 my-6 italic text-slate-800 bg-sky-50/50 rounded-r-lg">
      "A chave para a credibilidade editorial não reside em eliminar a automação, mas em dotá-la de filtros explícitos de fontes confiáveis, rastreabilidade de referências e auditoria contínua de fatos."
    </blockquote>

    <h3 class="text-xl font-serif font-bold text-slate-900 mt-6 mb-3">O Impacto na Experiência do Leitor</h3>
    <p class="text-slate-700 leading-relaxed mb-4">
      Para o usuário final, o resultado prático é o acesso a conteúdos ricos, desprovidos de ruídos superficiais ou redundâncias desnecessárias. Artigos bem organizados por tópicos, munidos de títulos e subtítulos claros, otimizam o tempo de quem busca se manter atualizado em um mundo com sobrecarga constante de estímulos.
    </p>

    <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Considerações Finais e Próximos Passos</h2>
    <p class="text-slate-700 leading-relaxed mb-4">
      O ecossistema informativo caminha irreversivelmente para uma cooperação refinada entre lógica computacional e discernimento analítico. À medida que mais plataformas adotam esse modelo, a clareza, a relevância e a verdade dos fatos permanecem como as únicas moedas de valor duradouro na internet contemporânea.
    </p>
  `,
  category: DEMO_CATEGORIES[0],
  coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Circuitos eletrônicos iluminados representando redes neurais e inteligência artificial",
  author: "Redação Portal Info BR",
  publishedAt: "2026-11-19",
  readTime: "6 min de leitura",
  featured: true,
  tags: ["Inteligência Artificial", "Tecnologia", "Jornalismo Digital", "Automação"],
};

export const DEMO_LATEST_ARTICLES: Article[] = [
  {
    id: "latest-1",
    slug: "planejamento-financeiro-inteligente-para-o-cenario-economico-atual",
    title: "Planejamento Financeiro Estratégico: Como Proteger seus Rendimentos em Períodos de Transição",
    subtitle: "Especialistas indicam carteiras diversificadas e ativos atrelados à inflação para mitigar riscos patrimoniais.",
    content: "Artigo demonstrativo...",
    category: DEMO_CATEGORIES[1],
    coverImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Gráficos de análise financeira em tela de computador",
    author: "Redação Portal Info BR",
    publishedAt: "2026-11-19",
    readTime: "5 min de leitura",
    tags: ["Finanças", "Investimentos", "Economia"],
  },
  {
    id: "latest-2",
    slug: "medicina-preventiva-e-os-avancos-em-longevidade-saudavel",
    title: "Medicina do Futuro: Biomarcadores e Hábitos Diários que Multiplicam a Expectativa de Vida",
    subtitle: "A transição de tratamentos reativos para diagnósticos preditivos traz um novo horizonte para a saúde pública e individual.",
    content: "Artigo demonstrativo...",
    category: DEMO_CATEGORIES[2],
    coverImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Profissional de saúde analisando exames em tablet",
    author: "Redação Portal Info BR",
    publishedAt: "2026-11-18",
    readTime: "7 min de leitura",
    tags: ["Saúde", "Longevidade", "Bem-estar"],
  },
  {
    id: "latest-3",
    slug: "biofilia-e-minimalismo-a-nova-era-do-design-residencial",
    title: "Arquitetura Biofílica: O Retorno dos Elementos Naturais aos Ambientes Urbanos",
    subtitle: "Projetos arquitetônicos aliam conforto acústico, luz solar direta e espécies botânicas para elevar a qualidade de vida nos lares.",
    content: "Artigo demonstrativo...",
    category: DEMO_CATEGORIES[3],
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Interior de residência moderna com plantas integradas e luz natural",
    author: "Redação Portal Info BR",
    publishedAt: "2026-11-18",
    readTime: "4 min de leitura",
    tags: ["Arquitetura", "Decoração", "Design"],
  },
  {
    id: "latest-4",
    slug: "destinos-sustentaveis-para-viajantes-conscientes-em-2027",
    title: "Ecoturismo de Alto Padrão: 5 Destinos que Preservam Biomas e Oferecem Imersão Cultural",
    subtitle: "Comunidades locais lideram iniciativas de conservação que unem hospitalidade premium e impacto ambiental positivo.",
    content: "Artigo demonstrativo...",
    category: DEMO_CATEGORIES[4],
    coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Paisagem montanhosa deslumbrante na natureza",
    author: "Redação Portal Info BR",
    publishedAt: "2026-11-17",
    readTime: "6 min de leitura",
    tags: ["Viagens", "Ecoturismo", "Natureza"],
  },
];

export const DEMO_POPULAR_ARTICLES: Article[] = [
  {
    id: "pop-1",
    slug: "habilidades-mais-requisitadas-pelo-mercado-global-de-trabalho",
    title: "As Competências Humanas que a Automação não Consegue Replicar no Ambiente Corporativo",
    subtitle: "Pensamento crítico, negociação intercultural e flexibilidade cognitiva tornam-se os maiores diferenciais de liderança.",
    content: "Artigo demonstrativo...",
    category: DEMO_CATEGORIES[5],
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Equipe colaborando em mesa de trabalho moderna",
    author: "Redação Portal Info BR",
    publishedAt: "2026-11-16",
    readTime: "5 min de leitura",
    popular: true,
    tags: ["Educação", "Carreira", "Liderança"],
  },
  {
    id: "pop-2",
    slug: "alta-gastronomia-sustentavel-e-o-resgate-de-ingredientes-nativos",
    title: "A Revolução do 'Da Terra ao Prato': Chefs Premiados Redescobrem a Biodiversidade Nacional",
    subtitle: "Ingredientes ancestrais ganham as mesas dos restaurantes mais prestigiados com foco em pegada de carbono neutra.",
    content: "Artigo demonstrativo...",
    category: DEMO_CATEGORIES[6],
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Prato da alta gastronomia delicadamente decorado",
    author: "Redação Portal Info BR",
    publishedAt: "2026-11-15",
    readTime: "4 min de leitura",
    popular: true,
    tags: ["Gastronomia", "Sustentabilidade", "Culinária"],
  },
  {
    id: "pop-3",
    slug: "os-misterios-inexplicados-do-fundo-oceanico",
    title: "O Que a Ciência Descobriu nas Zonas Abissais Menos Exploradas do Planeta",
    subtitle: "Expedições com submarinos autônomos revelam ecossistemas inteiros alimentados por fontes hidrotermais e quimiossíntese.",
    content: "Artigo demonstrativo...",
    category: DEMO_CATEGORIES[7],
    coverImage: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Águas profundas do oceano",
    author: "Redação Portal Info BR",
    publishedAt: "2026-11-14",
    readTime: "6 min de leitura",
    popular: true,
    tags: ["Curiosidades", "Ciência", "Oceano"],
  },
  {
    id: "pop-4",
    slug: "energia-de-fusao-nuclear-estamos-perto-do-ponto-de-virada",
    title: "Fusão Nuclear Comercial: Os Resultados que Aproximam a Humanidade da Energia Limpa Ilimitada",
    subtitle: "Novos reatores supercondutores superam recordes históricos de confinamento magnético em laboratórios internacionais.",
    content: "Artigo demonstrativo...",
    category: DEMO_CATEGORIES[0],
    coverImage: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Instalação de tecnologia avançada com luzes azuis",
    author: "Redação Portal Info BR",
    publishedAt: "2026-11-13",
    readTime: "8 min de leitura",
    popular: true,
    tags: ["Tecnologia", "Energia Limpa", "Ciência"],
  },
];
