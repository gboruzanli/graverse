import type { Metadata } from "next";
import "../globals.css";
import "../interactive.css";
import "../resource-fix.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beta.graverse.org"),
  title: "Graverse Lab — Türkçe",
  description: "Ege Üniversitesi'nde çizge kuramı, algoritmalar, ağ bilimi ve çizge merkezli yapay zekâ araştırma laboratuvarı.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Graverse Lab",
    description: "Çizge Kuramı, Algoritmalar ve Ağ Bilimi",
    url: "https://beta.graverse.org/tr/",
    siteName: "Graverse Lab",
    type: "website",
  },
};

export default function TurkishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
