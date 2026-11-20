export type Locale = "en" | "tr";

export const nav = {
  en: [
    ["Research", "#research"],
    ["Projects", "#projects"],
    ["Publications", "#publications"],
    ["People", "#people"],
    ["Resources", "#resources"],
  ],
  tr: [
    ["Araştırma", "#research"],
    ["Projeler", "#projects"],
    ["Yayınlar", "#publications"],
    ["Ekip", "#people"],
    ["Kaynaklar", "#resources"],
  ],
} as const;

export const researchAreas = [
  {
    id: "graph-theory",
    index: "01",
    en: {
      title: "Graph theory",
      description: "Structural, extremal, and algorithmic questions that reveal how discrete systems are organized.",
      topics: ["Connectivity", "Domination", "Graph coloring"],
    },
    tr: {
      title: "Çizge kuramı",
      description: "Ayrık sistemlerin nasıl düzenlendiğini ortaya çıkaran yapısal, ekstremal ve algoritmik sorular.",
      topics: ["Bağlantılılık", "Baskınlık", "Çizge boyama"],
    },
  },
  {
    id: "reliable-networks",
    index: "02",
    en: {
      title: "Reliable networks",
      description: "Connectivity, super-connectivity, resilience, and fault tolerance in interconnection networks.",
      topics: ["Reliability", "Fault tolerance", "Network topology"],
    },
    tr: {
      title: "Güvenilir ağlar",
      description: "Bağlantılılık, süper bağlantılılık, dayanıklılık ve ara bağlantı ağlarında hata toleransı.",
      topics: ["Güvenilirlik", "Hata toleransı", "Ağ topolojisi"],
    },
  },
  {
    id: "algorithms",
    index: "03",
    en: {
      title: "Algorithms & optimization",
      description: "Combinatorial methods for difficult problems across graphs, networks, and discrete structures.",
      topics: ["Combinatorial optimization", "Complexity", "Algorithms"],
    },
    tr: {
      title: "Algoritmalar ve optimizasyon",
      description: "Çizgeler, ağlar ve ayrık yapılar üzerindeki güç problemler için kombinatoryal yöntemler.",
      topics: ["Kombinatoryal optimizasyon", "Karmaşıklık", "Algoritmalar"],
    },
  },
  {
    id: "graph-ai",
    index: "04",
    en: {
      title: "Graph-centered AI",
      description: "Learning and retrieval systems that use relational structure as a first-class source of knowledge.",
      topics: ["Graph neural networks", "GraphRAG", "Computer vision"],
    },
    tr: {
      title: "Çizge merkezli yapay zekâ",
      description: "İlişkisel yapıyı temel bilgi kaynağı olarak kullanan öğrenme ve erişim sistemleri.",
      topics: ["Çizge sinir ağları", "GraphRAG", "Bilgisayarlı görü"],
    },
  },
] as const;

export const publications = [
  {
    year: "2026",
    title: "S-packing chromatic critical graphs",
    venue: "Discrete Applied Mathematics",
    kind: "Journal article",
    topic: "Coloring",
  },
  {
    year: "2025",
    title: "Mutual-visibility problems in Kneser and Johnson graphs",
    venue: "Ars Mathematica Contemporanea",
    kind: "Journal article",
    topic: "Visibility",
  },
  {
    year: "2024",
    title: "On the equality of domination number and 2-domination number",
    venue: "Discussiones Mathematicae Graph Theory",
    kind: "Journal article",
    topic: "Domination",
  },
  {
    year: "2023",
    title: "Connectivity and super connectivity of folded hypercube-like networks",
    venue: "Theoretical Computer Science",
    kind: "Journal article",
    topic: "Connectivity",
  },
  {
    year: "2022",
    title: "The super-connectivity of double generalized Petersen graphs",
    venue: "RAIRO — Operations Research",
    kind: "Journal article",
    topic: "Connectivity",
  },
  {
    year: "2019",
    title: "On the reliability of generalized Petersen graphs",
    venue: "Discrete Applied Mathematics",
    kind: "Journal article",
    topic: "Reliability",
  },
] as const;

