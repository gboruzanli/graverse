"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  { x: 50, y: 49, r: 7, label: "Graph theory", type: "core" },
  { x: 27, y: 30, r: 4, label: "Connectivity", type: "theory" },
  { x: 72, y: 27, r: 4.5, label: "Network science", type: "network" },
  { x: 78, y: 63, r: 4, label: "Graph AI", type: "ai" },
  { x: 28, y: 70, r: 3.5, label: "Optimization", type: "theory" },
  { x: 12, y: 48, r: 2.5, label: "Domination", type: "theory" },
  { x: 91, y: 43, r: 2.5, label: "GraphRAG", type: "ai" },
  { x: 58, y: 81, r: 2.8, label: "Algorithms", type: "network" },
] as const;

const edges = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 7], [1, 4], [1, 5],
  [2, 3], [2, 6], [2, 7], [3, 6], [3, 7], [4, 7],
] as const;

const turkishLabels: Record<string, string> = {
  "Graph theory": "Çizge kuramı",
  Connectivity: "Bağlantılılık",
  "Network science": "Ağ bilimi",
  "Graph AI": "Çizge yapay zekâsı",
  Optimization: "Optimizasyon",
  Domination: "Baskınlık",
  GraphRAG: "GraphRAG",
  Algorithms: "Algoritmalar",
};

export function GraphUniverse({ locale = "en" }: { locale?: "en" | "tr" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const labelFor = (label: string) => locale === "tr" ? turkishLabels[label] ?? label : label;

  useEffect(() => {
    const element = ref.current;
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      element.style.setProperty("--mx", `${(event.clientX - bounds.left) / bounds.width - 0.5}`);
      element.style.setProperty("--my", `${(event.clientY - bounds.top) / bounds.height - 0.5}`);
    };
    element.addEventListener("pointermove", move);
    return () => element.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="universe" ref={ref} aria-label={locale === "tr" ? "Graverse Lab araştırma alanlarının etkileşimli haritası" : "Interactive map of Graverse Lab research areas"}>
      <div className="universe-grid" />
      <svg viewBox="0 0 100 100" role="img" aria-labelledby="graph-title graph-desc">
        <title id="graph-title">{locale === "tr" ? "Graverse araştırma evreni" : "Graverse research universe"}</title>
        <desc id="graph-desc">{locale === "tr" ? "Çizge kuramı, algoritmalar, ağ bilimi ve yapay zekâyı bağlayan bir ağ." : "A network connecting graph theory, algorithms, network science and artificial intelligence."}</desc>
        <g className="edges">
          {edges.map(([from, to]) => (
            <line key={`${from}-${to}`} x1={nodes[from].x} y1={nodes[from].y} x2={nodes[to].x} y2={nodes[to].y} />
          ))}
        </g>
        {nodes.map((node, index) => (
          <g
            className={`universe-node ${node.type} ${active === index ? "active" : ""}`}
            key={node.label}
            transform={`translate(${node.x} ${node.y})`}
            onPointerEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            tabIndex={0}
            role="button"
            aria-label={labelFor(node.label)}
          >
            <circle className="node-halo" r={node.r * 2.5} />
            <circle className="node-core" r={node.r} />
          </g>
        ))}
      </svg>
      <div className="graph-readout" aria-live="polite">
        <span>{locale === "tr" ? "Seçili alan" : "Selected field"}</span>
        <strong>{labelFor(nodes[active].label)}</strong>
      </div>
      <span className="graph-coordinate">38.4552° N · 27.2280° E</span>
    </div>
  );
}
