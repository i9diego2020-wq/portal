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
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        Construir estabilidade financeira em tempos de oscilações macroeconômicas requer mais do que apenas poupar: exige planejamento estratégico e alocação consciente de capital. Mercados globais mais dinâmicos demandam dos investidores métodos comprovados de mitigação de risco e disciplina de longo prazo.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Os Pilares da Proteção Patrimonial</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        O primeiro princípio de sobrevivência patrimonial reside na reserva de liquidez imediata. Recursos destinados a emergências não devem buscar rentabilidades especulativas, mas sim previsibilidade e liquidez diária em títulos públicos ou fundos de baixo risco de crédito.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Em um segundo nível, a proteção contra perdas no poder de compra é alcançada por meio de títulos indexados à inflação (como o IPCA+). Esses papéis garantem ganho real sobre o custo de vida histórico, servindo como âncora para aposentadorias e projetos de longo prazo.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Diversificação e Exposição Internacional</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        Concentrar patrimônio em uma única moeda ou geografia amplia exponencialmente a vulnerabilidade do investidor. A alocação fracionada em ativos globais, índices internacionais e fundos multimercado proporciona estabilidade mesmo diante de volatilidades políticas locais.
      </p>

      <h3 class="text-xl font-serif font-bold text-slate-900 mt-6 mb-3">Disciplina e Rebalanceamento Periódico</h3>
      <p class="text-slate-700 leading-relaxed mb-4">
        Manter a disciplina diante do ruído do noticiário de curto prazo e realizar rebalanceamentos anuais de carteira permite comprar na baixa e realizar lucros parciais na alta de forma técnica e sem viés emocional.
      </p>
    `,
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
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        A ciência da longevidade vive sua fase mais promissora. Em vez de simplesmente tratar patologias após seu surgimento, a medicina preventiva contemporânea foca no monitoramento de biomarcadores celulares e na adoção de protocolos diários para estender não apenas os anos de vida, mas a vitalidade biológica.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">A Importância dos Diagnósticos Preditivos</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        Exames genéticos avançados, avaliação da microbiota intestinal e análise de inflamação subclínica (como a proteína C-reativa ultrassensível) permitem identificar riscos metabólicos muito antes que se manifestem clinicamente. Essa janela de intervenção precoce é o maior trunfo da medicina moderna.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Os 4 Pilares Inegociáveis da Longevidade</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        Consensos científicos internacionais convergem para quatro fatores comportamentais determinantes:
      </p>
      <ul class="list-disc pl-5 space-y-2 text-slate-700 mb-4">
        <li><strong>Qualidade do Sono:</strong> Ciclos regulares de sono profundo ativam o sistema glinfático, responsável por limpar metabólitos tóxicos do cérebro.</li>
        <li><strong>Treinamento de Resistência:</strong> A preservação da massa muscular (massa magra) é o biomarcador funcional mais correlacionado com a longevidade funcional em idades avançadas.</li>
        <li><strong>Nutrição Anti-inflamatória:</strong> Dietas ricas em fitoquímicos, fibras e polifenóis reduzem o estresse oxidativo e protegem as paredes vasculares.</li>
        <li><strong>Saúde Mental e Conexão Social:</strong> Níveis controlados de cortisol e relações humanas ativas previnem o declínio cognitivo prematuro.</li>
      </ul>
    `,
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
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        A desconexão entre as metrópoles modernas e o meio ambiente natural impulsionou uma das tendências arquitetônicas mais influentes do século: o design biofílico. Longe de ser apenas uma escolha estética, a introdução de luz solar, ventilação cruzada e vegetação em lares e escritórios impacta comprovadamente a saúde e o bem-estar psicológico.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">O Conceito de Biofilia Aplicado à Arquitetura</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        O termo biofilia significa literalmente o "amor à vida". Na arquitetura residencial, traduz-se no uso de materiais orgânicos com texturas ricas — como madeiras de reflorestamento, pedras naturais, argila e tecidos de fibras puras — que remetem à calma dos ambientes florestais.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Iluminação Circadiana e Eficiência Acústica</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        Grandes aberturas de vidro planejadas para captar a trajetória solar ao longo do dia sincronizam o ritmo circadiano dos moradores, melhorando a disposição matinal e facilitando o repouso noturno. O paisagismo vertical e jardins internos atuam ainda como isolantes térmicos e acústicos naturais, amortecendo os ruídos urbanos.
      </p>
    `,
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
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        Viajar pelo mundo com conforto e exclusividade já não exige sacrificar a integridade ecológica das regiões visitadas. O ecoturismo de luxo consolidou-se como modelo de desenvolvimento que financia diretamente a conservação de santuários biológicos e fortalece a economia de povos tradicionais.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">A Mudança de Paradigma no Turismo Internacional</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        Hotéis e lodges sustentáveis operam hoje sob rigorosos padrões de emissão neutra de carbono, autossuficiência energética solar e gestão circular de resíduos. Viajantes de alta renda buscam experiências autênticas de imersão cultural, guiadas por especialistas e comunidades nativas.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Preservação Ativa e Regeneração Ambiental</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        Em regiões como a Patagônia, o Pantanal brasileiro, as florestas de Ruanda e os arquipélagos da Polinésia, as taxas de visitação são revertidas em patrulhas anti-caça predatória e projetos de reflorestamento. O turismo passa a ser uma força de regeneração, garantindo que paisagens intocadas permaneçam vivas para as próximas gerações.
      </p>
    `,
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
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        À medida que algoritmos e modelos generativos assumem tarefas analíticas complexas, o valor relativo das competências estritamente humanas cresce de forma exponencial. As organizações mais competitivas do mundo já reorganizam seus planos de liderança em torno de atributos sociais e adaptativos.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">O Futuro das Competências Corporativas</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        A inteligência artificial é capaz de processar milhões de dados em milissegundos, mas carece de empatia genuína, discernimento ético em cenários ambíguos e habilidade política para negociar consensos entre culturas divergentes.
      </p>

      <h3 class="text-xl font-serif font-bold text-slate-900 mt-6 mb-3">Flexibilidade Cognitiva e Pensamento Crítico</h3>
      <p class="text-slate-700 leading-relaxed mb-4">
        Questionar premissas e identificar vieses em decisões automatizadas é o principal escudo contra falhas estratégicas graves. Os profissionais mais valorizados são aqueles que atuam como curadores conscientes das ferramentas digitais.
      </p>
    `,
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
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        A gastronomia contemporânea encontrou na valorização dos biomas locais o seu maior vetor de sofisticação. Renomados restaurantes com estrelas Michelin estão substituindo insumos importados por frutos nativos, plantas alimentícias não convencionais (PANCs) e peixes de pesca artesanal sustentável.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">A Redescoberta de Sabores Originais</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        No Brasil, ingredientes como o tucupi, cumaru, castanhas nativas e cogumelos da Amazônia e do Cerrado deixaram de ser itens folclóricos e conquistaram reconhecimento nos menus degustação mais exigentes do planeta. A gastronomia assume assim um papel vital na conservação das florestas em pé.
      </p>
    `,
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
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        Conhecemos mais sobre a superfície da Lua e de Marte do que sobre as fossas marinhas do nosso próprio planeta. Recentemente, novas tecnologias de veículos submarinos operados remotamente desceram a mais de 8.000 metros de profundidade, trazendo descobertas que desafiam as leis conhecidas da biologia.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Vida sem Luz Solar</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        Em completa escuridão e sob pressões esmagadoras de centenas de atmosferas, animais bioluminescentes e colônias bacterianas sobrevivem através da quimiossíntese ao redor de chaminés vulcânicas subaquáticas. Essas descobertas fornecem pistas valiosas sobre como a vida pode ter surgido na Terra primitiva e em luas geladas do sistema solar.
      </p>
    `,
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
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        Replicar a energia que alimenta o Sol dentro de um laboratório na Terra é um dos maiores desafios de engenharia já enfrentados pela espécie humana. Nos últimos meses, avanços em eletroímãs supercondutores de alta temperatura aproximaram a fusão nuclear do limiar de viabilidade comercial.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Energia Inesgotável e sem Emissões de Carbono</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        Diferente da fissão nuclear atual, a fusão de átomos de hidrogênio (deutério e trítio) não gera resíduos radioativos de longa duração nem riscos de acidentes em cadeia. Uma única colher de chá de combustível pode gerar a mesma energia que barris inteiros de petróleo, prometendo transformar a matriz energética global nas próximas décadas.
      </p>
    `,
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