export const pageCopy = {
  en: {
    languageSwitch: { href: "/tr/", label: "EN", sub: "/ TR", aria: "Switch to the Turkish version" },
    headerCta: "Collaborate",
    hero: {
      kicker: "Research laboratory",
      titleLine1: "We explore the",
      titleEm: "universe of graphs.",
      lead: "Graverse Lab advances graph theory, algorithms, network science, and graph-centered artificial intelligence—connecting rigorous mathematics to resilient real-world systems.",
      ctaPrimary: "Enter the universe",
      ctaSecondary: "Read our publications",
      piLabel: "Principal investigator",
      piName: "Gülnaz Boruzanlı Ekinci",
      fieldsLabel: "Core fields",
      fields: "Graphs · Networks · AI",
    },
    manifesto: "Every complex system leaves a graph behind. We study its structure, test its limits, and build methods that make connections legible, reliable, and useful.",
    research: {
      sectionNumber: "01 / Research universe",
      heading1: "Four connected",
      heading2: "fields of inquiry.",
      intro: "Our research moves between mathematical foundations and computational systems. Select a field to discover the questions shaping the lab.",
      exploreAria: (title: string) => `Explore ${title}`,
    },
    projects: {
      sectionNumber: "02 / Selected directions",
      heading1: "Questions with",
      heading2: "structural impact.",
      cards: [
        {
          tag: "Reliability · Graph theory",
          title: "How much failure can a network survive?",
          body: "New connectivity measures and graph models for systems expected to remain operational under disruption.",
          link: "Explore collaboration →",
        },
        {
          tag: "Knowledge systems · AI",
          title: "GraphRAG for trustworthy retrieval",
          body: "Relational retrieval and evaluation methods for technical knowledge at scale.",
        },
        {
          tag: "Graph learning",
          title: "Structure-aware intelligence",
          body: "Learning systems that preserve the mathematical organization of graph-structured data.",
        },
      ],
    },
    publications: {
      sectionNumber: "03 / Publications",
      heading: "Recent work.",
      subtitlePrefix: "Selected journal and conference papers · Full list on ",
      subtitleLinkText: "Google Scholar",
      scholarProfileLabel: "Google Scholar Profile",
      wosProfileLabel: "WoS Profile",
    },
    people: {
      sectionNumber: "04 / People",
      heading: "A lab in formation.",
      intro: "Graverse is building a research community for mathematically grounded work across graphs, networks, and AI.",
      piRole: "Principal investigator",
      piOrg: "Ege University · Department of Mathematics",
      formationLabel: "Graduate researchers",
      formationText: "Member profiles will be announced as the lab community takes shape.",
    },
    resources: {
      sectionNumber: "05 / Open resources",
      marquee: ["CODE", "DATASETS", "POSTERS", "LECTURES"],
      intro: "Reproducible research belongs in the open. Code, datasets, posters, presentations, and teaching material will be published here as they become available.",
      posterAlt: "Academic poster preview showing graph-based centrality analysis of the Ege University research network",
      posterType: "Poster · TÜBİTAK 2209-A",
      posterTitle: "A Graph-Based Approach to Centrality Analysis in Social Networks and Ege University Research Network Analysis",
      posterAuthors: "Bahtınur Şener, Esma Yeter Sayındı, and Melisa Daş · Advisor: Gülnaz Boruzanlı Ekinci",
      posterView: "View poster ↗",
      posterDownload: "Download PDF ↓",
    },
    contact: {
      sectionNumber: "06 / Connect",
      heading1: "Bring a difficult",
      heading2: "graph problem.",
      intro: "We welcome research partnerships, funded project consortia, graduate applicants, and industry collaborations.",
      formLabel: "Send a message",
      formIntro: "Use the form below to reach the lab.",
      emailDirectly: "Email directly",
    },
    footer: {
      tagline: "Graph Theory, Algorithms & Network Science",
      email: "Email",
    },
  },
  tr: {
    languageSwitch: { href: "/", label: "TR", sub: "/ EN", aria: "İngilizce sürüme geç" },
    headerCta: "İş birliği",
    hero: {
      kicker: "Araştırma laboratuvarı",
      titleLine1: "Çizgelerin",
      titleEm: "evrenini keşfediyoruz.",
      lead: "Graverse Lab; titiz matematiği dayanıklı gerçek dünya sistemleriyle buluşturarak çizge kuramı, algoritmalar, ağ bilimi ve çizge merkezli yapay zekâyı ileri taşır.",
      ctaPrimary: "Evrene gir",
      ctaSecondary: "Yayınlarımızı incele",
      piLabel: "Laboratuvar yürütücüsü",
      piName: "Gülnaz Boruzanlı Ekinci",
      fieldsLabel: "Temel alanlar",
      fields: "Çizgeler · Ağlar · Yapay zekâ",
    },
    manifesto: "Her karmaşık sistem ardında bir çizge bırakır. Biz onun yapısını inceler, sınırlarını sınar ve bağlantıları anlaşılır, güvenilir ve yararlı kılan yöntemler geliştiririz.",
    research: {
      sectionNumber: "01 / Araştırma evreni",
      heading1: "Birbirine bağlı",
      heading2: "dört araştırma alanı.",
      intro: "Araştırmalarımız matematiksel temeller ile hesaplamalı sistemler arasında ilerler. Laboratuvarı şekillendiren soruları keşfetmek için bir alan seçin.",
      exploreAria: (title: string) => `${title} alanında iş birliği`,
    },
    projects: {
      sectionNumber: "02 / Seçili yönelimler",
      heading1: "Yapısal etkisi",
      heading2: "olan sorular.",
      cards: [
        {
          tag: "Güvenilirlik · Çizge kuramı",
          title: "Bir ağ ne kadar arızaya dayanabilir?",
          body: "Kesinti altında çalışması beklenen sistemler için yeni bağlantılılık ölçütleri ve çizge modelleri.",
          link: "İş birliği yap →",
        },
        {
          tag: "Bilgi sistemleri · Yapay zekâ",
          title: "Güvenilir erişim için GraphRAG",
          body: "Teknik bilginin ölçekli kullanımı için ilişkisel erişim ve değerlendirme yöntemleri.",
        },
        {
          tag: "Çizge öğrenmesi",
          title: "Yapı duyarlı zekâ",
          body: "Çizge biçimli verinin matematiksel düzenini koruyan öğrenme sistemleri.",
        },
      ],
    },
    publications: {
      sectionNumber: "03 / Yayınlar",
      heading: "Güncel çalışmalar.",
      subtitlePrefix: "Seçilmiş dergi ve konferans bildirileri · Tam liste ",
      subtitleLinkText: "Google Scholar'da",
      scholarProfileLabel: "Google Akademik Profili",
      wosProfileLabel: "WoS Profili",
    },
    people: {
      sectionNumber: "04 / İnsanlar",
      heading: "Kuruluş aşamasındaki bir laboratuvar.",
      intro: "Graverse; çizgeler, ağlar ve yapay zekâ arasında matematiksel temelli bir araştırma topluluğu kuruyor.",
      piRole: "Laboratuvar yürütücüsü",
      piOrg: "Ege Üniversitesi · Matematik Bölümü",
      formationLabel: "Lisansüstü araştırmacılar",
      formationText: "Üye profilleri laboratuvar topluluğu şekillendikçe duyurulacaktır.",
    },
    resources: {
      sectionNumber: "05 / Açık kaynaklar",
      marquee: ["KOD", "VERİ", "POSTER", "DERS"],
      intro: "Tekrarlanabilir araştırma açık olmalıdır. Kod, veri setleri, posterler, sunumlar ve ders materyalleri hazır oldukça burada yayımlanacaktır.",
      posterAlt: "Ege Üniversitesi araştırma ağının çizge tabanlı merkezlik analizini gösteren akademik poster önizlemesi",
      posterType: "Poster · TÜBİTAK 2209-A",
      posterTitle: "Sosyal Ağlarda Merkezlik Analizleri İçin Çizge Tabanlı Bir Yaklaşım ve Ege Üniversitesi Araştırma Ağı Analizi",
      posterAuthors: "Bahtınur Şener, Esma Yeter Sayındı ve Melisa Daş · Danışman: Gülnaz Boruzanlı Ekinci",
      posterView: "Posteri görüntüle ↗",
      posterDownload: "PDF indir ↓",
    },
    contact: {
      sectionNumber: "06 / Bağlantı kur",
      heading1: "Zor bir çizge",
      heading2: "problemi getir.",
      intro: "Araştırma ortaklıklarına, fonlanan proje konsorsiyumlarına, lisansüstü başvurulara ve sanayi iş birliklerine açığız.",
      formLabel: "Mesaj gönder",
      formIntro: "Laboratuvara ulaşmak için aşağıdaki formu kullanın.",
      emailDirectly: "Doğrudan e-posta gönder",
    },
    footer: {
      tagline: "Çizge Kuramı, Algoritmalar ve Ağ Bilimi",
      email: "E-posta",
    },
  },
} as const;

export const contactEmail = "gulnaz.boruzanli@ege.edu.tr";
export const dblpUrl = "https://dblp.org/pid/179/3810.html";

// Leave empty until the real profile URLs are confirmed — the matching
// buttons/links are hidden while these are blank (see SiteHome).
export const scholarUrl = "";
export const wosUrl = "";
