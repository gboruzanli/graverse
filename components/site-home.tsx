import { GraphUniverse } from "@/components/graph-universe";
import { GraverseMark } from "@/components/mark";
import { PublicationExplorer } from "@/components/publication-explorer";
import { ContactForm } from "@/components/contact-form";
import {
  nav,
  researchAreas,
  pageCopy,
  contactEmail,
  dblpUrl,
  scholarUrl,
  wosUrl,
  orcidUrl,
  scopusUrl,
  researchgateUrl,
  type Locale,
} from "@/content/site";

export function SiteHome({ locale }: { locale: Locale }) {
  const copy = pageCopy[locale];
  const navItems = nav[locale];

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand-link">
          <GraverseMark size={44} />
          <strong>GRAVERSE</strong>
        </a>
        <nav aria-label={locale === "tr" ? "Ana navigasyon" : "Primary navigation"}>
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="language" href={copy.languageSwitch.href} aria-label={copy.languageSwitch.aria}>
            {copy.languageSwitch.label} <span>{copy.languageSwitch.sub}</span>
          </a>
          <a className="header-cta" href="#contact">{copy.headerCta}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span>{copy.hero.kicker}</span></p>
          <h1>{copy.hero.titleLine1}<br /><em>{copy.hero.titleEm}</em></h1>
          <p className="hero-lead">{copy.hero.lead}</p>
          <div className="hero-actions">
            <a className="button primary" href="#research">{copy.hero.ctaPrimary} <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#publications">{copy.hero.ctaSecondary} <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-meta">
            <div><span>{copy.hero.piLabel}</span><strong>{copy.hero.piName}</strong></div>
            <div><span>{copy.hero.fieldsLabel}</span><strong>{copy.hero.fields}</strong></div>
          </div>
        </div>
        <GraphUniverse locale={locale} />
      </section>

      <section className="manifesto" aria-label={locale === "tr" ? "Misyon bildirisi" : "Mission statement"}>
        <span className="section-number">00 / Manifesto</span>
        <p>{copy.manifesto}</p>
      </section>

      <section className="research section-shell" id="research">
        <div className="section-heading">
          <span className="section-number">{copy.research.sectionNumber}</span>
          <h2>{copy.research.heading1}<br />{copy.research.heading2}</h2>
          <p>{copy.research.intro}</p>
        </div>
        <div className="research-list">
          {researchAreas.map((area) => {
            const text = area[locale];
            return (
              <article key={area.id} className="research-row">
                <span className="row-index">{area.index}</span>
                <div><h3>{text.title}</h3><p>{text.description}</p></div>
                <ul>{text.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                <a href={`#${area.id}`} aria-label={copy.research.exploreAria(text.title)}>↗</a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="projects section-shell dark-section" id="projects">
        <div className="section-heading compact">
          <span className="section-number">{copy.projects.sectionNumber}</span>
          <h2>{copy.projects.heading1}<br />{copy.projects.heading2}</h2>
        </div>
        <div className="project-grid">
          {copy.projects.cards.map((card, index) => (
            <article key={card.title} className={index === 0 ? "project-card featured" : "project-card"}>
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {"link" in card && <a href="#contact">{card.link}</a>}
            </article>
          ))}
        </div>
      </section>

      <section className="publications section-shell" id="publications">
        <div className="section-heading horizontal">
          <div><span className="section-number">{copy.publications.sectionNumber}</span><h2>{copy.publications.heading}</h2></div>
          <p className="publications-subtitle">
            {copy.publications.subtitlePrefix}
            <a href={scholarUrl || dblpUrl}>{copy.publications.subtitleLinkText}</a>
          </p>
        </div>
        <div className="profile-links" aria-label={locale === "tr" ? "Akademik profiller" : "Academic profiles"}>
          {scholarUrl && <a className="profile-pill" href={scholarUrl} target="_blank" rel="noreferrer">{copy.publications.scholarProfileLabel}</a>}
          {dblpUrl && <a className="profile-pill" href={dblpUrl} target="_blank" rel="noreferrer">{copy.publications.dblpProfileLabel}</a>}
          {orcidUrl && <a className="profile-pill" href={orcidUrl} target="_blank" rel="noreferrer">{copy.publications.orcidProfileLabel}</a>}
          {scopusUrl && <a className="profile-pill" href={scopusUrl} target="_blank" rel="noreferrer">{copy.publications.scopusProfileLabel}</a>}
          {wosUrl && <a className="profile-pill" href={wosUrl} target="_blank" rel="noreferrer">{copy.publications.wosProfileLabel}</a>}
          {researchgateUrl && <a className="profile-pill" href={researchgateUrl} target="_blank" rel="noreferrer">{copy.publications.researchgateProfileLabel}</a>}
        </div>
        <PublicationExplorer locale={locale} />
      </section>

      <section className="people section-shell" id="people">
        <div className="section-heading">
          <span className="section-number">{copy.people.sectionNumber}</span>
          <h2>{copy.people.heading}</h2>
          <p>{copy.people.intro}</p>
        </div>
        <article className="pi-card">
          <div className="portrait-placeholder"><GraverseMark compact /></div>
          <div>
            <span>{copy.people.piRole}</span>
            <h3>{copy.hero.piName}</h3>
            <p>{copy.people.piOrg}</p>
            <a href={`mailto:${contactEmail}`}>{contactEmail} ↗</a>
          </div>
        </article>
        <div className="formation-note"><span>{copy.people.formationLabel}</span><p>{copy.people.formationText}</p></div>
      </section>

      <section className="resources section-shell" id="resources">
        <span className="section-number">{copy.resources.sectionNumber}</span>
        <div className="resource-marquee" aria-label={locale === "tr" ? "Kaynak türleri" : "Resource types"}>
          {copy.resources.marquee.map((word, index) => (
            <span key={word}>{word}{index < copy.resources.marquee.length - 1 && <i>·</i>}</span>
          ))}
        </div>
        <p>{copy.resources.intro}</p>
        <article className="poster-card">
          <a className="poster-preview" href="/posters/social-network-centrality-2209a.pdf" target="_blank" rel="noreferrer">
            <img src="/posters/social-network-centrality-2209a-preview.png" alt={copy.resources.posterAlt} />
          </a>
          <div className="poster-details">
            <span className="resource-type">{copy.resources.posterType}</span>
            <h3>{copy.resources.posterTitle}</h3>
            <p>{copy.resources.posterAuthors}</p>
            <div className="poster-actions">
              <a className="button primary" href="/posters/social-network-centrality-2209a.pdf" target="_blank" rel="noreferrer">{copy.resources.posterView} <span>↗</span></a>
              <a className="text-link" href="/posters/social-network-centrality-2209a.pdf" download>{copy.resources.posterDownload}</a>
            </div>
          </div>
        </article>
      </section>

      <section className="contact" id="contact">
        <div><span className="section-number">{copy.contact.sectionNumber}</span><h2>{copy.contact.heading1}<br />{copy.contact.heading2}</h2></div>
        <div className="contact-copy">
          <p>{copy.contact.intro}</p>
          <div className="contact-form-card">
            <div className="contact-form-head">
              <h3>{locale === "tr" ? "Bağlantı" : "Contact"}</h3>
              <span>{copy.contact.formLabel}</span>
            </div>
            <p className="contact-form-intro">{copy.contact.formIntro}</p>
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>

      <footer>
        <GraverseMark />
        <p>{copy.footer.tagline}</p>
        <div>
          <a href={`mailto:${contactEmail}`}>{copy.footer.email}</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
