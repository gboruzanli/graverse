export const researchAreas = [
  {
    id: "graph-theory",
    index: "01",
    title: "Graph theory",
    description: "Structural, extremal, and algorithmic questions that reveal how discrete systems are organized.",
    topics: ["Connectivity", "Domination", "Graph coloring"],
  },
  {
    id: "reliable-networks",
    index: "02",
    title: "Reliable networks",
    description: "Connectivity, super-connectivity, resilience, and fault tolerance in interconnection networks.",
    topics: ["Reliability", "Fault tolerance", "Network topology"],
  },
  {
    id: "algorithms",
    index: "03",
    title: "Algorithms & optimization",
    description: "Combinatorial methods for difficult problems across graphs, networks, and discrete structures.",
    topics: ["Combinatorial optimization", "Complexity", "Algorithms"],
  },
  {
    id: "graph-ai",
    index: "04",
    title: "Graph-centered AI",
    description: "Learning and retrieval systems that use relational structure as a first-class source of knowledge.",
    topics: ["Graph neural networks", "GraphRAG", "Computer vision"],
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

export const navItems = [
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["Publications", "#publications"],
  ["People", "#people"],
  ["Resources", "#resources"],
] as const;
