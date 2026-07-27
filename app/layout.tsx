import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cortex Studio — Intelligent Operational Systems",
  description: "Egyptian software engineering studio building Arabic-first POS, ERP, retail and industrial systems across desktop, mobile and web.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Cortex Studio — Intelligent Operational Systems",
    description: "Where intelligence meets operations.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cortex Studio — Where intelligence meets operations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Studio — Intelligent Operational Systems",
    description: "Where intelligence meets operations.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
