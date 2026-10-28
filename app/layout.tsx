import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yira Villegas | Business Analyst & Process Improvement Leader",
  description:
    "Bilingual Business Analyst and Process Improvement Leader with 15+ years experience in ERP/BI, operations optimization, and digital transformation.",
  openGraph: {
    title: "Yira Villegas | Portfolio",
    description:
      "Bilingual Business Analyst & Operations Optimization Leader. SAP BW/SD, Power BI, SQL, Lean Process Improvement.",
    url: "https://yiravillegas.github.io",
    siteName: "Yira Villegas Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

