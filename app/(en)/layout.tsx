import type { Metadata } from "next";
import "../globals.css";
import "../interactive.css";
import "../resource-fix.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beta.graverse.org"),
  title: {
    default: "Graverse Lab",
    template: "%s · Graverse Lab",
  },
  description:
    "Graverse Lab studies graph theory, algorithms, network science, and graph-centered artificial intelligence at Ege University.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Graverse Lab",
    description: "Graph Theory, Algorithms & Network Science",
    url: "https://beta.graverse.org",
    siteName: "Graverse Lab",
    type: "website",
  },
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
