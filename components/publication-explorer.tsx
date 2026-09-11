"use client";

import { useMemo, useState } from "react";
import { publications } from "@/content/site";

const topics = ["All", ...Array.from(new Set(publications.map((item) => item.topic)))] as const;
const turkishTopics: Record<string, string> = {
  All: "Tümü",
  Coloring: "Boyama",
  Visibility: "Görünürlük",
  Domination: "Baskınlık",
  Connectivity: "Bağlantılılık",
  Reliability: "Güvenilirlik",
};

export function PublicationExplorer({ locale = "en" }: { locale?: "en" | "tr" }) {
  const tr = locale === "tr";
  const topicLabel = (value: string) => tr ? turkishTopics[value] ?? value : value;
  const [topic, setTopic] = useState<string>("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => publications.filter((item) => {
    const matchesTopic = topic === "All" || item.topic === topic;
    const haystack = `${item.title} ${item.venue} ${item.year} ${item.topic}`.toLowerCase();
    return matchesTopic && haystack.includes(query.trim().toLowerCase());
  }), [topic, query]);

  return (
    <div className="publication-explorer">
      <div className="catalog-tools">
        <label><span>{tr ? "Yayınlarda ara" : "Search publications"}</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder={tr ? "Başlık, dergi, yıl…" : "Title, venue, year…"} /></label>
        <div className="filter-group" aria-label={tr ? "Yayınları konuya göre filtrele" : "Filter publications by topic"}>
          {topics.map((item) => <button className={topic === item ? "active" : ""} key={item} type="button" onClick={() => setTopic(item)} aria-pressed={topic === item}>{topicLabel(item)}</button>)}
        </div>
      </div>
      <p className="result-count" aria-live="polite">{tr ? `${filtered.length} yayın` : `${filtered.length} publication${filtered.length === 1 ? "" : "s"}`}</p>
      <div className="publication-list">
        {filtered.map((publication) => <article key={publication.title}><time>{publication.year}</time><div><h3>{publication.title}</h3><p>{publication.venue}</p></div><span>{topicLabel(publication.topic)}</span><a href="https://dblp.org/pid/179/3810.html" aria-label={tr ? `${publication.title} kaydını aç` : `Open record for ${publication.title}`}>↗</a></article>)}
        {filtered.length === 0 && <div className="empty-state"><strong>{tr ? "Eşleşen yayın bulunamadı." : "No matching publications."}</strong><span>{tr ? "Başka bir konu deneyin veya arama ifadenizi kısaltın." : "Try another topic or remove part of your search."}</span></div>}
      </div>
    </div>
  );
}
