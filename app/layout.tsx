import type { Metadata } from "next";
import "./globals.css";
import "./interactive.css";
import "./resource-fix.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://graverse.org"),
  title: {
    default: "Graverse Lab",
    template: "%s · Graverse Lab",
  },
  description:
    "Graverse Lab studies graph theory, algorithms, network science, and graph-centered artificial intelligence at Ege University.",
  openGraph: {
    title: "Graverse Lab",
    description: "Graph Theory, Algorithms & Network Science",
    url: "https://graverse.org",
    siteName: "Graverse Lab",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
