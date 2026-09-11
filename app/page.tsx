import { GraphUniverse } from "@/components/graph-universe";
import { GraverseMark } from "@/components/mark";
import { navItems, researchAreas } from "@/content/site";
import { PublicationExplorer } from "@/components/publication-explorer";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand-link">
          <GraverseMark size={44} />
          <strong>GRAVERSE</strong>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="language" href="/tr/" aria-label="Türkçe sürüme geç">EN <span>/ TR</span></a>
          <a className="header-cta" href="#contact">Collaborate</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span>Research laboratory</span></p>
          <h1>We explore the<br /><em>universe of graphs.</em></h1>
          <p className="hero-lead">Graverse Lab advances graph theory, algorithms, network science, and graph-centered artificial intelligence—connecting rigorous mathematics to resilient real-world systems.</p>
          <div className="hero-actions">
            <a className="button primary" href="#research">Enter the universe <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#publications">Read our publications <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-meta">
            <div><span>Principal investigator</span><strong>Gülnaz Boruzanlı Ekinci</strong></div>
            <div><span>Core fields</span><strong>Graphs · Networks · AI</strong></div>
          </div>
        </div>
        <GraphUniverse />
      </section>

      <section className="manifesto" aria-label="Mission statement">
        <span className="section-number">00 / Manifesto</span>
        <p>Every complex system leaves a graph behind. We study its structure, test its limits, and build methods that make connections <em>legible, reliable, and useful.</em></p>
      </section>

      <section className="research section-shell" id="research">
        <div className="section-heading">
          <span className="section-number">01 / Research universe</span>
          <h2>Four connected<br />fields of inquiry.</h2>
          <p>Our research moves between mathematical foundations and computational systems. Select a field to discover the questions shaping the lab.</p>
        </div>
        <div className="research-list">
          {researchAreas.map((area) => (
            <article key={area.id} className="research-row">
              <span className="row-index">{area.index}</span>
              <div><h3>{area.title}</h3><p>{area.description}</p></div>
              <ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              <a href={`#${area.id}`} aria-label={`Explore ${area.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-shell dark-section" id="projects">
        <div className="section-heading compact">
          <span className="section-number">02 / Selected directions</span>
          <h2>Questions with<br />structural impact.</h2>
        </div>
        <div className="project-grid">
          <article className="project-card featured"><span>Reliability · Graph theory</span><h3>How much failure can a network survive?</h3><p>New connectivity measures and graph models for systems expected to remain operational under disruption.</p><a href="#contact">Explore collaboration →</a></article>
          <article className="project-card"><span>Knowledge systems · AI</span><h3>GraphRAG for trustworthy retrieval</h3><p>Relational retrieval and evaluation methods for technical knowledge at scale.</p></article>
          <article className="project-card"><span>Graph learning</span><h3>Structure-aware intelligence</h3><p>Learning systems that preserve the mathematical organization of graph-structured data.</p></article>
        </div>
      </section>

      <section className="publications section-shell" id="publications">
        <div className="section-heading horizontal">
          <div><span className="section-number">03 / Publications</span><h2>Recent work.</h2></div>
          <a className="text-link" href="https://dblp.org/pid/179/3810.html">View complete record ↗</a>
        </div>
        <PublicationExplorer />
      </section>

      <section className="people section-shell" id="people">
        <div className="section-heading"><span className="section-number">04 / People</span><h2>A lab in formation.</h2><p>Graverse is building a research community for mathematically grounded work across graphs, networks, and AI.</p></div>
        <article className="pi-card"><div className="portrait-placeholder"><GraverseMark compact /></div><div><span>Principal investigator</span><h3>Gülnaz Boruzanlı Ekinci</h3><p>Ege University · Department of Mathematics</p><a href="mailto:gulnaz.boruzanli@ege.edu.tr">gulnaz.boruzanli@ege.edu.tr ↗</a></div></article>
        <div className="formation-note"><span>Graduate researchers</span><p>Member profiles will be announced as the lab community takes shape.</p></div>
      </section>

      <section className="resources section-shell" id="resources">
        <span className="section-number">05 / Open resources</span>
        <div className="resource-marquee" aria-label="Resource types"><span>CODE</span><i>·</i><span>DATASETS</span><i>·</i><span>POSTERS</span><i>·</i><span>LECTURES</span></div>
        <p>Reproducible research belongs in the open. Code, datasets, posters, presentations, and teaching material will be published here as they become available.</p>
        <article className="poster-card">
          <a className="poster-preview" href="/posters/social-network-centrality-2209a.pdf" target="_blank" rel="noreferrer">
            <img src="/posters/social-network-centrality-2209a-preview.png" alt="Academic poster preview showing graph-based centrality analysis of the Ege University research network" />
          </a>
          <div className="poster-details">
            <span className="resource-type">Poster · TÜBİTAK 2209-A</span>
            <h3>A Graph-Based Approach to Centrality Analysis in Social Networks and Ege University Research Network Analysis</h3>
            <p>Bahtınur Şener, Esma Yeter Sayındı, and Melisa Daş · Advisor: Gülnaz Boruzanlı Ekinci</p>
            <div className="poster-actions"><a className="button primary" href="/posters/social-network-centrality-2209a.pdf" target="_blank" rel="noreferrer">View poster <span>↗</span></a><a className="text-link" href="/posters/social-network-centrality-2209a.pdf" download>Download PDF ↓</a></div>
          </div>
        </article>
      </section>

      <section className="contact" id="contact">
        <div><span className="section-number">06 / Connect</span><h2>Bring a difficult<br />graph problem.</h2></div>
        <div className="contact-copy"><p>We welcome research partnerships, funded project consortia, graduate applicants, and industry collaborations.</p><ContactForm /></div>
      </section>

      <footer>
        <GraverseMark />
        <p>Graph Theory, Algorithms &amp; Network Science</p>
        <div><a href="mailto:gulnaz.boruzanli@ege.edu.tr">Email</a><a aria-disabled="true">GitHub</a><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </main>
  );
}
